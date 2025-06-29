import {
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiJsonwebtokens,
  SiExpress,
} from 'react-icons/si';
import { Link } from 'react-router';

const techIcons = {
  React: <SiReact />,
  Tailwind: <SiTailwindcss />,
  Firebase: <SiFirebase />,
  MongoDB: <SiMongodb />,
  'Node.js': <SiNodedotjs />,
  JWT: <SiJsonwebtokens />,
  'Express.js': <SiExpress />,
};

const ProjectCard = ({ project }) => {
  return (
    <div
      data-aos="fade-up"
      className="rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row bg-[#1b1b3a] p-4 md:p-6 dark:bg-gray-900 mb-12 border-l-4 border-[var(--color-primary)]"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-2 md:p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[250px] md:max-h-[400px] object-contain rounded-xl"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[var(--color-primary)]">
            {project.title}
          </h3>
          <p className="text-[var(--color-secondary)] text-lg md:text-xl">
            {project.description}
          </p>

          {/* Features */}
          <ul className="text-sm md:text-base space-y-1">
            {project.features?.map((feature, i) => (
              <li
                key={i}
                className="flex text-lg md:text-xl items-center gap-2 text-[var(--color-secondary)]"
              >
                <FaCheckCircle className="text-green-500" /> {feature}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies?.map((tech, i) => (
              <span
                key={i}
                className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full font-medium ${tech.color}`}
              >
                {techIcons[tech.name] || <FaServer />} {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            <FaGithub /> Client
          </a>
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FaGithub /> Server
            </a>
          )}
          <Link
            to={`/projects/details/${project.id}`}
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
