import { BookOpen, FileText, Video, Download } from "lucide-react";

export const resources = [
  {
    icon: FileText,
    type: "Guide",
    title: "The Home Care Website Checklist",
    body: "31 things every agency website should include to build family trust, improve local visibility, and guide visitors toward action.",
    pdf: "/pdfs/resource-1.pdf",
    buttonText: "Open Guide",
  },
  {
    icon: BookOpen,
    type: "Playbook",
    title: "Local SEO Playbook for Care Agencies",
    body: "A practical framework for improving local search visibility with service-area pages, Google Business Profile basics, reviews, and website structure.",
    pdf: "/pdfs/resource-2.pdf",
    buttonText: "Open Playbook",
  },
  {
    icon: Video,
    type: "Workshop",
    title: "Caregiver Recruitment Funnel Walkthrough",
    body: "A simple walkthrough showing how care agencies can structure recruitment pages, application flows, and follow-up paths for caregiver applicants.",
    pdf: "/pdfs/resource-3.pdf",
    buttonText: "Open Walkthrough",
  },
  {
    icon: Download,
    type: "Template",
    title: "Referral Source Outreach Tracker",
    body: "A simple tracker to help organize referral partners, follow-ups, contact status, and relationship-building activity with hospitals, clinics, and physicians.",
    pdf: "/pdfs/resource-4.pdf",
    buttonText: "Open Template",
  },
];
