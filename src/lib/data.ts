import brgLeaderboard from "@/assets/Dark_Mode_Leaderboard_Mobile.webp";
import clickOnDetroitNav from "@/assets/clickondetroit-mobile-nav.webp";
import newsLetterSignUpCard from "@/assets/Newsletter_Sign_Up_Card.webp";
import pinUploadModal from "@/assets/Pin_Upload_Success_Modal.webp";

import type { Project } from "./types";

export const professionalProjects: Project[] = [
  {
    name: "Navigation Refactor",
    image: clickOnDetroitNav,
    alt: "Click On Detroit mobile navigation menu showing accordion sections",
    description:
      "Built composable design system components wrapping Radix UI and Headless UI for accessibility. Replaced prop drilling with context-based state management using reducer pattern with typed actions.",
    businessImpact: "Unified navigation UX across 700k+ daily users",
    results: [
      "Context + reducer state",
      "IntersectionObserver perf",
      "ResizeObserver handling",
      "Integrated Trending Feed",
    ],
    features: [
      "React & TypeScript with strict types",
      "Composable Radix UI & Headless UI primitives",
      "Context-based state via useReducer",
      "MiniBar with IntersectionObserver scroll detection",
      "ResizeObserver for dynamic height changes",
      "Breaking news auto-scroll with pause on hover/focus",
      "dvh units for mobile browser compatibility",
      "inert attribute + ARIA labels for accessibility",
    ],
    liveUrls: [
      {
        label: "Click On Detroit",
        url: "https://www.clickondetroit.com",
      },
      {
        label: "WSLS (Roanoke)",
        url: "https://www.wsls.com",
      },
    ],
    priority: true,
  },
  {
    name: "Photo Contest Leaderboard",
    image: brgLeaderboard,
    alt: "Leaderboard UI for photo contests",
    description:
      "Reusable leaderboard powering photo contests for thousands of participants across multiple platforms.",
    businessImpact:
      "Increased user engagement through real-time rankings with enterprise API integrations",
    results: [
      "Real-time data sync with useSWR",
      "Cross-platform contest support",
      "Dynamic contest configuration",
      "Sentry error monitoring",
    ],
    features: [
      "React & TypeScript",
      "Headless UI Tabs with custom styled primitives",
      "Real-time data sync with useSWR",
      "Dynamic contest rule configuration",
      "Category-based CTAs for media uploads",
      "Admin-only overall leaderboard view",
      "Snap-scroll navigation for mobile UX",
      "Fully responsive across all devices",
    ],
    liveUrls: [
      {
        label: "MHTB Leaderboard",
        url: "https://www.wsls.com/pinit/my-hometowns-best/leaderboard/",
      },
      {
        label: "BRG Leaderboard",
        url: "https://www.wsls.com/pinit/blue-ridge-games/leaderboard/",
      },
    ],
    priority: false,
  },
  {
    name: "Pin Upload Success Modal",
    image: pinUploadModal,
    alt: "Mobile view of pin upload success modal",
    description:
      "User-friendly modal confirming successful uploads with sharing capabilities and accessibility features.",
    businessImpact:
      "Improved user experience with video upload success tracking and analytics",
    results: [
      "Web Share API integration",
      "Upload success tracking",
      "Retry flow implementation",
      "Sentry error monitoring",
    ],
    features: [
      "React & TypeScript",
      "Web Share API + clipboard fallback",
      "Accessibility standards adherence",
      "Built-in retry flow",
      "Styled-components theming",
      "Smooth transitions",
    ],
    demo: "#",
  },
  {
    name: "Newsletter Sign-Up Card",
    image: newsLetterSignUpCard,
    alt: "Newsletter sign-up card embedded in article",
    description:
      "Dynamic newsletter signup component with validation and accessibility features embedded across news articles.",
    businessImpact:
      "Increased newsletter subscriptions through strategic article placement",
    results: [
      "Email validation with regex",
      "Accessibility standards adherence",
      "Seamless article integration",
    ],
    features: [
      "Email regex validation & timeout handling",
      "Accessibility standards & keyboard support",
      "Dynamic success/error messaging",
      "Embedded in side rails & articles",
      "Redirects to newsletter page",
    ],
    demo: "#",
  },
];
