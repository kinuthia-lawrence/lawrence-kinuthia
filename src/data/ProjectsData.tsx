import { type ReactElement } from "react";
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

export interface Project {
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

// Icon mapping for project tags
export const tagIcons: Record<string, ReactElement> = {
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
export const MAX_TAGS_DISPLAY = 3;

export const projects: Project[] = [
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