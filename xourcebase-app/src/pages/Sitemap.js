import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Sitemap = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const menuItems = {
    mainPages: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Help & Support', path: '/support' },
      { name: 'Teach on XourceBase', path: '/teach' },
    ],
    company: [
      { name: 'Careers', path: '/careers' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">XourceBase</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your Cloud & DevOps Learning Hub</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Main Pages */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {menuItems.mainPages.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Resources</h2>
            <ul className="space-y-2">
              {menuItems.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Company</h2>
            <ul className="space-y-2">
              {menuItems.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sitemap;