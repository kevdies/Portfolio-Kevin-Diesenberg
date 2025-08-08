import type { Project } from "../types";
import brgLeaderboard from "@/assets/images/Dark_Mode_Leaderboard_Mobile.png";
import pinUploadModal from "@/assets/images/Pin_Upload_Success_Modal.png";
import newsLetterSignUpCard from "@/assets/images/Newsletter_Sign_Up_Card.png";
import awefulLogo from "@/assets/images/aweful-logo.png";
import trailShareLogo from "@/assets/images/trail-share-logo.png";
import HSTRYLogo from "@/assets/images/HSTRY-logo.png";

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

export interface ProjectWithDemo extends Project {
  demo?: string;
  github: string;
  imageOrientation?: "landscape" | "portrait" | "square";
}

export const bootcampProjects: ProjectWithDemo[] = [
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
