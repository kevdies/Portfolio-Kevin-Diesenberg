import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectSection from "../components/sections/ProjectSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import MoreSection from "../components/sections/MoreSection";
import ConnectSection from "../components/sections/ConnectSection";

export default function HomePage() {
  return (
    <>
      <AboutSection paddingTop="pt-0 md:pt-0" />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <MoreSection />
      <ConnectSection paddingBottom="pb-0 md:pb-0" />
    </>
  );
}
