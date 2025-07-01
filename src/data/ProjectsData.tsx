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
  SiSqlite,
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
  Sqlite: <SiSqlite className="text-blue-500" />,

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
    title: "SnapTap",
    description:
      "A lightweight desktop application that enhances productivity by managing custom hotkeys for quick access to frequently used applications, directories, files, and websites. Features a responsive and modern UI experience.",
    tags: ["Java", "Javafx", "CSS", "Fxml"],
    year: "2025",
    status: "live",
    coverImage: "/snaptap.png",
    hoverLabel: "Desktop Hotkey Manager Platform",
    liveLink: "#",
    codeLink: "https://github.com/kinuthia-lawrence/SnapTap",
  },
  {
    title: "Cywotek",
    description:
      "A modern web platform for Cyber World Techies Kenya, providing technology services and professional training. Features responsive design, service showcases, and course enrollment capabilities for tech enthusiasts and businesses.",
    tags: ["TypeScript", "React", "Tailwind"],
    year: "2025",
    status: "development",
    coverImage: "/cywotek.png",
    hoverLabel: "Cyber World Techies Kenya Website",
    liveLink: "https://cywotek.vercel.app/",
    codeLink: "#",
  },
  {
    title: "Solid Book Scraper",
    description:
      "A powerful desktop application designed to efficiently extract and organize information from online sources. Features an intuitive interface for configuring search parameters, automated data extraction, and export capabilities to various formats.",
    tags: ["Java", "Javafx", "Node.js", "CSS", "Fxml"],
    year: "2025",
    status: "live",
    coverImage: "/booksolidscraper.png",
    hoverLabel: "A Desktop Web Scraper Application",
    liveLink: "#",
    codeLink: "https://github.com/kinuthia-lawrence/gmapscrapper",
  },
  {
    title: "Point of Sale",
    description:
      "A comprehensive retail management system designed for small to medium businesses to process transactions, track inventory, and generate sales reports. Features an intuitive interface, secure payment processing, and reliable local data storage.",
    tags: ["Java", "Javafx", "CSS", "Fxml", "Sqlite"],
    year: "2024",
    status: "live",
    coverImage: "/jelpspos.png",
    hoverLabel: "Desktop Point of Sale Application",
    liveLink: "#",
    codeLink:
      "https://github.com/kinuthia-lawrence/JepsChemistPos/blob/master/README.md",
  },
  {
    title: "Notification Hub",
    description:
      "A specialized Android notification manager that overrides the default system to provide granular control over alerts. Features custom sounds, app-specific volume settings, priority filtering, and selective Do Not Disturb override capabilities for critical applications.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    year: "2025",
    status: "development",
    coverImage: "/notificationhub.jpg",
    hoverLabel: "Android Notification Manager Application",
    liveLink: "#",
    codeLink: "https://github.com/kinuthia-lawrence/NotificaitonHub",
  },
  {
  title: "FLEXBYTE ERP",
  description:
    "A multi-tenant ERP and POS system designed for SMEs, featuring modules for inventory, HR, and accounting. Built with Laravel and React, it includes secure authentication, advanced reporting, and real-time data tracking.",
  tags: ["Laravel", "React", "MySQL", "Docker"],
  year: "2024",
  status: "development",
  coverImage: "/flexbyte.png",
  hoverLabel: "Multi-Tenant ERP and POS System",
  liveLink: "#",
  codeLink: "#",
},
{
  title: "Smart WiFi",
  description:
    "A multi-tenant WiFi hotspot management system for ISPs. Built with Spring Boot and React, it supports device whitelisting, usage tracking, billing integration, and role-based access in a Dockerized cloud environment.",
  tags: ["Spring Boot", "React", "Docker", "PostgreSQL"],
  year: "2025",
  status: "development",
  coverImage: "/smart-wifi.png",
  hoverLabel: "WiFi Hotspot Billing and Analytics System",
  liveLink: "https://smart-wifi-pi.vercel.app/",
  codeLink: "#",
}


];
