import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const res = await fetch('https://formspree.io/f/mjkrlvlv', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thanks for reaching out. I’ll get back to you soon.',
          confirmButtonColor: '#6366F1', // green
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Check your internet connection.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start border border-[var(--color-primary)] rounded-xl p-6 md:p-10 lg:p-16">

        {/* Left Column – Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-primary)]">Contact Me</h2>
          <p className="mb-10 text-lg md:text-xl text-[var(--color-secondary)] leading-relaxed">
            I’m available for freelance projects or full-time roles. Feel free to connect with me.
          </p>

          <div className="space-y-8 text-[var(--color-secondary)] text-lg md:text-xl">
            <div className="flex items-start gap-4">
              <FaEnvelope size={26} className="text-[var(--color-primary)] mt-1" />
              <div>
                <h4 className="font-semibold text-white text-xl">Email</h4>
                <p>smnahidh040@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt size={24} className="text-[var(--color-primary)] mt-1" />
              <div>
                <h4 className="font-semibold text-white text-xl">Phone</h4>
                <p>+880 1792 672232</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaWhatsapp size={26} className="text-indigo-500 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-xl">WhatsApp</h4>
                <p>+880 1792 672232</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={26} className="text-indigo-500 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-xl">Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column – Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8 w-full"
        >
          {/* Name */}
          <div>
            <label className="block text-lg md:text-xl font-medium mb-2 text-[var(--color-secondary)]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-4 text-base md:text-lg border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg md:text-xl font-medium mb-2 text-[var(--color-secondary)]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-4 text-base md:text-lg border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg md:text-xl font-medium mb-2 text-[var(--color-secondary)]">
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
              className="w-full px-4 py-4 text-base md:text-lg border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" cursor-pointer inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-6 py-4 text-base md:text-lg rounded-lg hover:bg-indigo-700 transition"
          >
            <FaPaperPlane size={20} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
