import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../Components/ProjectCard';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });

    fetch('/projects.json')
      .then((res) => res.json()) // ✅ fix: parse JSON response
      .then((data) => setProjects(data))
      .catch((error) => console.error('Failed to load projects:', error));
  }, []);

  return (
    <section id="projects" className="px-6 md:px-10 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">My Projects</h2>
        <p className="text-[var(--color-secondary)] mt-2">Some of my recent work</p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id || index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;