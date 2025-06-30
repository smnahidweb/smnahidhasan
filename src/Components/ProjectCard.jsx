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
      className="rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row bg-[#1b1b3a] dark:bg-gray-900 mb-10 border-l-4 border-[var(--color-primary)]"
    >
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[220px] md:max-h-[400px] object-contain rounded-xl"
        />
      </div>

      {/* Right: Info */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm md:text-base text-[var(--color-secondary)]">
          {project.description.length > 120
            ? `${project.description.slice(0, 120)}...`
            : project.description}
        </p>

        {/* Features - Show 2 or 3 */}
        <ul className="space-y-1 text-sm md:text-base">
          {project.features?.slice(0, 3).map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[var(--color-secondary)]"
            >
              <FaCheckCircle className="text-green-500" /> {feature}
            </li>
          ))}
        </ul>

        {/* Technologies - Show 3–4 */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies?.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className={`flex items-center gap-1 px-3 py-1 text-xs rounded-full font-medium ${tech.color}`}
            >
              {techIcons[tech.name] || <FaServer />} {tech.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-gray-900 transition text-sm"
          >
            <FaGithub /> Client
          </a>
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm"
            >
              <FaGithub /> Server
            </a>
          )}
          <Link
            to={`/projects/details/${project.id}`}
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
