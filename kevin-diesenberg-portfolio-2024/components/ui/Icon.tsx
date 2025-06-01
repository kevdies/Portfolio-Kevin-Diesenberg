import * as React from "react";
import { cn } from "../../utils/utils";

import {
  faBars,
  faTimes,
  faShare,
  faDownload,
  faChevronDown,
  faEnvelope,
  faPlayCircle,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiLinkedinFill, RiGithubFill, RiMediumFill } from "react-icons/ri";

// Maps for icon lookup
const FONT_AWESOME_MAP = {
  bars: faBars,
  times: faTimes,
  share: faShare,
  download: faDownload,
  chevronDown: faChevronDown,
  email: faEnvelope,
  play: faPlayCircle,
  eye: faEye,
  heart: faHeart,
} as const;

const REACT_ICON_MAP = {
  linkedin: RiLinkedinFill,
  github: RiGithubFill,
  medium: RiMediumFill,
} as const;

export type IconName =
  | keyof typeof FONT_AWESOME_MAP
  | keyof typeof REACT_ICON_MAP;

export interface IconProps {
  name: IconName;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

// Updated size mapping for better consistency with your design system
const sizeClassesMap: Record<Required<IconProps>["size"], string> = {
  sm: "w-4 h-4", // 16px - more precise than text-sm
  md: "w-5 h-5", // 20px - more precise than text-base
  lg: "w-6 h-6", // 24px - more precise than text-lg
  xl: "w-7 h-7", // 28px - more precise than text-xl
  "2xl": "w-8 h-8", // 32px - more precise than text-2xl
};

export const Icon: React.FC<IconProps> = ({ name, size = "md", className }) => {
  const classes = cn(
    sizeClassesMap[size],
    "inline-block flex-shrink-0",
    className
  );

  // Check FontAwesome icons first
  if (name in FONT_AWESOME_MAP) {
    const icon = FONT_AWESOME_MAP[name as keyof typeof FONT_AWESOME_MAP];
    return (
      <FontAwesomeIcon
        icon={icon}
        className={classes}
        aria-hidden="true" // Better accessibility
      />
    );
  }

  // Check React Icons
  if (name in REACT_ICON_MAP) {
    const RiIcon = REACT_ICON_MAP[name as keyof typeof REACT_ICON_MAP];
    return (
      <RiIcon
        className={classes}
        aria-hidden="true" // Better accessibility
      />
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.warn(`Icon "${name}" not found in icon maps`);
  }

  return (
    <span
      className={cn("inline-flex items-center justify-center", classes)}
      aria-hidden="true"
      title={`Missing icon: ${name}`}
    >
      <span className="text-xs text-text-dim">?</span>
    </span>
  );
};

Icon.displayName = "Icon";

export default Icon;
