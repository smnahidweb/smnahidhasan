// src/components/ProjectCard.jsx
import { FaExternalLinkAlt, FaGithub, FaServer } from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,       // Correct icon name for Node.js
  SiJsonwebtokens,
  SiExpress
} from 'react-icons/si';
import { Link } from 'react-router';

const techIcons = {
  React: <SiReact />,
  Tailwind: <SiTailwindcss />,
  Firebase: <SiFirebase />,
  MongoDB: <SiMongodb />,
  'Node.js': <SiNodedotjs />,    // Use corrected icon here
  JWT: <SiJsonwebtokens />,
  'Express.js': <SiExpress />,
};

const ProjectCard = ({ project }) => {
  return (
    <div
      data-aos="fade-up"
      className="rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] gap-6"
    >
      <div className="h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover rounded-l-3xl"
        />
      </div>

      <div className="p-6 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[var(--color-primary)]">{project.title}</h3>
          <p className="text-[var(--color-secondary)] text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full font-medium ${tech.color}`}
              >
                {techIcons[tech.name] || <FaServer />} {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            <FaGithub /> Client
          </a>
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FaGithub /> Server
            </a>
          )}
          <Link
            to={`/projects/details/${project.id}`}
            className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
