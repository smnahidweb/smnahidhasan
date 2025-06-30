// src/components/About.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLightbulb } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import myPhoto from "/nahid.jpg";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-16 mt-10 ">
      {/* Outer Border Container */}
      <div className = "">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">About Me</h2>
          {/* <p className="text-[var(--color-secondary)] mt-2">
            A brief introduction to who I am and what I do
          </p> */}
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={myPhoto}
              alt="Nahid Hasan"
              className="w-72 h-72 rounded-2xl object-cover border-4 border-[var(--color-primary)] shadow-md"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="flex-1 max-w-xl text-[var(--color-secondary)]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Get to Know Me Better
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              <FaReact className="inline text-[var(--color-primary)] mr-2" />
              I'm a passionate <strong>Full Stack Developer</strong> specializing in the MERN stack.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              <FaNodeJs className="inline text-[var(--color-primary)] mr-2" />
              I love crafting robust backend systems and clean UIs.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              <FaLightbulb className="inline text-[var(--color-primary)] mr-2" />
              Enthusiastic about <strong>problem-solving</strong> and performance optimization.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              <MdOutlineDeveloperMode className="inline text-[var(--color-primary)] mr-2" />
              I'm actively building real-time web applications using <strong>React.js</strong>, <strong>Express.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Firebase</strong>. Always learning, always building.
            </p>

            <div className="mt-8 text-[var(--color-primary)] text-xl font-semibold flex flex-wrap justify-center md:justify-start gap-4">
              <span className="flex items-center gap-2"><FaLightbulb /> Problem Solver</span>
              <span className="flex items-center gap-2"><SiMongodb /> Real-Time App Builder</span>
              <span className="flex items-center gap-2"><FaReact /> Passionate Coder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
