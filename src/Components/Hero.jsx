// src/components/Hero.jsx
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '/nahid.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        {/* Typing Name */}
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
          <Typewriter
            words={[`Hi, I am S.M.Nahid Hasan`]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle=" "
            typeSpeed={100}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>

        {/* Designation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-300"
        >
          Full Stack Developer skilled in MERN stack, building scalable website with clean UI and robust backend.
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex gap-5 justify-center md:justify-start text-2xl text-[var(--color-primary)]"
        >
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com/YOUR_FACEBOOK" target="_blank" rel="noreferrer"><FaFacebook /></a>
        </motion.div>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm md:text-base shadow-md hover:scale-105 transition-transform"
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <img
          src={myPhoto}
          alt="Nahid Hasan"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
