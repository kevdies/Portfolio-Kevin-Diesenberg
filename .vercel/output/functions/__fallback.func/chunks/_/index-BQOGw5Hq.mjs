import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import * as React from 'react';
import { useState } from 'react';
import { c as cn, T as Tooltip, a as TooltipTrigger, b as TooltipContent, D as DialogTitle, d as DialogContent, e as Dialog, B as Button } from './router-BY-ncZr1.mjs';
import { Expand, ExternalLink, Mail, FileText, ArrowUpRight } from 'lucide-react';
import '@tanstack/react-query';
import '@tanstack/react-router';
import '@vercel/analytics/react';
import '@vercel/speed-insights/react';
import '@radix-ui/react-tooltip';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '@radix-ui/react-dialog';
import '@radix-ui/react-dropdown-menu';

const kevHenryArti = "/assets/kev-henry-artichoke-Dx9BgUOO.webp";
const Section = React.forwardRef((t0, ref) => {
  const $ = c(11);
  let children;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== children || $[7] !== props || $[8] !== ref || $[9] !== t1) {
    t2 = /* @__PURE__ */ jsx("section", { ref, className: t1, ...props, children });
    $[6] = children;
    $[7] = props;
    $[8] = ref;
    $[9] = t1;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  return t2;
});
Section.displayName = "Section";
function AboutSection(t0) {
  const $ = c(7);
  const {
    id: t1
  } = t0;
  const id = t1 === void 0 ? "about" : t1;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-heading text-foreground text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl", children: "Built features serving 6 local news stations across 4 states" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base sm:text-lg md:text-xl", children: "Graham Media Group \u2022 NBC, CBS, ABC Affiliates \u2022 Video Analytics APIs" })
    ] });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs font-medium", children: "Video Player & Analytics Integration:" });
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-md flex-wrap justify-center gap-2 text-xs", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-secondary text-muted-foreground rounded px-2 py-1", children: "Anyclip Player" }),
      /* @__PURE__ */ jsx("span", { className: "bg-secondary text-muted-foreground rounded px-2 py-1", children: "Bitmovin Player" }),
      /* @__PURE__ */ jsx("span", { className: "bg-secondary text-muted-foreground rounded px-2 py-1", children: "Nielsen DCR" }),
      /* @__PURE__ */ jsx("span", { className: "bg-secondary text-muted-foreground rounded px-2 py-1", children: "Chartbeat" }),
      /* @__PURE__ */ jsx("span", { className: "bg-secondary text-muted-foreground rounded px-2 py-1", children: "Braze" }),
      /* @__PURE__ */ jsx("span", { className: "bg-secondary text-muted-foreground rounded px-2 py-1", children: "Sentry" })
    ] });
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  let t5;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      t3,
      t4,
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-md flex-wrap justify-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-muted text-muted-foreground rounded px-2 py-1", children: "React" }),
        /* @__PURE__ */ jsx("span", { className: "bg-muted text-muted-foreground rounded px-2 py-1", children: "TypeScript" }),
        /* @__PURE__ */ jsx("span", { className: "bg-muted text-muted-foreground rounded px-2 py-1", children: "Node.js" }),
        /* @__PURE__ */ jsx("span", { className: "bg-muted text-muted-foreground rounded px-2 py-1", children: "AWS" }),
        /* @__PURE__ */ jsx("span", { className: "bg-muted text-muted-foreground rounded px-2 py-1", children: "ArcXP CMS" })
      ] })
    ] });
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  let t6;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl space-y-8 text-center", children: [
      t2,
      t5,
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-xs sm:max-w-sm", children: /* @__PURE__ */ jsx("div", { className: "bg-secondary relative aspect-4/3 w-full overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx("img", { src: kevHenryArti, alt: "Kevin Diesenberg with his dogs enjoying a sunny day by Lake Huron", className: "h-full w-full object-cover", loading: "eager" }) }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mx-auto max-w-lg text-sm sm:text-base", children: "Proven track record shipping production features to 6 NBC, CBS, and ABC affiliate news stations across Texas, Michigan, Florida, and Virginia markets." })
    ] });
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  let t7;
  if ($[5] !== id) {
    t7 = /* @__PURE__ */ jsx(Section, { id, children: t6 });
    $[5] = id;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  return t7;
}
function Card(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function CardContent(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("px-6", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-content", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
const experiences = [{
  role: "Web Developer | Software Engineer",
  company: "Graham Media Group",
  period: "March 2024 \u2013 Present",
  impact: "Features serving 6 local news stations across 4 states",
  metrics: [{
    label: "TV Stations",
    value: "6"
  }, {
    label: "States Covered",
    value: "4"
  }, {
    label: "Network Affiliates",
    value: "NBC CBS ABC"
  }, {
    label: "Video Players",
    value: "Anyclip & Bitmovin"
  }],
  details: ["Built features for NBC/CBS/ABC affiliates: KPRC-Houston, WDIV-Detroit, KSAT-San Antonio, WKMG-Orlando, WJXT-Jacksonville, WSLS-Roanoke", "Integrated Nielsen DCR and Chartbeat analytics into Anyclip and Bitmovin video players", "Deployed dual video player architecture serving local news viewers across 4 states", "Built custom ArcXP CMS templates and pages using Content API for editors, publishers, and writers", "Implemented Sentry monitoring, migrated user base to Braze from Blueconic, and AWS infrastructure"],
  current: true
}, {
  role: "Rigger & Stagehand",
  company: "IATSE (Theatrical Stage Employees)",
  period: "2008 \u2013 2021",
  details: ["Rigged lighting & sound for 1000+ shows, events, political rallies, and theatrical productions", "Spotlight operator for President Obama speech and worked 3 presidential inaugurations", "Maintained safety standards across complex live productions"],
  current: false
}, {
  role: "Backcountry Water Treatment Operator",
  company: "National Park Service",
  period: "2009 \u2013 2019",
  details: ["Operated water treatment systems serving 50,000+ park visitors", "Maintained 99.9% system uptime in remote backcountry locations"],
  current: false
}];
function ExperienceSection(t0) {
  const $ = c(3);
  const {
    id: t1
  } = t0;
  const id = t1 === void 0 ? "experience" : t1;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl space-y-6", children: experiences.map(_temp3) });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== id) {
    t3 = /* @__PURE__ */ jsx(Section, { id, children: t2 });
    $[1] = id;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  return t3;
}
function _temp3(exp, idx) {
  return /* @__PURE__ */ jsx(Card, { className: cn("transition-colors hover:border-brand-primary/20", exp.current && "ring-2 ring-brand-primary/20 shadow-lg"), children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 md:p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col md:flex-row md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground md:text-xl", children: exp.role }),
          exp.current && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-brand-primary px-2 py-1 text-xs font-medium text-white", children: "Current" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-muted-foreground", children: exp.company }),
        exp.impact && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-brand-primary sm:text-base", children: exp.impact })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "mt-2 text-sm font-medium text-muted-foreground md:mt-0", children: exp.period })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: exp.details.map(_temp$2) }),
    exp.current && exp.metrics && /* @__PURE__ */ jsx("div", { className: "mt-6 border-t border-border/50 pt-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 text-center", children: exp.metrics.map(_temp2) }) })
  ] }) }, idx);
}
function _temp2(metric, i_0) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded bg-muted/50 px-2 py-3", children: [
    /* @__PURE__ */ jsx("div", { className: "text-base font-semibold text-foreground sm:text-lg", children: metric.value }),
    /* @__PURE__ */ jsx("div", { className: "text-xs leading-tight text-muted-foreground", children: metric.label })
  ] }, i_0);
}
function _temp$2(detail, i) {
  return /* @__PURE__ */ jsxs("li", { className: "group flex items-start", children: [
    /* @__PURE__ */ jsx("span", { className: "mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" }),
    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground", children: detail })
  ] }, i);
}
const brgLeaderboard = "/assets/Dark_Mode_Leaderboard_Mobile-9hiCm5fo.webp";
const clickOnDetroitNav = "/assets/clickondetroit-mobile-nav-CdCb-SiD.webp";
const newsLetterSignUpCard = "/assets/Newsletter_Sign_Up_Card-CtwQrzG7.webp";
const pinUploadModal = "/assets/Pin_Upload_Success_Modal-tIYnJ6b4.webp";
const professionalProjects = [{
  name: "Navigation Refactor",
  image: clickOnDetroitNav,
  alt: "Click On Detroit mobile navigation menu showing accordion sections",
  description: "Built composable design system components wrapping Radix UI and Headless UI for accessibility. Replaced prop drilling with context-based state management using reducer pattern with typed actions.",
  businessImpact: "Unified navigation UX across 700k+ daily users",
  results: ["Context + reducer state", "IntersectionObserver perf", "ResizeObserver handling", "Integrated Trending Feed"],
  features: ["React & TypeScript with strict types", "Composable Radix UI & Headless UI primitives", "Context-based state via useReducer", "MiniBar with IntersectionObserver scroll detection", "ResizeObserver for dynamic height changes", "Breaking news auto-scroll with pause on hover/focus", "dvh units for mobile browser compatibility", "inert attribute + ARIA labels for accessibility"],
  liveUrls: [{
    label: "Click On Detroit",
    url: "https://www.clickondetroit.com"
  }, {
    label: "WSLS (Roanoke)",
    url: "https://www.wsls.com"
  }],
  priority: true
}, {
  name: "Photo Contest Leaderboard",
  image: brgLeaderboard,
  alt: "Leaderboard UI for photo contests",
  description: "Reusable leaderboard powering photo contests for thousands of participants across multiple platforms.",
  businessImpact: "Increased user engagement through real-time rankings with enterprise API integrations",
  results: ["Real-time data sync with useSWR", "Cross-platform contest support", "Dynamic contest configuration", "Sentry error monitoring"],
  features: ["React & TypeScript", "Headless UI Tabs with custom styled primitives", "Real-time data sync with useSWR", "Dynamic contest rule configuration", "Category-based CTAs for media uploads", "Admin-only overall leaderboard view", "Snap-scroll navigation for mobile UX", "Fully responsive across all devices"],
  liveUrls: [{
    label: "MHTB Leaderboard",
    url: "https://www.wsls.com/pinit/my-hometowns-best/leaderboard/"
  }, {
    label: "BRG Leaderboard",
    url: "https://www.wsls.com/pinit/blue-ridge-games/leaderboard/"
  }],
  priority: false
}, {
  name: "Pin Upload Success Modal",
  image: pinUploadModal,
  alt: "Mobile view of pin upload success modal",
  description: "User-friendly modal confirming successful uploads with sharing capabilities and accessibility features.",
  businessImpact: "Improved user experience with video upload success tracking and analytics",
  results: ["Web Share API integration", "Upload success tracking", "Retry flow implementation", "Sentry error monitoring"],
  features: ["React & TypeScript", "Web Share API + clipboard fallback", "Accessibility standards adherence", "Built-in retry flow", "Styled-components theming", "Smooth transitions"],
  demo: "#"
}, {
  name: "Newsletter Sign-Up Card",
  image: newsLetterSignUpCard,
  alt: "Newsletter sign-up card embedded in article",
  description: "Dynamic newsletter signup component with validation and accessibility features embedded across news articles.",
  businessImpact: "Increased newsletter subscriptions through strategic article placement",
  results: ["Email validation with regex", "Accessibility standards adherence", "Seamless article integration"],
  features: ["Email regex validation & timeout handling", "Accessibility standards & keyboard support", "Dynamic success/error messaging", "Embedded in side rails & articles", "Redirects to newsletter page"],
  demo: "#"
}];
function ProjectSection(t0) {
  const $ = c(13);
  const {
    id: t1
  } = t0;
  const id = t1 === void 0 ? "professional-projects" : t1;
  const [selectedImage, setSelectedImage] = useState(null);
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0", children: professionalProjects.map((project, index) => /* @__PURE__ */ jsxs(Card, { className: "group overflow-hidden border-transparent bg-card/50 transition-colors hover:border-border", children: [
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelectedImage({
        src: project.image,
        alt: project.alt
      }), className: "relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-muted", "aria-label": `View full screenshot of ${project.name}`, children: [
        /* @__PURE__ */ jsx("img", { src: project.image, alt: project.alt, className: "h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]", loading: index === 0 ? "eager" : "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100", children: /* @__PURE__ */ jsx(Expand, { className: "h-5 w-5 text-white" }) })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-base font-semibold text-foreground", children: project.name }),
          project.liveUrls && project.liveUrls.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 gap-1", children: project.liveUrls.slice(0, 2).map(_temp$1) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-brand-primary", children: [
            project.businessImpact,
            "."
          ] }),
          " ",
          project.description
        ] }),
        project.results && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/70", children: project.results.slice(0, 3).join(" \xB7 ") })
      ] })
    ] }, project.name)) });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  const t3 = !!selectedImage;
  let t4;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = () => setSelectedImage(null);
    $[1] = t4;
  } else {
    t4 = $[1];
  }
  let t5;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: "Project Screenshot" });
    $[2] = t5;
  } else {
    t5 = $[2];
  }
  let t6;
  if ($[3] !== selectedImage) {
    t6 = selectedImage && /* @__PURE__ */ jsx("img", { src: selectedImage.src, alt: selectedImage.alt, className: "h-auto w-full rounded" });
    $[3] = selectedImage;
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  let t7;
  if ($[5] !== t6) {
    t7 = /* @__PURE__ */ jsxs(DialogContent, { className: "max-h-[90vh] max-w-4xl overflow-auto p-2", "aria-describedby": void 0, children: [
      t5,
      t6
    ] });
    $[5] = t6;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  let t8;
  if ($[7] !== t3 || $[8] !== t7) {
    t8 = /* @__PURE__ */ jsx(Dialog, { open: t3, onOpenChange: t4, children: t7 });
    $[7] = t3;
    $[8] = t7;
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  let t9;
  if ($[10] !== id || $[11] !== t8) {
    t9 = /* @__PURE__ */ jsxs(Section, { id, children: [
      t2,
      t8
    ] });
    $[10] = id;
    $[11] = t8;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  return t9;
}
function _temp$1(link) {
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground", "aria-label": link.label, children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: link.label }) })
  ] }, link.url);
}
const RESUME_PATH = "/Kevin_Diesenberg_Resume.pdf";
const socialLinks = [{
  name: "LinkedIn",
  href: "https://linkedin.com/in/kevindiesenberg",
  icon: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
}, {
  name: "GitHub",
  href: "https://github.com/kdiesenberg",
  icon: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) })
}];
function ConnectSection(t0) {
  const $ = c(7);
  const {
    id: t1
  } = t0;
  const id = t1 === void 0 ? "connect" : t1;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl font-semibold text-foreground", children: "Let's connect" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Open to new opportunities" })
    ] });
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "w-full", children: /* @__PURE__ */ jsxs("a", { href: "mailto:kdiesenb@gmail.com", children: [
      /* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4" }),
      "kdiesenb@gmail.com"
    ] }) });
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-4", children: socialLinks.map(_temp) });
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  let t5;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" });
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  let t6;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md space-y-8 text-center", children: [
      t2,
      t3,
      t4,
      /* @__PURE__ */ jsxs("a", { href: RESUME_PATH, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground", children: [
        t5,
        "View Resume",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] })
    ] });
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  let t7;
  if ($[5] !== id) {
    t7 = /* @__PURE__ */ jsx(Section, { id, children: t6 });
    $[5] = id;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  return t7;
}
function _temp(link) {
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand-primary hover:text-brand-primary", "aria-label": link.name, children: link.icon }) }),
    /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: link.name }) })
  ] }, link.name);
}
function HomePage() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(AboutSection, {}),
      /* @__PURE__ */ jsx(ExperienceSection, {}),
      /* @__PURE__ */ jsx(ProjectSection, {}),
      /* @__PURE__ */ jsx(ConnectSection, {})
    ] });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

export { HomePage as component };
//# sourceMappingURL=index-BQOGw5Hq.mjs.map
