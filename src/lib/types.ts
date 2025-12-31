export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  image: string;
  alt: string;
  description: string;
  businessImpact?: string;
  results?: string[];
  features: string[];
  demo?: string;
  github?: string;
  liveUrls?: ProjectLink[];
  priority?: boolean;
  imageOrientation?: "landscape" | "portrait" | "square";
}
