import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section id="not-found" className="text-center">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <div className="mt-8">
        <Button as="link" href="/" variant="default" size="lg">
          Go Back Home
        </Button>
      </div>
    </Section>
  );
}
