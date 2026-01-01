import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections/about-section";
import { ConnectSection } from "@/components/sections/connect-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { PreviousExperienceSection } from "@/components/sections/previous-experience-section";
import { ProjectSection } from "@/components/sections/project-section";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <PreviousExperienceSection />
      <ConnectSection />
    </>
  );
}
