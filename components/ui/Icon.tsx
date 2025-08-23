import * as React from "react";
import { cn } from "@/utils/utils";

import {
  RiMenuLine,
  RiCloseLine,
  RiShareLine,
  RiDownloadLine,
  RiArrowDownSLine,
  RiMailLine,
  RiPlayCircleLine,
  RiEyeLine,
  RiHeartFill,
  RiLinkedinFill,
  RiGithubFill,
  RiMediumFill,
} from "react-icons/ri";

// A single, consolidated map for all icons from react-icons
const ICON_MAP = {
  bars: RiMenuLine,
  times: RiCloseLine,
  share: RiShareLine,
  download: RiDownloadLine,
  chevronDown: RiArrowDownSLine,
  email: RiMailLine,
  play: RiPlayCircleLine,
  eye: RiEyeLine,
  heart: RiHeartFill,
  linkedin: RiLinkedinFill,
  github: RiGithubFill,
  medium: RiMediumFill,
} as const;

export type IconName = keyof typeof ICON_MAP;

export interface IconProps {
  name: IconName;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const sizeClassesMap: Record<Required<IconProps>["size"], string> = {
  sm: "w-4 h-4", // 16px - Small icons for inline text, buttons
  md: "w-5 h-5", // 20px - Default size for most UI elements
  lg: "w-6 h-6", // 24px - Section headers, navigation
  xl: "w-8 h-8", // 32px - Card headers, prominent actions
  "2xl": "w-10 h-10", // 40px - Hero sections, large decorative icons
};

export function Icon({ name, size = "md", className }: IconProps) {
  const classes = cn(
    sizeClassesMap[size],
    "inline-block flex-shrink-0 transition-colors duration-200",
    className,
  );

  const IconToShow = ICON_MAP[name];

  if (!IconToShow) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found in ICON_MAP`);
    }
    // Render a fallback question mark
    return (
      <span
        className={cn("inline-flex items-center justify-center", classes)}
        aria-hidden="true"
        title={`Missing icon: ${name}`}
      >
        <span className="text-xs text-gray-500">?</span>
      </span>
    );
  }

  return (
    <IconToShow
      className={classes}
      aria-hidden="true" // Important for accessibility
    />
  );
}
