import React from "react";
import { Button } from "../ui/Button";
import Icon from "../ui/Icon";
import type { ProjectLink } from "@/types";

export const ProjectActions: React.FC<{
  liveUrls?: ProjectLink[];
  demo?: string;
}> = ({ liveUrls, demo }) => {
  if (liveUrls?.length) {
    return (
      <div className="mt-auto space-y-2">
        {liveUrls.map(({ label, url }, index) => (
          <Button
            key={url}
            asChild
            variant={index === 0 ? "default" : "secondary"}
            className="w-full"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon name="eye" className="mr-2" size="sm" />
              {label}
            </a>
          </Button>
        ))}
      </div>
    );
  }

  const isDemoDisabled = !demo || demo === "#";

  const content = (
    <>
      <Icon name="play" className="mr-2" size="sm" />
      {isDemoDisabled ? "Demo Coming Soon" : "View Demo"}
    </>
  );

  return (
    <div className="mt-auto">
      <Button
        asChild={!isDemoDisabled}
        variant="secondary"
        className="w-full"
        disabled={isDemoDisabled}
      >
        {isDemoDisabled ? (
          <span className="inline-flex cursor-not-allowed items-center justify-center opacity-50">
            {content}
          </span>
        ) : (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        )}
      </Button>
    </div>
  );
};
