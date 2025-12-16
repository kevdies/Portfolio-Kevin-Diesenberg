"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section id="error" className="text-center">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-lg text-hierarchy-secondary">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8">
        <Button variant="default" size="lg" onClick={reset}>
          Try again
        </Button>
      </div>
    </Section>
  );
}
