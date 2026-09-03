import { Fragment } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SITE_URL = "https://getsopsupport.com";

// Short labels for breadcrumb pills — distinct from the longer SEO <title>
// text each route already sets via head().
const LABELS: Record<string, string> = {
  services: "Services",
  "why-us": "Why Us",
  process: "Process",
  results: "Results",
  enhancements: "Enhancements",
  resources: "Resources",
  "launch-program": "Launch Program",
  "about-us": "About Us",
  contact: "Contact",
  faq: "FAQ",
  "privacy-policy": "Privacy Policy",
  "meet-our-team": "Meet Our Team",
  "clinical-documentation-qa": "Clinical Documentation QA",
  "home-health-agency-referrals-online": "Home Health Referrals Online",
  "hospice-providers": "Hospice Providers",
  "long-term-care-providers": "Long-Term Care Providers",
  "revenue-cycle-billing": "Revenue Cycle & Billing",
  "senior-care-companies": "Senior Care Companies",
  "cms-enrollment-moratoria": "CMS Enrollment Moratoria",
  "digital-presence-checklist": "Digital Presence Checklist",
  "marketing-essentials": "Marketing Essentials",
  "why-professional-website-matters": "Why a Professional Website Matters",
};

export function Breadcrumbs() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const rawSegments = pathname.split("/").filter(Boolean);
  // /playbook/* pages have no page at the bare /playbook URL — they're
  // presented (and linked to, from the Resources carousel) as part of the
  // Resources hub, so group them there instead of showing a "Playbook"
  // crumb that would link to a 404.
  const segments =
    rawSegments[0] === "playbook" ? ["resources", rawSegments[1]] : rawSegments;

  const crumbs = segments
    .filter((seg): seg is string => Boolean(seg))
    .map((seg, i) => ({
      href: "/" + segments.slice(0, i + 1).join("/"),
      label: LABELS[seg] ?? seg,
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        item: `${SITE_URL}${c.href}`,
      })),
    ],
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger -- static, non-user-controlled JSON */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-white">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map((c, i) => (
            <Fragment key={c.href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === crumbs.length - 1 ? (
                  <BreadcrumbPage className="text-white">{c.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={c.href} className="hover:text-white">
                    {c.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
