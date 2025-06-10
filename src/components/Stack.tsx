import React from "react";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJira,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaTrello
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiCss3,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiHtml5,
  SiIntellijidea,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiRender,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
}

const TechItem = ({ icon, name }: TechItemProps) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
      {/* Outer border with animation - green */}
      <div className="absolute inset-0 border-2 border-green-500 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
      {/* Inner content with white border */}
      <div className="relative w-[90%] h-[90%] flex items-center justify-center border-2 border-white rounded-lg bg-gray-900/50">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>
    <span className="mt-2 text-xs font-medium text-gray-300">{name}</span>
  </div>
);

const Stack = () => {
  const technologies = [
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
    { icon: <FaJava className="text-orange-500" />, name: "Java" },
    { icon: <SiKotlin className="text-purple-500" />, name: "Kotlin" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiVite className="text-purple-400" />, name: "Vite" },
    { icon: <SiVercel className="text-gray-200" />, name: "Vercel" },
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
    { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
    { icon: <SiIntellijidea className="text-pink-500" />, name: "IntelliJ" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    { icon: <SiRender className="text-purple-300" />, name: "Render" },
    { icon: <FaTrello className="text-blue-500" />, name: "Trello" },
    { icon: <SiNotion className="text-gray-200" />, name: "Notion" },
    { icon: <TbBrandVscode className="text-blue-500" />, name: "VS Code" },
    {
      icon: <SiAndroidstudio className="text-green-500" />,
      name: "Android Studio",
    },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiSpring className="text-green-500" />, name: "Spring" },
    { icon: <SiFlutter className="text-blue-400" />, name: "Flutter" },
    { icon: <FaAws className="text-yellow-500" />, name: "AWS" },
    { icon: <SiGraphql className="text-pink-500" />, name: "GraphQL" },
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
    { icon: <SiPython className="text-yellow-400" />, name: "Python" },
    { icon: <FaJira className="text-blue-500" />, name: "Jira" },
    { icon: <FaNpm className="text-red-500" />, name: "NPM" },
    { icon: <FaLinux className="text-yellow-700" />, name: "Linux" },
  ];

  return (
    <section className="py-8 px-4 bg-black/30 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-1 text-center">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full">
            <span className="text-green-400 font-medium tracking-wide text-sm">
              TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Continuous scrolling container with two rows */}
        <div className="overflow-hidden">
          {/* First row - left to right */}
          <div className="overflow-hidden w-full py-4 mb-2">
            <div className="infinite-scroll-left flex">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 mx-3">
                  <TechItem icon={tech.icon} name={tech.name} />
                </div>
              ))}
            </div>
          </div>
          {/* Second row - right to left (opposite direction) */}
          <div className="overflow-hidden w-full py-2">
            <div className="infinite-scroll-right flex">
              {[...technologies, ...technologies]
                .reverse()
                .map((tech, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 mx-3">
                    <TechItem icon={tech.icon} name={tech.name} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
