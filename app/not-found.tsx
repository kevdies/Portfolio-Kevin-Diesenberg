import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section id="not-found" className="text-center">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button variant="default" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </Section>
  );
}
