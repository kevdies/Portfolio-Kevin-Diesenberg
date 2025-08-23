export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kevin Diesenberg",
    mainEntityOfPage: "https://www.kevindiesenberg.com",
    jobTitle: "Web Developer | Software Engineer",
    description:
      "Web Developer & Software Engineer specializing in enterprise media platforms and video analytics APIs. Built features serving 6 local news stations across NBC, CBS, and ABC affiliates for Graham Media Group.",
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
      description:
        "Media company operating NBC, CBS, and ABC affiliate stations across 4 states",
      url: "https://www.grahammedia.com",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "ArcXP CMS",
      "Nielsen DCR Analytics",
      "Chartbeat Analytics",
      "Video Player APIs",
      "Broadcast Media Technology",
      "Enterprise API Integration",
      "Anyclip Video Platform",
      "Bitmovin Video Platform",
      "AWS Infrastructure",
      "Sentry Monitoring",
      "Braze CDP",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Developer",
      description: "Software engineer specializing in enterprise media platforms, video analytics integration, and broadcast technology solutions for news organizations.",
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "base",
        currency: "USD",
        duration: "P1Y",
        median: 85000,
        percentile25: 75000,
        percentile75: 95000
      },
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      skills: [
        "Enterprise Media Platforms",
        "Video Analytics Integration",
        "Broadcast Technology",
        "Content Management Systems",
        "API Development",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Michigan",
      addressCountry: "US",
    },
    email: "kdiesenb@gmail.com",
    alumniOf: {
      "@type": "Organization",
      name: "Flatiron School",
      description: "Software Engineering Bootcamp",
    },
    workExample: [
      {
        "@type": "CreativeWork",
        name: "Video Analytics Integration",
        description:
          "Nielsen DCR and Chartbeat analytics integrated into Anyclip and Bitmovin video players",
        creator: {
          "@type": "Person",
          name: "Kevin Diesenberg",
        },
      },
      {
        "@type": "CreativeWork",
        name: "ArcXP CMS Templates",
        description:
          "Custom templates and pages built for content editors and publishers",
        creator: {
          "@type": "Person",
          name: "Kevin Diesenberg",
        },
      },
    ],
    nationality: "American",
    birthPlace: {
      "@type": "Place",
      name: "United States",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
