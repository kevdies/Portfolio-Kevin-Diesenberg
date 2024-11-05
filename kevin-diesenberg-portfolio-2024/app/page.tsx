"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faDownload,
  faEye,
  faEnvelope,
  faBars,
  faTimes,
  faPlayCircle,
  faParachuteBox,
  faPlane,
  faCampground,
  faHiking,
  faBicycle,
  faMountain,
  faShare,
  faRocket,
  faLightbulb,
  faPuzzlePiece,
  faNetworkWired,
  faHourglassHalf,
  faWrench,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faFacebook,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
  faNpm,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiTypescript,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiJira,
} from "react-icons/si";
import Image from "next/image";
import awefulLogo from "../public/aweful-logo.png";
import brgLeaderboard from "../public/Blue_Ridge_Games_Leaderboard.png";
import HSTRYLogo from "../public/HSTRY-logo.png";
import kevHenryArti from "../public/kev-henry-artichoke.webp";
import kevinArtichoke from "../public/kevin-artichoke.webp";
import kevinDeland from "../public/kevin-deland.webp";
import kevHenryLakeHuron from "../public/kevin-henry-lake-huron.webp";
import newsLetterSignUpCard from "../public/Newsletter_Sign_Up_Card.png";
import pinUploadModal from "../public/Pin_Upload_Success_Modal_Mobile.png";
import portfolioHero from "../public/port-hero.jpg";
import trailShareLogo from "../public/trail-share-logo.png";
import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    professionalProjects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    resume: useRef<HTMLElement>(null),
    hobbies: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const shareResume = async () => {
    const resumeUrl = `${window.location.origin}/Kevin_Diesenberg_Resume.pdf`;
    const shareData = {
      title: "Kevin Diesenberg Resume",
      text: "Check out Kevin Diesenberg's resume!",
      url: resumeUrl,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success("Resume shared successfully!");
      } catch (error) {
        console.error("Error sharing resume:", error);
        toast.error("Failed to share resume. Please try again.");
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText(resumeUrl)
        .then(() => {
          toast.success("Resume link copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy resume link. Please try again.");
        });
    }
  };

  const socialLinks = [
    { name: "Email", icon: faEnvelope, href: "mailto:kdiesenb@gmail.com" },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/kevindiesenberg/",
    },
    { name: "GitHub", icon: faGithub, href: "https://github.com/kevdies/" },
    {
      name: "Instagram",
      icon: faInstagram,
      href: "https://instagram.com/kevdies/",
    },
    {
      name: "Facebook",
      icon: faFacebook,
      href: "https://www.facebook.com/kevin.diesenberg/",
    },
    {
      name: "Medium",
      icon: faMedium,
      href: "https://kevindiesenberg.medium.com/",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about", ref: sectionRefs.about },
    { name: "Skills", href: "#skills", ref: sectionRefs.skills },
    {
      name: "Projects",
      href: "#professional-projects",
      ref: sectionRefs.professionalProjects,
    },
    { name: "Experience", href: "#experience", ref: sectionRefs.experience },
    { name: "Resume", href: "#resume", ref: sectionRefs.resume },
    { name: "Hobbies", href: "#hobbies", ref: sectionRefs.hobbies },
    { name: "Contact", href: "#contact", ref: sectionRefs.contact },
  ];

  const technicalSkills = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Ruby"],
      icons: [faJs, SiTypescript, SiRuby],
      color: "bg-red-100",
    },
    {
      category: "Frameworks",
      skills: [
        "React",
        "Ruby on Rails",
        "Next.js",
        "Reactstrap",
        "TailwindCSS",
        "Radix UI",
        "shadcn/ui",
      ],
      icons: [faReact, SiRubyonrails],
      color: "bg-orange-100",
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQL"],
      icons: [SiPostgresql, SiMysql],
      color: "bg-yellow-100",
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "GitHub"],
      icons: [faDocker, faAws, faGithub],
      color: "bg-green-100",
    },
    {
      category: "Tools",
      skills: ["NPM", "Jira", "Vercel", "Webpack", "Babel"],
      icons: [faNpm, SiJira, SiVercel],
      color: "bg-blue-100",
    },
    {
      category: "Other",
      skills: ["HTML", "CSS", "Bootstrap", "REST API", "User Authentication"],
      icons: [faHtml5, faCss3, faBootstrap],
      color: "bg-indigo-100",
    },
    {
      category: "Misc",
      skills: [
        "Project Launching",
        "Creative Problem Solving",
        "Critical Thinking",
        "Network Architecture",
        "Time Management",
        "Technical Debugging",
        "Code Efficiency",
      ],
      icons: [
        faRocket,
        faLightbulb,
        faPuzzlePiece,
        faNetworkWired,
        faHourglassHalf,
        faWrench,
        faLaptopCode,
      ],
      color: "bg-violet-100",
    },
  ];

  const bootcampProjects = [
    {
      name: "Aweful Skydiving",
      image: awefulLogo,
      alt: "Aweful Skydiving",
      description:
        "A platform where skydivers can sign up for skill-focused events. Created with React, Ruby on Rails, Active Record, Active Storage, Reactstrap, Bootstrap, and PostgreSQL.",
      features: [
        "Implemented user authentication and authorization using bcrypt",
        "Utilized Active Record for efficient database queries and management",
        "Developed a responsive User Interface using Bootstrap and Reactstrap",
      ],
      demo: "https://youtu.be/7JUL1CPlHqg",
      github: "https://github.com/kevdies/aweful",
    },
    {
      name: "Trail Share",
      image: trailShareLogo,
      alt: "Trail-Share",
      description:
        "A social networking platform for hikers to share and discover trail information, track miles hiked, and earn badges. Created with React, Ruby on Rails, Active Record, Bootstrap, and PostgreSQL.",
      features: [
        "Utilized RESTful API design principles to build efficient back-end services",
        "Implemented user authentication and authorization using bcrypt",
        "Developed a responsive User Interface with Bootstrap and CSS-styled components",
      ],
      demo: "https://youtu.be/seImhfcp8X8",
      github: "https://github.com/drclements/trail-share",
    },
    {
      name: "HSTRY",
      image: HSTRYLogo,
      alt: "HSTRY",
      description:
        "A state-controlled form designed to aid medical historians in efficiently compiling medical histories for QME evaluation applicants. Created with React, Ruby on Rails, Active Record, Reactstrap, and PostgreSQL.",
      features: [
        "Utilized RESTful API design principles to build efficient back-end services",
        "Implemented user authentication and authorization using bcrypt",
        "Developed a responsive User Interface with Reactstrap and CSS-styled components",
      ],
      demo: "https://youtu.be/dWumb-_XHhA",
      github: "https://github.com/kevdies/HSTRY",
    },
  ];

  const professionalProjects = [
    {
      name: "Blue Ridge Games Leaderboard",
      image: brgLeaderboard, // Use the imported image object now to destructure the metadata and get image width and height
      alt: "Blue Ridge Games Leaderboard",
      description:
        "Developed a dynamic leaderboard for the Blue Ridge Games using React and TypeScript, providing real-time user rankings across multiple categories with a hidden admin view for overall scores. Enhanced mobile navigation and competition tracking.",
      features: [
        "Built with React and TypeScript, incorporating accessibility features",
        "Implemented real-time updates using useSWR for efficient data fetching",
        "Created a hidden 'Overall' category for admin to view cumulative scores",
        "Integrated Snapscroll for smooth mobile navigation between categories",
        "Pulled in scores for each photo upload and user profile pictures",
        "Designed front-end sorting based on scores with distinct icons and colors for the top 3 leaders",
        "Built a responsive UI to ensure consistency across devices",
      ],
      demo: "#", // Placeholder for future YouTube URL
    },
    {
      name: "Pin Upload Success Modal",
      image: pinUploadModal,
      alt: "Pin Upload Success Modal on Mobile",
      description:
        "Created a user-friendly modal using React and TypeScript to provide immediate feedback for successful pin uploads, enabling users to upload another photo and easily share their uploaded pins through the Web Share API.",
      features: [
        "Built with React and TypeScript, incorporating accessibility features",
        "Implemented a modal for success confirmation after photo (pin) uploads",
        "Added functionality to allow users to upload another photo directly from the modal",
        "Integrated the Web Share API for native sharing or fallback to copy URL",
        "Styled using styled-components for a cohesive UI",
        "Enhanced user experience with smooth transitions and an intuitive design",
      ],
      demo: "#", // Placeholder for future YouTube URL
    },
    {
      name: "Newsletter Sign-Up Card",
      image: newsLetterSignUpCard,
      alt: "Newsletter Sign-Up Card",
      description:
        "Developed a dynamic newsletter sign-up card using React and TypeScript, embedded across various sections of the app, providing a seamless and accessible way for users to subscribe.",
      features: [
        "Built with React and TypeScript, incorporating accessibility features",
        "Embedded the sign-up card throughout the app in side rails and articles",
        "Implemented form validation with email regex and user authentication",
        "Designed success and error messages for timeouts and form submission",
        "Added dynamic behavior to display personalized messages based on user actions",
        "Redirects users to the main newsletters page on click",
        "Included accessibility features such as screen reader support and keyboard navigation",
      ],
      demo: "#", // Placeholder for future YouTube URL
    },
  ];

  const hobbies = [
    { name: "Skydiving", icon: faParachuteBox },
    { name: "Paramotoring", icon: faPlane },
    { name: "Camping", icon: faCampground },
    { name: "Hiking and Backpacking", icon: faHiking },
    { name: "Road Biking", icon: faBicycle },
    { name: "Mountain Biking", icon: faMountain },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F7] font-sans">
      <ToastContainer position="bottom-right" />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#8E7CA6]">
            Kevin Diesenberg
          </h1>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-[#5D5268] hover:text-[#8E7CA6] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          ) : (
            <div className="space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-[#5D5268] hover:text-[#8E7CA6]"
                  onClick={() => scrollToSection(link.ref)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </nav>
        {isMobile && isMenuOpen && (
          <div className="bg-white py-4 px-4 shadow-md">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="block py-2 text-[#5D5268] hover:text-[#8E7CA6]"
                onClick={() => {
                  scrollToSection(link.ref);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center"
        >
          <Image
            src={portfolioHero}
            alt="Kevin Diesenberg with Family in the Dunes"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-[#8E7CA6] bg-opacity-70 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-5xl font-bold mb-4">Kevin Diesenberg</h2>
            <p className="text-2xl mb-8">Web Developer | Software Engineer</p>
            <Button
              className="bg-[#D1C4E9] text-[#5D5268] hover:bg-[#B39DDB]"
              onClick={() => scrollToSection(sectionRefs.professionalProjects)}
            >
              <FontAwesomeIcon icon={faChevronDown} className="mr-2 h-4 w-4" />{" "}
              Explore My Work
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-10" ref={sectionRefs.about}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src={kevHenryArti}
                alt="Kevin and his dogs on Lake Huron"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
              <div>
                <p className="text-[#5D5268] mb-4">
                  I&apos;m a Full Stack Software Engineer currently working at
                  Graham Media Group, where I develop and maintain websites for
                  National News stations using TypeScript and React. My
                  expertise spans object-oriented programming, web development,
                  and database management.
                </p>
                <p className="text-[#5D5268] mb-4">
                  Graham Media Group is a leading media company that owns and
                  operates several television stations across the United States.
                  Known for innovation in local journalism, the company
                  leverages digital platforms, mobile apps, and social media to
                  reach audiences. They focus on serving communities with
                  high-quality reporting and emphasize local content,
                  investigative journalism, and audience engagement across their
                  stations and digital platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-[#E6E3E9] py-10"
          ref={sectionRefs.skills}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Overall Skills and Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white">
                <Image
                  src={kevinArtichoke}
                  alt="Kevin with his dog"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 object-cover mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#8E7CA6]">
                  Strengths
                </h3>
                <ul className="list-none flex flex-col gap-3 text-[#5D5268] p-4">
                  <li className="bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
                    Attention to detail in high-consequence environments
                  </li>
                  <li className="bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
                    Simplifying complex ideas
                  </li>
                  <li className="bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
                    Working with people from diverse backgrounds
                  </li>
                  <li className="bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
                    Commitment to continuous learning and growth
                  </li>
                </ul>
              </Card>
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-4 text-[#8E7CA6]">
                  Technical Skills
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {technicalSkills.map((skillSet, index) => (
                    <AccordionItem
                      key={skillSet.category}
                      value={`item-${index}`}
                    >
                      <AccordionTrigger
                        className={`${skillSet.color} rounded-lg p-2 hover:no-underline`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[#8E7CA6]">
                            {skillSet.category}
                          </span>
                          <div className="flex gap-2 px-3">
                            {skillSet.icons.map((Icon, iconIndex) => (
                              <span key={iconIndex}>
                                {typeof Icon === "object" &&
                                "iconName" in Icon ? (
                                  <FontAwesomeIcon
                                    icon={Icon}
                                    className="text-[#8E7CA6] h-6 w-6"
                                  />
                                ) : (
                                  <Icon className="text-[#8E7CA6] h-6 w-6" />
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-none flex flex-wrap items-center gap-6 text-[#5D5268] p-4">
                          {skillSet.skills.map((skill, skillIndex) => (
                            <li
                              className="line-decor bg-gray-100 rounded-lg px-3 py-1 shadow-sm"
                              key={skillIndex}
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Projects Section */}
        <section
          id="professional-projects"
          className="bg-[#E6E3E9] py-10"
          ref={sectionRefs.professionalProjects}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Professional Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalProjects.map((project, index) => (
                <Card key={index} className="flex flex-col bg-white">
                  <CardContent className="p-6">
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#8E7CA6]">
                      {project.name}
                    </h3>
                    <p className="text-[#5D5268] mb-4">{project.description}</p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-[#5D5268] hover:text-[#8E7CA6] hover:no-underline">
                          Key Features
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside text-[#5D5268] pl-4">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-4 flex justify-center">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#8E7CA6] hover:text-[#B39DDB]"
                      >
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          className="mr-1 h-4 w-4"
                        />
                        Demo (Coming Soon)
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bootcamp Projects Section */}
        <section id="projects" className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Bootcamp Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bootcampProjects.map((project, index) => (
                <Card key={index} className="p-6 flex flex-col bg-white">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8E7CA6]">
                    {project.name}
                  </h3>
                  <p className="text-[#5D5268] mb-4">{project.description}</p>
                  <Accordion type="single" collapsible className="w-full mb-4">
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-[#5D5268] hover:text-[#8E7CA6] hover:no-underline">
                        Key Features
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-[#5D5268] pl-4">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="mt-auto flex justify-between">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#8E7CA6] hover:text-[#B39DDB]"
                    >
                      <FontAwesomeIcon icon={faEye} className="mr-1 h-4 w-4" />{" "}
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#8E7CA6] hover:text-[#B39DDB]"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="mr-1 h-4 w-4"
                      />{" "}
                      GitHub
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-[#E6E3E9] py-10"
          ref={sectionRefs.experience}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Work Experience
            </h2>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2 text-[#8E7CA6]">
                Web Developer | Software Engineer
              </h3>
              <h4 className="text-lg font-medium mb-2 text-[#5D5268]">
                Graham Media Group
              </h4>
              <p className="text-[#5D5268] mb-4">
                Develop and maintain websites for National News stations using
                TypeScript and React. Collaborate with cross-functional teams to
                deliver high-quality, responsive web applications that serve
                millions of users daily.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src={kevHenryLakeHuron}
                  alt="Kevin on Lake Huron"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-[#8E7CA6]">
                  Previous Roles
                </h3>
                <ul className="list-disc list-inside text-[#5D5268]">
                  <li>
                    Rigger and Stagehand for the International Alliance of
                    Theatrical Stage Employees
                  </li>
                  <li>
                    Backcountry Water Treatment Operator for the National Park
                    Service
                  </li>
                </ul>
                <p className="mt-4 text-[#5D5268]">
                  These diverse roles have equipped me with unique
                  problem-solving skills and the ability to work effectively in
                  various environments, which I now apply to my software
                  engineering career.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-10" ref={sectionRefs.resume}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Resume
            </h2>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-[#D1C4E9] text-[#5D5268] hover:bg-[#B39DDB]"
                asChild
              >
                <a
                  href="/Kevin_Diesenberg_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} className="mr-2 h-4 w-4" />
                  View
                </a>
              </Button>
              <Button
                className="bg-[#D1C4E9] text-[#5D5268] hover:bg-[#B39DDB]"
                asChild
              >
                <a href="/Kevin_Diesenberg_Resume.pdf" download>
                  <FontAwesomeIcon icon={faDownload} className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
              <Button
                className="bg-[#D1C4E9] text-[#5D5268] hover:bg-[#B39DDB]"
                onClick={shareResume}
              >
                <FontAwesomeIcon icon={faShare} className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section
          id="hobbies"
          className="bg-[#E6E3E9] py-10"
          ref={sectionRefs.hobbies}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white">
                <Image
                  src={kevinDeland}
                  alt="Kevin-Deland"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover mx-auto"
                />
              </Card>
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-4 text-[#8E7CA6]">
                  Adventure Enthusiast
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-[#5D5268]"
                    >
                      <FontAwesomeIcon
                        icon={hobby.icon}
                        className="text-[#B39DDB] h-4 w-4"
                      />
                      <span>{hobby.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[#5D5268]">
                  As an adventure enthusiast, I&apos;m always seeking new
                  experiences and challenges. These activities not only keep me
                  physically active but also help me develop problem-solving
                  skills and adaptability, which I apply to my work in software
                  engineering.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10" ref={sectionRefs.contact}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5D5268]">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8E7CA6] hover:text-[#B39DDB]"
                >
                  <FontAwesomeIcon icon={link.icon} className="h-8 w-8" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#8E7CA6] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            {new Date().getFullYear()} Kevin Diesenberg | All coffee is
            reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button className="bg-[#D1C4E9] text-[#5D5268] hover:bg-[#B39DDB]">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button
              className="bg-[#D1C4E9] text-[#5D5268] hover:bg-[#B39DDB]"
              asChild
            >
              <a href="/Kevin_Diesenberg_Resume.pdf" download>
                <FontAwesomeIcon icon={faDownload} className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
