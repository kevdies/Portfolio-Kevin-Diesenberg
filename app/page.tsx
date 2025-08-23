import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function HomePage() {
  return (
    <>
      <AboutSection />      {/* Hero: Value prop + proof */}
      <ExperienceSection /> {/* Impact: GMG work with metrics */}
      <ProjectSection />    {/* Proof: Projects with results */}
      <ConnectSection />    {/* Connect: Clear CTA */}
    </>
  );
}
