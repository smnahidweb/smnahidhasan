import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1b1b3a] text-[var(--color-secondary)] 0 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
        {/* Name + Tagline */}
        <p className="text-sm text-[var(--color-secondary)] ">&copy; {new Date().getFullYear()} S M Nahid Hasan</p>
        <p className="text-sm text-[var(--color-secondary)] ">Full Stack Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 text-lg">
          <a
            href="https://github.com/smnahidweb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://facebook.com/nahid592002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
