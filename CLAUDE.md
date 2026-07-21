# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (both `pnpm-lock.yaml` and `package-lock.json` exist in the repo, but pnpm is the one used in practice — see README).

- `pnpm dev` - start dev server (localhost:3000)
- `pnpm build` - production build
- `pnpm start` - run production build
- `pnpm lint` - ESLint (`next/core-web-vitals` config)
- `pnpm format` / `pnpm format:check` - Prettier

There is no test suite configured in this repo.

## Architecture

This is a Next.js 14 App Router personal portfolio/resume site with an AI chatbot bolted on. Two things drive nearly all of the interesting code: **`src/data/resume.tsx`** (the single source of truth for all portfolio content) and the **multi-agent chatbot pipeline** under `src/lib/agents/`.

### Content model

- `src/data/resume.tsx` exports `DATA`: name, summary, skills, work experience, education, projects, hackathons, certifications, contact links, nav links. Every page (`src/app/page.tsx`, `projects`, `hackathons`, `certifications`) reads from this object — there is no CMS or database backing the static content.
- Blog posts are MDX files in `content/*.mdx`, parsed by `src/data/blog.ts` (gray-matter for frontmatter + a `unified`/`remark`/`rehype` pipeline with `rehype-pretty-code`/Shiki for syntax highlighting). Rendered via `src/components/mdx.tsx` at `src/app/blog/[slug]/page.tsx`.
- `src/data/mtm-workflow-gallery.ts` feeds the image gallery on the dedicated case-study page `src/app/projects/mtm-ai-operating-system/page.tsx`.
- UI is shadcn/ui (`components.json`, style "new-york") in `src/components/ui/`, plus a few Magic UI components (`BlurFade`, `Dock`) in `src/components/magicui/`. Path alias `@/*` → `src/*`.

### Chatbot: sequential multi-agent pipeline

The portfolio has an AI chat widget (`src/components/chat-popover.tsx`) that answers questions about the resume owner. The backend is `POST /api/chat` (`src/app/api/chat/route.ts`, edge runtime), which streams Server-Sent Events (`status` updates then a final `response` event) while `orchestrateAgents()` (`src/lib/agents/orchestrator.ts`) runs a fixed pipeline of specialized agents, each using Groq (`@ai-sdk/groq`, model `openai/gpt-oss-120b`) via Vercel AI SDK's `generateObject` against a Zod schema (`src/lib/agents/types.ts`):

1. **`intent-sentiment.ts`** - classifies the message into a `workflowType`: `knowledge_query`, `contact`, `general`, or `out_of_scope`. This branches the rest of the pipeline.
2. **`query-rewriter.ts`** - rewrites the user message into a better search query for memory lookup.
3. **Memory** (`src/lib/memory-manager.ts`) - `retrieveMemories`/`addMemories` talk to Mem0 (`mem0ai` `MemoryClient`, keyed by `sessionId` as `user_id`) for cross-turn context (preferences, prior clarifications, previously-tried sources). Memory context is folded into prompts as free text, not structured data.
4. **`knowledge-retriever.ts`** - only for `knowledge_query`: passes the entire `DATA` resume object plus memory context to the model and asks it to extract relevant facts + cite sources (e.g. `["work", "skills", "projects"]`).
5. **`answer-drafter.ts`** - drafts an answer from the retrieved data.
6. **`answer-validator.ts`** - checks the draft against the retrieved data; can set `needsRetrieval: true` to force a retry.
7. **`general-responder.ts`** - handles small talk (`workflowType: "general"`) without touching the resume data.

The orchestrator retries the retrieve→draft→validate loop up to 3 times if validation fails, then gives up with an apology message. `contact` and `out_of_scope` workflow types short-circuit with hardcoded responses. Every non-`out_of_scope` conversation turn is persisted to Mem0 via `addMemories`.

Chat sessions are client-side only: `src/hooks/use-chat-session.ts` and `src/lib/session-manager.ts` generate/store a `sessionId` in `sessionStorage` with a 7-day expiry (no server-side session store). `src/app/api/cleanup-sessions/route.ts` and `src/app/api/cron/cleanup-memories/route.ts` (triggered by the Vercel Cron in `vercel.json`, auth'd via `CRON_SECRET` bearer token) are meant to expire old memories, but `cleanupExpiredMemories()` in `memory-manager.ts` is currently a no-op stub.

Required env vars (see `.env.example`): `GROQ_API_KEY`, `MEM0_API_KEY`, `CRON_SECRET`.

### Conventions

- Prettier config: double-space indent is not used — 2-space tabs, double quotes off (`singleQuote: false` means double quotes), semicolons on, print width 80.
- Agent modules all return the `AgentResult<T>` shape (`{ success, data?, error? }`) rather than throwing, so the orchestrator can branch on `.success` and surface a fallback message instead of crashing the stream.
