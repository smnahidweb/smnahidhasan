import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaHome,
  FaUserGraduate,
  FaLaptopCode,
  FaEnvelopeOpenText,
  FaProjectDiagram,
} from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';

const Navbar = () => {
  const navItemClass =
    'flex items-center gap-2 text-lg font-medium text-gray-100 hover:text-white transition';

  const Links = (
    <>
      <li>
        <NavLink to="/" className={navItemClass}>
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navItemClass}>
          <HiUserCircle />
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/education" className={navItemClass}>
          <FaUserGraduate />
          Education
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" className={navItemClass}>
          <FaLaptopCode />
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={navItemClass}>
          <FaProjectDiagram />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navItemClass}>
          <FaEnvelopeOpenText />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full z-[999] px-6 py-3 mb-10 bg-indigo-500 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-indigo-600 rounded-box w-60 space-y-2"
          >
            {Links}
          </ul>
        </div>
        <span className="text-xl font-bold text-gray-100 ml-2">Nahid</span>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">{Links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-indigo-600 font-semibold rounded-md hover:bg-white transition"
        >
          <FaDownload />
          Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
