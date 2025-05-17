// types/index.ts
import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
  features: string[];
  demo?: string;
  github?: string;
}
