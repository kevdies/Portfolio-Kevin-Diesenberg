import * as React from "react";
import { cn } from "../../../lib/utils";
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
  /** name of the icon to render */
  name: IconName;
  /** size scale, maps to Tailwind text size classes */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** additional classes (e.g., color or hover states) */
  className?: string;
}

const sizeClassesMap: Record<Required<IconProps>["size"], string> = {
  sm: "text-sm", // 14px
  md: "text-base", // 16px
  lg: "text-lg", // 18px
  xl: "text-xl", // 20px
  "2xl": "text-2xl", // 24px
};

export const Icon: React.FC<IconProps> = ({ name, size = "md", className }) => {
  const classes = cn(sizeClassesMap[size], className);

  // Check FontAwesome icons first
  if (name in FONT_AWESOME_MAP) {
    const icon = FONT_AWESOME_MAP[name as keyof typeof FONT_AWESOME_MAP];
    return <FontAwesomeIcon icon={icon} className={classes} />;
  }

  // Check React Icons
  if (name in REACT_ICON_MAP) {
    const RiIcon = REACT_ICON_MAP[name as keyof typeof REACT_ICON_MAP];
    return <RiIcon className={classes} />;
  }

  // Fallback - show a warning in development
  if (process.env.NODE_ENV === "development") {
    console.warn(`Icon "${name}" not found in icon maps`);
  }

  // Return a placeholder or null for unknown icons
  return (
    <span className={cn("inline-block", classes)} aria-hidden="true">
      ?
    </span>
  );
};

Icon.displayName = "Icon";

export default Icon;
