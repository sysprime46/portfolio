import { MtmWorkflowGallery } from "@/components/mtm-workflow-gallery";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

const medtech = DATA.work.find((w) => w.company === "MedTech Momentum");

export const metadata: Metadata = {
  title: "MedTech Momentum AI Operating System",
  description:
    "Production n8n agentic workflows for a MedTech marketing agency—strategy, content, lead generation, compliance, and executive reporting.",
};

export default function MtmAiOperatingSystemPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <div className="border-b border-border/80 bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 md:px-6 md:py-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeftIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
            All projects
          </Link>

          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              Case study · AI automation
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AI operating system for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                MedTech Momentum
              </span>
            </h1>
            <p className="max-w-3xl text-pretty text-sm text-muted-foreground sm:text-base">
              During my contract as an AI software developer (February 2024–March
              2025), I designed and shipped a coordinated program of production{" "}
              <strong>n8n</strong> workflows and LLM-powered agents for a
              full-service MedTech marketing agency serving{" "}
              <strong>150+</strong> healthcare innovators. The system covered the
              full client lifecycle—from strategic audits and Gantt planning
              through content, social, lead gen, compliance-aware copy, and
              automated executive reporting.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "n8n",
                "OpenAI",
                "HubSpot",
                "GA4",
                "Monday.com",
                "Notion",
                "WordPress",
                "Apollo",
                "SendGrid",
              ].map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <Link
                href="https://www.linkedin.com/company/medtechmomentum/"
                className="underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MedTech Momentum on LinkedIn
              </Link>
            </p>
          </div>

          {medtech && Array.isArray(medtech.description) && (
            <div className="rounded-2xl border border-border/80 bg-card/50 p-5 shadow-sm backdrop-blur-sm md:p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Scope &amp; outcomes
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground [text-wrap:pretty]">
                {medtech.description.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/80" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl flex-1 space-y-6 px-4 py-10 md:px-6 md:py-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Workflow gallery
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            A selection of production workflow screenshots from the program.
            Each tile opens a full-size lightbox—use{" "}
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
              Esc
            </kbd>{" "}
            to close, or Previous / Next inside the viewer.
          </p>
        </div>
        <MtmWorkflowGallery />
      </div>
    </main>
  );
}
