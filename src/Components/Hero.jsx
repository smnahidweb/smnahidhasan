import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '/nahid.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between mt-10 px-4 md:px-20 py-12">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        {/* Typing Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
          <Typewriter
            words={[`Hi, I am S.M.Nahid Hasan`]}
            loop={0}
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
          className="text-lg md:text-2xl text-[var(--color-secondary)] mt-6 md:mt-10"
        >
          Full Stack Developer skilled in MERN stack, building scalable websites with clean UI and robust backend.
        </motion.h2>

        {/* Social Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="flex flex-row flex-wrap gap-3 justify-center md:justify-start"
>
  {/* GitHub */}
  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300 text-sm flex items-center justify-center gap-2">
    <a
      href="https://github.com/smnahidweb"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-2"
    >
      <FaGithub size={18} /> GitHub
    </a>
  </button>

  {/* LinkedIn */}
  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300 text-sm flex items-center justify-center gap-2">
    <a
      href="https://linkedin.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-2"
    >
      <FaLinkedin size={18} /> LinkedIn
    </a>
  </button>

  {/* Facebook */}
  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300 text-sm flex items-center justify-center gap-2">
    <a
      href="https://web.facebook.com/nahid592002"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-2"
    >
      <FaFacebook size={18} /> Facebook
    </a>
  </button>
</motion.div>



        {/* Resume Button */}
   <motion.a
  href="/resume.pdf"
  download
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 1 }}
  className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--color-primary)] text-white text-sm md:text-base mt-6 hover:scale-105 transition"
>
  <FaDownload size={16} /> Download Resume
</motion.a>
      </div>

      {/* Right Section – Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex-1 mt-12 md:mt-0 flex justify-center"
      >
        <img
          src={myPhoto}
          alt="Nahid Hasan"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
