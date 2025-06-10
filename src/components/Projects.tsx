import { Github, GithubIcon, Link } from "lucide-react";
import React from "react";

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
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-4xl overflow-hidden shadow-md relative group hover:opacity-70 border border-gray-800 transition-all duration-300">
      <div
        className="relative h-70 bg-cover bg-center"
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

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-600 border border-gray-400  text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`flex w-full justify-evenly gap-4 transition-opacity duration-300 opacity-100 md:opacity-0 md:hidden group-hover:opacity-100 group-hover:md:flex           
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
    className="py-8 px-8 md:px-38 bg-black min-h-screen flex flex-col items-center"
  >
    <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
