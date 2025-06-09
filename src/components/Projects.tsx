interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: 'Project  1',
    description: 'React + Node.js + MySQL educational platform.',
    tags: ['React', 'Node.js', 'MySQL'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 2 ',
    description: 'Android Kotlin app.',
    tags: ['Kotlin', 'SQLite'],
    codeLink: '#',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20  px-8">
    <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <div key={p.title} className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
          <p className="mb-4">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map((t) => (
              <span key={t} className="px-3 py-1 bg-green-600 rounded text-sm">{t}</span>
            ))}
          </div>
          <div className="flex space-x-4">
            {p.codeLink && (
              <a href={p.codeLink} className="text-green-400 hover:underline">Code</a>
            )}
            {p.liveLink && (
              <a href={p.liveLink} className="text-green-400 hover:underline">Live Demo</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
