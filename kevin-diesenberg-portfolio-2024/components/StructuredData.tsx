export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kevin Diesenberg",
    jobTitle: "Web Developer",
    description:
      "Web Developer passionate about building accessible, performant applications using React, TypeScript, and modern tooling.",
    url: "https://www.kevindiesenberg.com",
    sameAs: [
      "https://linkedin.com/in/kevindiesenberg",
      "https://github.com/kevdies",
      "https://medium.com/@kevdies",
      "https://twitter.com/KevinDiesenberg",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Graham Media Group",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Web Development",
      "Frontend Development",
      "Accessibility",
      "Performance Optimization",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Michigan",
      addressCountry: "US",
    },
    email: "kdiesenb@gmail.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
