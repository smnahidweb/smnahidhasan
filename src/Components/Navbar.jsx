import React from 'react';
import { NavLink } from 'react-router'; 
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const Links = (
    <>
      <li className='text-xl font-semibold'><NavLink to='/' className="text-[var(--color-primary)]">Home</NavLink></li>
      <li className='text-xl font-semibold'><NavLink to='/about' className="text-[var(--color-primary)]">About</NavLink></li>
      <li className='text-xl font-semibold'><NavLink to='/education' className="text-[var(--color-primary)]">Education</NavLink></li>
      <li className='text-xl font-semibold'><NavLink to='/skills' className="text-[var(--color-primary)]">Skills</NavLink></li>
      <li className='text-xl font-semibold '><NavLink to='/projects' className="text-[var(--color-primary)]">Project</NavLink></li>
      <li className='text-xl font-semibold'><NavLink to='/contact' className="text-[var(--color-primary)]">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar shadow-sm mt-2 mx-auto px-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-indigo-500 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {Links}
          </ul>
        </div>
        <a className="text-[var(--color-primary)] text-xl font-bold">Nahid</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Links}
        </ul>
      </div>

      {/* Navbar End */}
     <div className="navbar-end">
        <motion.a
          href="/resume.pdf" // replace with your actual resume path
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white rounded-md font-medium transition"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </motion.a>
      </div>

    </div>
  );
};

export default Navbar;
