import React from 'react';
import { Link, NavLink } from 'react-router';
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
    'flex items-center gap-2 text-base font-medium text-gray-100 hover:text-white';

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
    <div className="navbar fixed top-0 left-0 w-full z-[999] bg-[#6366F1] shadow-md px-4 md:px-6 lg:px-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#6366F1] rounded-box w-60 space-y-2"
            >
              {Links}
            </ul>
          </div>

          {/* Logo */}
          <Link to={'/'}>
          <span className="text-xl font-bold text-gray-100">
            <img
              src="/logo.png"
              className="object-contain w-24 h-auto rounded-full hidden   md:block"
              alt="Logo"
            />
          </span>
          </Link>
        </div>

        {/* Navbar Center (desktop links) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6">{Links}</ul>
        </div>

        {/* Navbar End – Resume Button (no animation, always visible) */}
        <div className="flex">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-3 py-2 text-sm md:text-base bg-gray-100 text-indigo-600 font-semibold rounded-md"
          >
            <FaDownload className="text-sm" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
