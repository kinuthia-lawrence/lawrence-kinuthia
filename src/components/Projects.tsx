import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  status?: 'development' | 'live';
  coverImage?: string;
  hoverLabel?: string;
  liveLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: 'Project  1',
    description: 'React + Node.js + MySQL educational platform.',
    tags: ['React', 'Node.js', 'MySQL'],
    year: '2024',
    status: 'live',
    coverImage: '/Backgroundless.png',
    hoverLabel: 'Educational Platform',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 2',
    description: 'Android Kotlin app.',
    tags: ['Kotlin', 'SQLite'],
    year: '2023',
    status: 'development',
    coverImage: '/Backgroundless.png',
    hoverLabel: 'Mobile App',
    codeLink: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md relative group hover:opacity-70 px-24">
      <div className="relative h-60 bg-cover bg-center" style={{ backgroundImage: `url(${project.coverImage})` }}>
        <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
          {project.year || 'Year'}
        </div>
        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <span className={`h-2 w-2 rounded-full ${project.status === 'live' ? 'bg-green-500' : 'bg-yellow-400'}`}></span>
          {project.status || 'Status'}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <span className="text-black text-sm bg-white px-4 py-2 rounded-full backdrop-blur-md">
            {project.hoverLabel || 'Corporate Website'}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`flex gap-4 transition-opacity duration-300 ${!project.liveLink && !project.codeLink ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              className="text-white text-sm bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
            >
              Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="text-white text-sm bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-8 bg-black min-h-screen">
    <h2 className="text-4xl font-bold text-white mb-10">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
