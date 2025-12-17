import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import XourceBaseLogo from '../assets/xourcebase-logo.png'; // Adjust path as needed

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const links = {
    about: [
      { name: 'About us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact us', path: '/contact' },
      { name: 'Blog', path: '/blog' },
    ],
    discover: [
      { name: 'Teach on XourceBase', path: '/teach-on-xourcebase' },
      { name: 'Plans and Pricing', path: '/plans-pricing' },
      { name: 'Help and Support', path: '/help' },
    ],
    business: [
      { name: 'XourceBase for Business', path: '/business' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Sitemap', path: '/sitemap' },
      { name: 'Terms', path: '/terms-conditions' },
    ],
  };

  const socialMedia = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/xourcebase', color: 'text-blue-600 hover:text-blue-400' },
    { icon: Twitter, url: 'https://x.com/XourceBase', color: 'text-sky-500 hover:text-sky-400' },
    { icon: Instagram, url: 'https://www.instagram.com/xourcebase/', color: 'text-pink-500 hover:text-pink-400' },
    { icon: Youtube, url: 'https://www.youtube.com/@XourceBase', color: 'text-red-600 hover:text-red-400' },
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61582394452096', color: 'text-blue-700 hover:text-blue-500' },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="bg-[#1c1d1f] text-gray-300 border-t border-gray-700"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Main Columns - Now 5 columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Section 1: About */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">About</h4>
            <ul className="space-y-2 text-sm">
              {links.about.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 2: Discover XourceBase */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Discover XourceBase</h4>
            <ul className="space-y-2 text-sm">
              {links.discover.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: XourceBase for Business (NEW) */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">XourceBase for Business</h4>
            <ul className="space-y-2 text-sm">
              {links.business.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 4: Legal & Accessibility */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Legal & Accessibility</h4>
            <ul className="space-y-2 text-sm">
              {links.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 5: Follow Us (kept in original position) */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 ${social.color}`}
                    aria-label={`Follow on ${social.icon.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Only logo and copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Link to="/" className="flex items-center group">
              <img
                src={XourceBaseLogo}
                alt="XourceBase Logo"
                className="w-24 h-auto sm:w-32 group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>
          <p className="text-gray-400">© 2025 XourceBase. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;