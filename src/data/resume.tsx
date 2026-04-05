import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ralph Llyod Fernando",
  initials: "RLF",
  url: "https://dnachavez.dev",
  location: "Cebu City, PH",
  locationLink: "https://www.google.com/maps/place/cebu+city",
  description:
    "AI & Data Engineer with 8+ years of experience building AI agents, LLM-powered automation, and data pipelines. I automate business workflows—from marketing to operations—and deliver full-stack AI products that drive real outcomes.",
  descriptionLines: [
    { icon: "brain", text: "AI & Data Engineer" },
    { icon: "clock", text: "8+ years of experience" },
    { icon: "workflow", text: "Agentic Workflow Automations" },
    { icon: "layers", text: "Full-Stack AI Products" },
    { icon: "database", text: "Data Pipelines" },
  ],
  summary:
    "With 8+ years of hands-on experience, I help businesses unlock the full potential of AI and data to cut costs, boost efficiency, and scale operations. My expertise spans state-of-the-art LLMs, intelligent AI agents, RAG systems, and robust data engineering—from ETL pipelines to analytics dashboards. I automate business workflows across marketing, sales, and operations, and build customer-facing chatbots that handle thousands of conversations. I deliver solutions that free up your team and accelerate growth, moving fast from concept to production with a focus on measurable ROI and real competitive advantage.",
  avatarUrl: "/avatar/me-light.png",
  skills: [
    {
      category: "Languages",
      logoUrl: "/skills/backend.png",
      skills: ["Python", "TypeScript", "JavaScript", "C#"],
    },
    {
      category: "Frameworks & Libraries",
      logoUrl: "/skills/frameworks-libraries.png",
      skills: [
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Autonomous Agents",
        "ReAct",
        "Node.js",
        "React.js",
        "Next.js",
        ".NET Core",
        "ASP",
        "Laravel",
      ],
    },
    {
      category: "Automation",
      logoUrl: "/skills/automation-tools.png",
      skills: ["N8N", "Zapier", "Make", "Notion", "Trello"],
    },
    {
      category: "AI/ML",
      logoUrl: "/skills/ai-tools.png",
      skills: [
        "GPT",
        "Gemini",
        "Claude",
        "RAG",
        "NanoBanana",
        "Prompt Engineering",
        "Fine-Tuning",
        "GAN",
      ],
    },
    {
      category: "Cloud & DevOps",
      logoUrl: "/skills/cloud-deployment.png",
      skills: [
        "AWS (Bedrock, Sagemaker)",
        "Azure (AI Foundry, OpenAI, Document Intelligence, Databricks)",
        "GCP (Vertex AI)",
        "CI/CD",
        "Terraform",
        "GitHub",
        "Replit",
      ],
    },
    {
      category: "Databases",
      logoUrl: "/skills/databases.png",
      skills: ["PostgreSQL", "Supabase", "Redis", "Pinecone", "MongoDB", "DynamoDB", "BigQuery"],
    },
    {
      category: "Version Control",
      logoUrl: "/skills/development-tools.png",
      skills: ["Git", "GitHub", "Bitbucket"],
    },
    {
      category: "Data Engineering",
      logoUrl: "/skills/design-cms.png",
      skills: [
        "Statistical Analysis",
        "Power BI",
        "Tableau",
        "Databricks",
        "Apache Airflow",
        "dbt",
        "Snowflake",
        "Redshift",
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ralphllyod46@gmail.com",
    tel: "+6399428166588",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pokemon918",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ralph-llyod-fernando-007b30387",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dnachavez_dev",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/dnachavez",
        icon: Icons.instagram,
        navbar: true,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@dnachavez",
        icon: Icons.tiktok,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GoTeam",
      badges: ["Philippines"],
      href: "https://go.team",
      location: "Remote / Virginia Beach, VA",
      title: "AI Specialist",
      logoUrl: "/work-experience/goteam.png",
      start: "June 2025",
      end: "Present",
      featured: false,
      description: [
        "Led design and rollout of a multi-agent AI automation platform across research, analysis, and project management—balancing cost, latency, and reliability (~70% less operational load for U.S. client teams).",
        "Architected n8n orchestration with hybrid event- and schedule-based routing; drove model selection (o4-mini vs o3-deep-research) and built financial-analysis agents with flexible outputs for Excel workflows.",
        "Shipped proactive monitoring, NLP-based comment automation for task metadata, template-based document generators, and Zapier-backed cross-system sync.",
        "Built Next.js conversational agents on Supabase (Vercel Edge) and Power Automate two-way Outlook calendar sync to remove duplicate scheduling work.",
      ],
    },
    {
      company: "MedTech Momentum",
      href: "https://www.linkedin.com/company/medtechmomentum/",
      badges: ["Freelance", "USA"],
      location: "Remote",
      title: "AI Software Developer",
      logoUrl: "/work-experience/medtechmomentum.png",
      start: "February 2024",
      end: "March 2025",
      featured: true,
      description: [
        "Built an AI operating system for MedTech Momentum, a marketing agency supporting 150+ healthcare innovators, to automate the full client lifecycle from onboarding and strategy through execution, reporting, and account management.",
        "Designed agents for Proposal intake, Client Audits, Competitive Intelligence & Market Research, Strategic Planning & Gantt creation, Buyer Persona development, Messaging & Storytelling, and Brand Identity & Asset creation so each engagement started with a structured strategic baseline.",
        "Delivered execution-focused agents for Website Strategy & Optimization, SEO Strategy / Benchmark / Optimization, Content Marketing Strategy & Assets, Social Media Management & Content Calendar, Press Release drafting, Webinar production, and Video Script creation.",
        "Built revenue and client-ops agents for Lead Generation (LG6), Sales Enablement, Analytics & Performance Monitoring, Monthly Impact Reports, Quarterly Marketing Activity Reports, and Accounts Management to keep campaigns, reporting, and client communications continuously updated.",
        "Implemented MedTech-specific differentiators including a Compliance agent that scanned content against FDA, MDR, GDPR, and HIPAA risk patterns, a Clinical Narrative agent that transformed technical and regulatory materials into StoryBrand-aligned messaging, and a MedTech Persona agent that generated persona cards, journey maps, and messaging guides from CRM and enrichment data.",
        "Integrated the system with tools such as HubSpot, GA4, Monday.com, Notion, WordPress, Canva, Figma, Apollo, Dripify, Zoom/WebinarJam, and SEO platforms so agent outputs fed directly into live delivery workflows instead of staying as isolated drafts.",
        "The agent program reduced reliance on 10+ staff-equivalent manual roles while increasing delivery capacity, accelerating campaign production, and improving leadership visibility through automated dashboards, reports, and client-ready deliverables.",
      ],
    },
    {
      company: "Synthesis Health",
      href: "https://www.linkedin.com/company/synthesis-health/",
      badges: ["Freelance", "USA"],
      location: "Remote",
      title: "Data Architect",
      logoUrl: "/work-experience/synthesishealth.png",
      start: "November 2023",
      end: "February 2024",
      featured: false,
      description: [
        "Cloud-native imaging platform: enterprise data architecture for real-time radiology across millions of DICOM studies.",
        "Unified data lake across PACS and legacy systems; Kafka-style streaming to AI inference with findings in physician worklists.",
        "HIPAA-aligned governance (RBAC, audit, encryption); ~40% faster study turnaround and 10x headroom for concurrent radiologist sessions.",
      ],
    },
    {
      company: "Tolstoy",
      href: "https://gotolstoy.com",
      badges: ["Philippines"],
      location: "Remote / Denver, CO",
      title: "Full Stack Engineer & AI Engineer",
      logoUrl: "/work-experience/tolstoy.png",
      start: "August 2024",
      end: "March 2025",
      featured: false,
      description: [
        "Multi-agent AI for interactive video (10,000+ businesses): parallel agents with a 2s timeout SLA—higher accuracy while staying under ~3s responses.",
        "Weighted parallel orchestration, prompt framework with A/B testing, and a unified inbox across 5+ channels within API limits.",
        "Migrated to SQS + concurrent Lambdas for ~3x traffic (30k→90k/mo) and Black Friday stability; tuned cost and p95 latency.",
        "Parallel ETL with batching; idempotency, DLQs, and delivery guarantees—cut data-loss incidents to zero. Mentored juniors and rolled out AI dev tooling.",
        "CS onboarding prototype (6→3 weeks) and React Flow foundation for a no-code AI workflow builder demoed to enterprise prospects.",
      ],
    },
    {
      company: "Develop Kreativity",
      href: "https://www.developkreativity.com",
      badges: ["Philippines"],
      location: "Remote / Cebu City, PH",
      title: "Co-Founder & Chief Technology Officer",
      logoUrl: "/work-experience/developkreativity.png",
      start: "November 2023",
      end: "December 2025",
      featured: false,
      description: [
        "Co-founded agency to 15+ clients; integrated offering (brand, AI automation, engineering, UI/UX, content) with technical leadership on 30+ projects.",
        "Standardized delivery and reusable components (~40% less custom build, ~50% faster timelines, strong client satisfaction).",
        "AI automation practice (Make, Zapier); stack strategy (WordPress, Laravel, Next.js) so 20+ clients scaled digital ops without linear cost growth.",
        "Design system (Figma), content pipeline, lead-gen chatbots; scaled team from two co-founders to 10+ across dev, design, and marketing.",
      ],
    },
  ],
  education: [
    {
      school: "University of the Philippines Diliman",
      href: "https://upd.edu.ph",
      degree: "Master's Degree, Computer and Information Science and Support Services",
      logoUrl: "/education/upd.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "University of the Philippines Diliman",
      href: "https://upd.edu.ph",
      degree: "Bachelor's Degree, Computer and Information Science and Support Services",
      logoUrl: "/education/upd.png",
      start: "2014",
      end: "2018",
    },
  ],
  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      href: "https://www.credly.com/badges/4ce028b3-daec-457d-a607-631fb74b5e1e",
      dates: "April 30th, 2025",
      description: "Issued by Coursera",
      image: "/certifications/google-data-analytics-professional.png",
    },
  ],
  projects: [
    {
      title: "MedTech Momentum AI Operating System",
      href: "/projects/mtm-ai-operating-system",
      dates: "February 2024 - March 2025",
      active: true,
      pinned: true,
      thumbnailSplit: [
        "/work-experience/medtechmomentum.png",
        "/projects/n8n-mark.svg",
      ],
      description:
        "Case study: production **n8n** agentic program for a MedTech marketing agency—strategy, audits, multi-channel content, lead gen, compliance-aware workflows, and automated reporting.",
      technologies: [
        "n8n",
        "OpenAI",
        "HubSpot",
        "GA4",
        "Monday.com",
        "Notion",
        "LangChain",
      ],
      links: [
        {
          type: "MedTech Momentum",
          href: "https://www.linkedin.com/company/medtechmomentum/",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      video: "",
    },
    {
      title: "ThinkOfATitle",
      href: "https://thinkofatitle.dnachavez.dev",
      dates: "April 2025",
      active: true,
      description:
        "ThinkOfATitle is an AI-powered tool that helps you generate creative and professional titles for academic papers, dissertations, theses, and research documents. It leverages Google's Gemini 2.0 Flash model to generate compelling titles and brief overviews for academic research papers, theses, and dissertations based on your research topic or field.",
      technologies: ["Next.js", "TypeScript", "Gemini"],
      links: [
        {
          type: "Website",
          href: "https://thinkofatitle.dnachavez.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pokemon918/ThinkOfATitle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/thinkofatitle.png",
      video: "",
    },
    {
      title: "Bilis Delivery",
      href: "https://bilisdelivery.com",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Bilis Delivery is a logistics service that focuses on fast and efficient delivery of various items to your doorstep. This project is built with Laravel and Flutter, providing a web and android application for the logistics team, restaurant management, and for the customers. The system includes features such as real-time tracking, order management, and delivery status updates.",
      technologies: ["Flutter", "Dart", "Laravel", "MySQL", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://bilisdelivery.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/bilis-delivery.png",
      video: "",
    },
    {
      title: "SentiAI",
      href: "",
      dates: "April 2024",
      active: true,
      description:
        "It is capable of analyzing and classifying the sentiment of text data into positive, negative, or neutral categories.",
      technologies: ["Python", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/pokemon918/fine-tuning-tinybert-for-sentiment-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sentiai.png",
      video: "",
    },
    {
      title: "Lyons Global",
      href: "https://lyonsglobal.us",
      dates: "February 2024",
      active: true,
      description:
        "Lyons Global is the official website of Lyons Global™. The website is built with WordPress and features a custom theme, custom post types, and custom fields. Our team at Develop Kreativity redesigned their website using WordPress, creating a modern and user-friendly interface that showcases their expertise and services as a digital health solutions company.",
      technologies: ["WordPress"],
      links: [
        {
          type: "Website",
          href: "https://lyonsglobal.us",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/lyons-global.png",
      video: "",
    },
    {
      title: "USPF IoT Parking System",
      href: "",
      dates: "December 2023",
      active: true,
      description:
        "It aims to innovate the parking management of the university to solve the problem of managing parking spaces. The project's web interface is built with CodeIgniter 4 and uses Arduino Uno R4 WiFi hardware.",
      technologies: ["CodeIgniter", "MySQL", "Arduino"],
      links: [
        {
          type: "Source",
          href: "https://github.com/pokemon918/iotparkingsystem",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/uspf-iot-parking-system.png",
      video: "",
    },
    {
      title: "Lyons Global LMS",
      href: "https://lms.lyonsglobal.us",
      dates: "November 2023",
      active: true,
      description:
        "The project is a complete redesign of Lyons Global™'s learning management system using WordPress. It supports various types of content delivery, including interactive modules, document-based resources, and video learning. A user registration and course access approval was added as well.",
      technologies: ["WordPress"],
      links: [
        {
          type: "Website",
          href: "https://lms.lyonsglobal.us",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/lyons-global-lms.png",
      video: "",
    },
    {
      title: "Philippine Scripts Translator",
      href: "https://philippine-scripts-translator.netlify.app",
      dates: "November 2023",
      active: true,
      description:
        "Philippine Scripts Translator is a tool to translate modern Filipino texts into ancient Philippine scripts that are included in the unicode charts. The project is inspired by jennayey's Philippine Script Translator and uses Next.js for its front-end framework.",
      technologies: ["Next.js"],
      links: [
        {
          type: "Website",
          href: "https://philippine-scripts-translator.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pokemon918/philippine-scripts-translator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/philippine-scripts-translator.png",
      video: "",
    },
    {
      title: "GTranslate",
      href: "https://gtranslation.netlify.app",
      dates: "August 2023",
      active: true,
      description:
        "GTranslate is a translation tool that supports several languages from Google Translate. The project uses Next.js for its front-end framework and the Google Translate API from Pawan.Krd for its back-end.",
      technologies: ["Next.js"],
      links: [
        {
          type: "Website",
          href: "https://gtranslation.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pokemon918/nextjs-gtranslation-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gtranslate.png",
      video: "",
    },
    {
      title: "Buddy",
      href: "",
      dates: "June 2023",
      active: true,
      description:
        "It understands and responds to a wide range of inquiries using OpenAI's GPT-3.5-turbo model, DALL-E image generation, and custom commands to provide users with quick and easy access to a university-curated knowledgebase.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      links: [],
      image: "/projects/uspf-buddy.png",
      video: "",
    },
    {
      title: "AuggieGPT",
      href: "https://auggiegpt.streamlit.app",
      dates: "February 2023",
      active: true,
      description:
        "A proposed Streamlit chatbot assistant for the University of Southern Philippines Foundation (USPF) built using Python and OpenAI's GPT-3.5-turbo model. It is capable of understanding and responding to specific queries related to the university.",
      technologies: ["Python", "OpenAI", "Streamlit"],
      links: [
        {
          type: "Website",
          href: "https://auggiegpt.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pokemon918/AuggieGPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/auggie-gpt.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "UPD DCS Days 2025",
      dates: "March 14th, 2025",
      location: "Quezon City, PH",
      description:
        "Developed TESTify, an AI exam proctoring system with facial and behavioral analysis for Canvas LMS using Python, OpenAI, and OpenCV at the UPD DCS Days 2025.",
      image: "/hackathons/upd.png",
      mlh: "",
      win: "Hackathon Champion / Best Innovative Solution",
      links: [],
    },
    {
      title: "UPD DCS Days 2023",
      dates: "December 9th, 2023",
      location: "Quezon City, PH",
      description:
        "Developed CERTify, an AI-integrated academic record authentication system, at the UPD DCS Days 2023.",
      image: "/hackathons/upd.png",
      mlh: "",
      win: "Hackathon Champion / Most Promising Innovation / Best in Logo",
      links: [],
    },
    {
      title: "TCS Empowers goIT",
      dates: "November 8th - 12th, 2023",
      location: "Quezon City, PH",
      description:
        "Led a team of three senior high school students in developing TrackTrace, a COVID-19 digital contact tracing application.",
      image: "/hackathons/tcs-empowers.png",
      mlh: "",
      win: "3rd Place",
      links: [],
    },
  ],
} as const;
