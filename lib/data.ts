import type { Project } from "./types";
import brgLeaderboard from "@/images/Dark_Mode_Leaderboard_Mobile.png";
import pinUploadModal from "@/images/Pin_Upload_Success_Modal.png";
import newsLetterSignUpCard from "@/images/Newsletter_Sign_Up_Card.png";
import awefulLogo from "@/images/aweful-logo.png";
import trailShareLogo from "@/images/trail-share-logo.png";
import HSTRYLogo from "@/images/HSTRY-logo.png";

export const professionalProjects: Project[] = [
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

export const bootcampProjects: Project[] = [
  {
    name: "Aweful Skydiving",
    image: awefulLogo,
    imageOrientation: "landscape",
    alt: "Aweful Skydiving logo",
    description:
      "Event signup platform for skydivers (React, Rails, PostgreSQL).",
    features: [
      "User auth via bcrypt",
      "Responsive UI with Bootstrap",
      "Active Record models",
    ],
    demo: "https://youtu.be/7JUL1CPlHqg",
    github: "https://github.com/kevdies/aweful",
  },
  {
    name: "Trail Share",
    image: trailShareLogo,
    imageOrientation: "landscape",
    alt: "Trail Share logo",
    description: "Social network for hikers (React, Rails, PostgreSQL).",
    features: ["RESTful API design", "Auth via bcrypt", "Bootstrap styling"],
    demo: "https://youtu.be/seImhfcp8X8",
    github: "https://github.com/drclements/trail-share",
  },
  {
    name: "HSTRY",
    image: HSTRYLogo,
    imageOrientation: "landscape",
    alt: "HSTRY logo",
    description: "Medical history form aid (React, Rails, PostgreSQL).",
    features: ["Controlled forms", "Accessible markup", "Reactstrap UI"],
    demo: "https://youtu.be/dWumb-_XHhA",
    github: "https://github.com/kevdies/HSTRY",
  },
];

export const hobbies = [
  "Skydiving",
  "Paramotoring",
  "Camping",
  "Hiking",
  "Road Biking",
  "Mountain Biking",
];
