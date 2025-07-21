import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import {
  FaDownload,
  FaHome,
  FaUserGraduate,
  FaLaptopCode,
  FaEnvelopeOpenText,
  FaProjectDiagram,
  FaCertificate,
  FaAward,
} from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItemClass =
    'flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300';

  const Links = (
    <>
      <li><NavLink to="/" className={navItemClass}> <FaHome /> Home </NavLink></li>
      <li><NavLink to="/about" className={navItemClass}><HiUserCircle /> About</NavLink></li>
      <li><NavLink to="/education" className={navItemClass}><FaUserGraduate /> Education</NavLink></li>
      <li><NavLink to="/skills" className={navItemClass}><FaLaptopCode /> Skills</NavLink></li>
      <li><NavLink to="/projects" className={navItemClass}><FaProjectDiagram /> Projects</NavLink></li>
        <li><NavLink to="/awards-mentoring" className={navItemClass}>  <FaAward/> Awards </NavLink></li>
      <li><NavLink to="/contact" className={navItemClass}><FaEnvelopeOpenText /> Contact</NavLink></li>
    
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-[#6366F1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Left side: Logo + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? <IoMdClose /> : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="block">
            <img
              src="/logo1.png"
              alt="Logo"
              className="h-8 hidden md:h-10 lg:h-32 lg:block w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">{Links}</ul>
        </div>

        {/* Resume Button */}
        <div className="flex-shrink-0">
          <a
            href="/resume(Nahid).pdf"
            download
            className="flex items-center gap-2 px-3 py-1.5 text-sm md:text-base bg-white text-indigo-600 font-semibold rounded-md whitespace-nowrap"
          >
            <FaDownload className="text-base" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu - only visible when open */}
     {isMenuOpen && (
 <div className="lg:hidden absolute top-16 left-4 z-[999] bg-[#6366F1]  shadow-lg p-2 w-fit">

    <ul className="space-y-2 text-sm text-white">{Links}</ul>
  </div>
)}

    </div>
  );
};

export default Navbar;
