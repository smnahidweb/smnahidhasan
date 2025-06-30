import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
} from 'react-icons/fa';
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiC,
  SiCplusplus,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import myPhoto from '/nahid.jpg';

const techIcons = [
  { Icon: SiReact, color: '#61DBFB', name: 'React' },
  { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { Icon: SiExpress, color: '#000000', name: 'Express' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  { Icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
  { Icon: SiCss3, color: '#1572B6', name: 'CSS3' },
  { Icon: SiTailwindcss, color: '#38B2AC', name: 'Tailwind CSS' },
  { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  { Icon: SiC, color: '#A8B9CC', name: 'C' },
  { Icon: SiCplusplus, color: '#00599C', name: 'C++' },
];

const Hero = () => {
  const [paused, setPaused] = useState(false);
  const radius = 130;
  const centerX = 144;
  const centerY = 144;

  return (
    <section className="min-h-screen mt-10 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 py-12 gap-10">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
          <Typewriter
            words={['S.M.Nahid Hasan']}
            loop={0}
            cursor
            cursorStyle=" "
            typeSpeed={100}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl text-[var(--color-secondary)] mt-6 md:mt-10"
        >
          Full Stack Developer skilled in MERN stack, building scalable websites with clean UI and robust backend.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {[
            {
              href: 'https://github.com/smnahidweb',
              icon: <FaGithub size={18} />,
              text: 'GitHub',
            },
            {
              href: 'https://linkedin.com/',
              icon: <FaLinkedin size={18} />,
              text: 'LinkedIn',
            },
            {
              href: 'https://web.facebook.com/nahid592002',
              icon: <FaFacebook size={18} />,
              text: 'Facebook',
            },
          ].map(({ href, icon, text }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="border border-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition duration-300 text-sm flex items-center gap-2"
            >
              {icon} {text}
            </a>
          ))}
        </motion.div>

        {/* Hidden on small devices */}
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--color-primary)] text-white text-sm md:text-base mt-2 hover:scale-105 transition"
        >
          <FaDownload size={16} /> Download Resume
        </motion.a>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex-1 flex justify-center items-center"
      >
        <div
          className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <img
            src={myPhoto}
            alt="Nahid Hasan"
          className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-lg z-10"
          />
          <div
            className="absolute w-full h-full lg:spin-slow"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {techIcons.map(({ Icon, color, name }, i) => {
              const angle = (360 / techIcons.length) * i;
              const rad = (angle * Math.PI) / 180;
              const x = centerX + radius * Math.cos(rad);
              const y = centerY + radius * Math.sin(rad);

              return (
                <div
                  key={name}
                  className="orbit-icon tooltip"
                  style={{
                    top: y,
                    left: x,
                    color,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '1.5rem',
                    cursor: 'default',
                    zIndex: 5,
                  }}
                >
                  <Icon />
                  <span className="tooltip-text">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
