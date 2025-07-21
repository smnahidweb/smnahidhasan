// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiExpress,
  SiMongodb, SiFirebase, SiFigma, SiC, SiCplusplus
} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';

const skills = [
  { name: 'React', icon: <FaReact size={50} color="#61DBFB" />, bg: 'bg-[#0e1726]', border: '#61DBFB' },
  { name: 'JavaScript', icon: <SiJavascript size={50} color="#F7DF1E" />, bg: 'bg-[#1a1a1a]', border: '#F7DF1E' },
  { name: 'HTML5', icon: <FaHtml5 size={50} color="#E34F26" />, bg: 'bg-[#2c1c1a]', border: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt size={50} color="#1572B6" />, bg: 'bg-[#1c1f26]', border: '#1572B6' },
  { name: 'Tailwind', icon: <SiTailwindcss size={50} color="#38B2AC" />, bg: 'bg-[#162729]', border: '#38B2AC' },
  { name: 'Node.js', icon: <FaNodeJs size={50} color="#339933" />, bg: 'bg-[#132318]', border: '#339933' },
  { name: 'Express.js', icon: <SiExpress size={50} color="#ffffff" />, bg: 'bg-[#2c2c2c]', border: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb size={50} color="#47A248" />, bg: 'bg-[#1d2a20]', border: '#47A248' },
  { name: 'Firebase', icon: <SiFirebase size={50} color="#FFCA28" />, bg: 'bg-[#0D1117]', border: '#FFCA28' },
  { name: 'GitHub', icon: <FaGithub size={50} color="#ffffff" />, bg: 'bg-[#181717]', border: '#ffffff' },
  { name: 'Figma', icon: <SiFigma size={50} color="#F24E1E" />, bg: 'bg-[#2c1f1a]', border: '#F24E1E' },
  { name: 'C Programming', icon: <SiC size={50} color="#A8B9CC" />, bg: 'bg-[#1e1f26]', border: '#A8B9CC' },
  { name: 'C++', icon: <SiCplusplus size={50} color="#00599C" />, bg: 'bg-[#1c1e25]', border: 'white' },
  { name: 'Problem Solving', icon: <GiBrain size={50} color="#9F7AEA" />, bg: 'bg-[#222026]', border: '#9F7AEA' },
  { name: 'Mentorship', icon: <MdSchool size={50} color="#319795" />, bg: 'bg-[#1f2e2e]', border: '#319795' }
];

const Skills = () => (
  <section id="skills" className="px-6 md:px-20 py-10">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">My Skills</h2>
      <p className="text-[var(--color-secondary)] mt-2">Technologies & tools I work with</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className={`relative rounded-xl overflow-hidden ${skill.bg}`}
          style={{ border: `2px solid ${skill.border}` }}
        >
          <div className="absolute inset-0 z-0 border-animation" style={{ '--clr': skill.border }}></div>
          <div className="relative z-10 flex flex-col items-center justify-center p-6 space-y-3">
            {skill.icon}
            <span className="text-white font-medium text-lg">{skill.name}</span>
          </div>
        </motion.div>
      ))}
    </div>

    <style>{`
      .border-animation {
        pointer-events: none;
        background: conic-gradient(from 0deg, var(--clr), transparent 90%);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: destination-out;
        animation: borderSpin 12s linear infinite;
        padding: 2px;
      }
      @keyframes borderSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </section>
);

export default Skills;
