import kevHenryArti from "@/assets/kev-henry-artichoke.webp";
import { Section } from "@/components/ui/section";

export function AboutSection({ id = "about" }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        {/* Hero content */}
        <div className="space-y-4">
          <h1 className="font-heading text-foreground text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            Built features serving 6 local news stations across 4 states
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Graham Media Group &bull; NBC, CBS, ABC Affiliates &bull; Video
            Analytics APIs
          </p>
        </div>

        {/* Video Analytics Integration */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-xs font-medium">
            Video Player & Analytics Integration:
          </p>
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2 text-xs">
            <span className="bg-secondary text-muted-foreground rounded px-2 py-1">
              Anyclip Player
            </span>
            <span className="bg-secondary text-muted-foreground rounded px-2 py-1">
              Bitmovin Player
            </span>
            <span className="bg-secondary text-muted-foreground rounded px-2 py-1">
              Nielsen DCR
            </span>
            <span className="bg-secondary text-muted-foreground rounded px-2 py-1">
              Chartbeat
            </span>
            <span className="bg-secondary text-muted-foreground rounded px-2 py-1">
              Braze
            </span>
            <span className="bg-secondary text-muted-foreground rounded px-2 py-1">
              Sentry
            </span>
          </div>
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
            <span className="bg-muted text-muted-foreground rounded px-2 py-1">
              ArcXP CMS
            </span>
          </div>
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

        <p className="text-muted-foreground mx-auto max-w-lg text-sm sm:text-base">
          Proven track record shipping production features to 6 NBC, CBS, and
          ABC affiliate news stations across Texas, Michigan, Florida, and
          Virginia markets.
        </p>
      </div>
    </Section>
  );
}
