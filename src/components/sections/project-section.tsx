import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Expand } from "lucide-react";
import { professionalProjects } from "@/lib/data";

export function ProjectSection({
  id = "professional-projects",
}: {
  id?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <Section id={id}>
      <div className="mx-auto max-w-4xl space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
        {professionalProjects.map((project, index) => (
          <Card
            key={project.name}
            className="group overflow-hidden border-transparent bg-card/50 transition-colors hover:border-border"
          >
            {/* Project image */}
            <button
              type="button"
              onClick={() =>
                setSelectedImage({ src: project.image, alt: project.alt })
              }
              className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-muted"
              aria-label={`View full screenshot of ${project.name}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                <Expand className="h-5 w-5 text-white" />
              </div>
            </button>

            <CardContent className="space-y-3 p-4">
              {/* Title + Links row */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {project.name}
                </h3>
                {project.liveUrls && project.liveUrls.length > 0 && (
                  <div className="flex shrink-0 gap-1">
                    {project.liveUrls.slice(0, 2).map((link) => (
                      <Tooltip key={link.url}>
                        <TooltipTrigger asChild>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label={link.label}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                )}
              </div>

              {/* Impact + Description combined */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="text-brand-primary">{project.businessImpact}.</span>{" "}
                {project.description}
              </p>

              {/* Tech highlights - subtle */}
              {project.results && (
                <p className="text-xs text-muted-foreground/70">
                  {project.results.slice(0, 3).join(" · ")}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image preview dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent
          className="max-h-[90vh] max-w-4xl overflow-auto p-2"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Project Screenshot</DialogTitle>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="h-auto w-full rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
