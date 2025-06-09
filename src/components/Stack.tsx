import React from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiKotlin,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiMysql,
  SiMongodb,
  SiIntellijidea,
} from "react-icons/si";

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
}

const TechItem = ({ icon, name }: TechItemProps) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
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
  ];

  // Double the array to create a seamless loop effect
  const repeatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-4 px-4 bg-black/30 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full">
            <span className="text-green-400 font-medium tracking-wide text-sm">
              TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-4xl font-bold mt-4">
            My Tech{" "}
            <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </div>

        {/* Animated scrolling container */}
        <div className="relative w-full">
          <div className="animate-scroll flex space-x-6 py-4">
            {repeatedTechnologies.map((tech, index) => (
              <TechItem
                key={index}
                icon={tech.icon}
                name={tech.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;

