import { GithubIcon, Link } from "lucide-react";
import React, { type ReactElement } from "react";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFlutter,
  SiKotlin,
  SiSpring,
  SiVite,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiXml,
  SiJetpackcompose,
} from "react-icons/si";

// Icon mapping for project tags
const tagIcons: Record<string, ReactElement> = {
  // Languages
  Java: <FaJava className="text-orange-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Python: <FaHtml5 className="text-blue-500" />,
  Kotlin: <SiKotlin className="text-purple-500" />,

  // Frameworks & Libraries
  React: <FaReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  Flutter: <SiFlutter className="text-blue-400" />,
  Spring: <SiSpring className="text-green-500" />,
  Javafx: <FaJava className="text-blue-300" />,
  Fxml: <SiXml className="text-orange-400" />,
  Vite: <SiVite className="text-purple-400" />,
  "Jetpack Compose": <SiJetpackcompose className="text-purple-600" />,
  XML: <SiXml className="text-orange-400" />,

  // Databases
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  GraphQL: <SiGraphql className="text-pink-500" />,

  // Others
  Docker: <FaDocker className="text-blue-400" />,
  Git: <FaGitAlt className="text-orange-600" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
};

// Maximum number of tags to display
const MAX_TAGS_DISPLAY = 3;

interface Project {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  status?: "development" | "live";
  coverImage?: string;
  hoverLabel?: string;
  liveLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: "SnapTap 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Java", "Javafx", "Fxml", "Java", "Javafx", "Java", "Javafx"],
    year: "2025",
    status: "live",
    coverImage: "/Backgroundless.png",
    hoverLabel: "Hotkey Manager Platform",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "SnapTap 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Java2", "Javafx2", "Java2", "Javafx2", "Java2", "Javafx2"],
    year: "2025",
    status: "development",
    coverImage: "/snaptap2.png",
    hoverLabel: "Desktop Hotkey Manager App",
    codeLink: "#",
  },
    {
    title: "SnapTap 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Java", "Javafx", "Fxml", "Java", "Javafx", "Java", "Javafx"],
    year: "2025",
    status: "live",
    coverImage: "/Backgroundless.png",
    hoverLabel: "Hotkey Manager Platform",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "SnapTap 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Java2", "Javafx2", "Java2", "Javafx2", "Java2", "Javafx2"],
    year: "2025",
    status: "development",
    coverImage: "/snaptap2.png",
    hoverLabel: "Desktop Hotkey Manager App",
    codeLink: "#",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const displayTags = project.tags.slice(0, MAX_TAGS_DISPLAY);
  const hasMoreTags = project.tags.length > MAX_TAGS_DISPLAY;
  const extraTagsCount = project.tags.length - MAX_TAGS_DISPLAY;
  return (
    <div className="bg-[#1e1e1e] rounded-4xl overflow-hidden shadow-md relative group hover:opacity-70 border border-gray-800 transition-all duration-300">
      <div
        className="relative h-80 bg-cover bg-center bg-black"
        style={{ backgroundImage: `url(${project.coverImage})` }}
      >
        <div className="absolute top-2 left-2 bg-black opacity-50 text-white text-xs px-3 py-1 rounded-full">
          {project.year || "Year"}
        </div>
        <div className="absolute top-2 right-3 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span
            className={`h-3 w-3 rounded-full ${
              project.status === "live" ? "bg-green-500" : "bg-yellow-400"
            }`}
          ></span>
          {project.status || "Status"}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <span className="text-black text-sm bg-white px-4 py-2 rounded-full backdrop-blur-md">
            {project.hoverLabel || "Corporate Website"}
          </span>
        </div>
      </div>

      <div className="p-5 relative">
        <h3 className="text-xl font-semibold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 border border-gray-500  text-white text-xs px-3 py-1 rounded-full flex items-center"
            >
              {tagIcons[tag] ? (
                <span className="mr-1.5">{tagIcons[tag]}</span>
              ) : null}
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <span className="bg-gray-600 border border-gray-400 text-white text-xs px-3 py-1 rounded-full flex items-center">
              +{extraTagsCount}
            </span>
          )}
        </div>

        <div
          className={`flex w-full justify-evenly gap-4 transition-all duration-300 opacity-100 md:absolute md:bottom-6.75 md:left-4 md:right-4 md:pr-8 md:hidden group-hover:opacity-90 group-hover:md:flex
          `}
        >
          {project.codeLink && (
            <div className="border border-green-800 flex items-center justify-center p-0.5 w-full rounded-full">
              <a
                href={project.codeLink}
                target="_blank"
                className="text-white text-sm flex items-center justify-center bg-gray-800 px-4 py-2 rounded-full w-full border border-white hover:bg-gray-700"
              >
                <GithubIcon className="w-4 h-4 mr-1" />
                Code
              </a>
            </div>
          )}
          {project.liveLink && (
            <div className="flex items-center justify-center p-0.5 w-full rounded-full border border-green-800">
              <a
                href={project.liveLink}
                target="_blank"
                className="text-white flex items-center justify-center text-sm border border-white bg-green-600 px-4 py-2 rounded-full w-full hover:bg-green-500"
              >
                {/* link icon */}
                <Link className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section
    id="projects"
    className="p-4 md:px-38 bg-black min-h-screen flex flex-col items-center justify-center"
  >
    <h2 className="text-3xl md:text-4xl flex  font-bold text-white mb-2">Featured Projects</h2>
    <p className="text-gray-400 text-lg max-w-2xl text-center mb-2">
      A curated collection of my digital creations, each telling a unique story
      of innovation, problem-solving, and technical excellence. Hover to explore
      the details.
    </p>
    <p className="mb-1 text-gray-500 text-xs">
      Note: Some of my projects are not listed here due to client
      confidentiality. Fiverr and Upwork projects are not included here, but you
      can find SOME of them in my github
    </p>
    <div className="px-16 h-px bg-gradient-to-r from-gray-500 via-white to-gray-500 my-8"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
