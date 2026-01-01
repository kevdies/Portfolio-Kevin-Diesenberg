import kevHenryArti from "@/assets/kev-henry-artichoke.webp";
import { Section } from "@/components/ui/section";

export function AboutSection({ id = "about" }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        {/* Hero content */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            Software Engineer
          </p>
          <h1 className="font-heading text-foreground text-2xl font-semibold sm:text-3xl md:text-4xl">
            Kevin Diesenberg
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            I build production web apps with React and TypeScript. Currently
            shipping features to millions of users across local news platforms.
          </p>
        </div>

        {/* Core skills */}
        <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2 text-xs">
          <span className="bg-muted text-muted-foreground rounded px-2 py-1">
            React
          </span>
          <span className="bg-muted text-muted-foreground rounded px-2 py-1">
            TypeScript
          </span>
          <span className="bg-muted text-muted-foreground rounded px-2 py-1">
            Node.js
          </span>
          <span className="bg-muted text-muted-foreground rounded px-2 py-1">
            AWS
          </span>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-xs sm:max-w-sm">
          <div className="bg-secondary relative aspect-4/3 w-full overflow-hidden rounded-lg">
            <img
              src={kevHenryArti}
              alt="Kevin Diesenberg with his dogs enjoying a sunny day by Lake Huron"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
