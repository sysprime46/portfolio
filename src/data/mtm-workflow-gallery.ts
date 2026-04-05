/** Screenshots in `public/workflows/` for the MedTech Momentum AI OS case study. */

export const mtmWorkflowGallery = [
  {
    file: "AI Document Processor.png",
    caption: "AI document processor pipeline",
  },
  {
    file: "Amazon Product Review & Sentiment Analysis.png",
    caption: "Product review & sentiment analysis",
  },
  {
    file: "Automated Email Alerts for Flagged AI Conversations _ n8n + SendGrid.png",
    caption: "Flagged AI conversations → email alerts (n8n + SendGrid)",
  },
  {
    file: "Company Intelligence v5.1.png",
    caption: "Company intelligence synthesis",
  },
  {
    file: "Company Research Agent.png",
    caption: "Company research agent",
  },
  {
    file: "Conversational Interview Agent.png",
    caption: "Conversational interview agent",
  },
  {
    file: "Escalation Workflow.png",
    caption: "Escalation workflow",
  },
  {
    file: "N8N Workflow-1.png",
    caption: "n8n workflow (1)",
  },
  {
    file: "N8N Workflow-2.png",
    caption: "n8n workflow (2)",
  },
  {
    file: "N8N Workflow-3.png",
    caption: "n8n workflow (3)",
  },
  {
    file: "N8N Workflow-4.png",
    caption: "n8n workflow (4)",
  },
  {
    file: "n8n workflow 6.png",
    caption: "n8n workflow (6)",
  },
  {
    file: "n8n workflow 7.png",
    caption: "n8n workflow (7)",
  },
  {
    file: "n8n workflow 8.png",
    caption: "n8n workflow (8)",
  },
  {
    file: "Workflow-1_Business-Intel-Synthesis.png",
    caption: "Business intel synthesis",
  },
  {
    file: "workflow-1-invoice-intake.png",
    caption: "Invoice intake automation",
  },
  {
    file: "workflow-2-expense-approval.png",
    caption: "Expense approval flow",
  },
  {
    file: "Workflow-2_Lead-Management.png",
    caption: "Lead management",
  },
  {
    file: "Workflow-3_Long-Form-Content-Generator.png",
    caption: "Long-form content generator",
  },
  {
    file: "workflow-3-monthly-reconciliation.png",
    caption: "Monthly reconciliation",
  },
  {
    file: "Workflow-4_Multi-Channel-Content-Generator.png",
    caption: "Multi-channel content generator",
  },
  {
    file: "Workflow-5_RAG-Chat-Agent-and-Document-Processing.png",
    caption: "RAG chat agent & document processing",
  },
  {
    file: "Workflow-6_Report-Generation-from-Structured-Intake.png",
    caption: "Report generation from structured intake",
  },
] as const;

export function workflowImageSrc(file: string): string {
  return `/workflows/${encodeURIComponent(file)}`;
}
