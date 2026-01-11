import { useState } from "react";

import { Expand, ExternalLink, X } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "@/components/ui/section";
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
            className="group bg-card/50 border-border overflow-hidden py-0"
          >
            {/* Project image */}
            <button
              type="button"
              onClick={() =>
                setSelectedImage({ src: project.image, alt: project.alt })
              }
              className="bg-muted relative aspect-video w-full cursor-pointer overflow-hidden"
              aria-label={`View full screenshot of ${project.name}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover object-top"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/30 group-hover:opacity-100">
                <Expand className="h-5 w-5 text-background" />
              </div>
            </button>

            <CardContent className="space-y-3 p-4">
              {/* Title */}
              <h3 className="font-heading text-foreground text-base font-semibold">
                {project.name}
              </h3>

              {/* Impact + Description combined */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-brand-primary">
                  {project.businessImpact}.
                </span>{" "}
                {project.description}
              </p>

              {/* Tech highlights */}
              {project.results && (
                <p className="text-muted-foreground text-xs">
                  {project.results.slice(0, 3).join(" · ")}
                </p>
              )}

              {/* Live links */}
              {project.liveUrls && project.liveUrls.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.liveUrls.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted text-foreground hover:bg-muted/80 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
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
          showCloseButton={false}
          className="max-h-[90vh] max-w-4xl overflow-auto p-4"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between">
            <DialogTitle className="text-muted-foreground text-sm font-medium">
              Project Screenshot
            </DialogTitle>
            <DialogClose className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-1.5 transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
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
