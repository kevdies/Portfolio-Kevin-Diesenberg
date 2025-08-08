import type { Project } from "../types";
import brgLeaderboard from "@/assets/images/Dark_Mode_Leaderboard_Mobile.png";
import pinUploadModal from "@/assets/images/Pin_Upload_Success_Modal.png";
import newsLetterSignUpCard from "@/assets/images/Newsletter_Sign_Up_Card.png";

export interface LeaderboardUrl {
  label: string;
  url: string;
}

export interface ProjectWithUrls extends Project {
  liveUrls?: LeaderboardUrl[];
  priority?: boolean;
}

export const professionalProjects: ProjectWithUrls[] = [
  {
    name: "Photo Contest Leaderboard",
    image: brgLeaderboard,
    alt: "Leaderboard UI for photo contests",
    description:
      "This reusable leaderboard powers both the Blue Ridge Games and My Hometown's Best photo contests—displaying real-time user rankings per category with contest-specific rules, accessibility support, and responsive design.",
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
      "User-friendly modal to confirm pin uploads, with retry flow and Web Share API (plus clipboard fallback), styled via theming and announced via ARIA live regions.",
    features: [
      "React & TypeScript",
      "Web Share API + clipboard fallback",
      "ARIA live updates",
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
      "Dynamic sign-up card embedded in side rails and articles, with email regex validation, personalized messages, full screen-reader & keyboard support, and redirects on success.",
    features: [
      "Email regex validation & timeout handling",
      "Screen-reader & keyboard support",
      "Dynamic success/error messaging",
      "Embedded in side rails & articles",
      "Redirects to newsletter page",
    ],
    demo: "#",
  },
];
