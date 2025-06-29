import React from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
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

// Tech icons with brand color + readable text
const techStyles = {
  React: {
    icon: <SiReact />,
    bg: '#61DAFB',
    text: 'text-black',
  },
  Tailwind: {
    icon: <SiTailwindcss />,
    bg: '#38BDF8',
    text: 'text-white',
  },
  Firebase: {
    icon: <SiFirebase />,
    bg: '#FFCA28',
    text: 'text-black',
  },
  MongoDB: {
    icon: <SiMongodb />,
    bg: '#47A248',
    text: 'text-white',
  },
  'Node.js': {
    icon: <SiNodedotjs />,
    bg: '#339933',
    text: 'text-white',
  },
  JWT: {
    icon: <SiJsonwebtokens />,
    bg: '#000000',
    text: 'text-white',
  },
  'Express.js': {
    icon: <SiExpress />,
    bg: '#303030',
    text: 'text-white',
  },
};

const Details = ({ project }) => {
  if (!project) return null;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 bg-[#1b1b3a] rounded-lg shadow-lg dark:bg-gray-900">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">
        {project.title}
      </h1>

      {/* Image */}
      <div className="mb-8 flex justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl max-h-[400px] object-contain"
        />
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[var(--color-primary)]">Description</h2>
        <p className="text-[var(--color-secondary)]">{project.description}</p>
      </section>

      {/* Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Key Features</h2>
        <ul className="list-none space-y-2">
          {project.features?.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-[var(--color-secondary)] text-lg">
              <FaCheckCircle className="text-white" /> {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Technology Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies?.map((tech, i) => {
            const style = techStyles[tech.name] || {
              icon: <FaGithub />,
              bg: '#6B7280',
              text: 'text-white',
            };
            return (
              <span
                key={i}
                className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full font-medium ${style.text}`}
                style={{ backgroundColor: style.bg }}
              >
                {style.icon} {tech.name}
              </span>
            );
          })}
        </div>
      </section>

      {/* Challenges (with React icon instead of bullet) */}
      {project.challenges && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Challenges Faced</h2>
          <ul className="space-y-2">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex items-center gap-3 text-[var(--color-secondary)] text-lg">
                <FaCheckCircle className="text-white" /> {challenge}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Improvements (with React icon instead of bullet) */}
      {project.improvements && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Possible Improvements</h2>
          <ul className="space-y-2">
            {project.improvements.map((improvement, i) => (
              <li key={i} className="flex items-center gap-3 text-[var(--color-secondary)] text-lg">
                <FaCheckCircle className="text-white" /> {improvement}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Action Buttons */}
      <section className="flex flex-wrap gap-4 mt-6">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
        )}
        {project.client && (
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-md hover:bg-gray-900 transition"
          >
            <FaGithub /> Client Code
          </a>
        )}
        {project.server && (
          <a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-md hover:bg-gray-800 transition"
          >
            <FaGithub /> Server Code
          </a>
        )}
      </section>
    </div>
  );
};

export default Details;
