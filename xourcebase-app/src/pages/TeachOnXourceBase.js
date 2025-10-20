import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Calendar, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeachOnXourceBase = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Share Your Expertise. Empower the Next Generation of Cloud & DevOps Engineers.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join XourceBase as an instructor and shape the future of tech careers. Teach what you know, reach thousands, and earn while you educate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-teal-700 transition-all duration-300"
          >
            Become an Instructor
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Why Teach with Us */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700/50 text-center"
          >
            <Users className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Why Teach with Us</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Global reach to aspiring engineers</li>
              <li>• Competitive revenue share (up to 70%)</li>
              <li>• Flexible scheduling and tools</li>
              <li>• Join a supportive instructor community</li>
            </ul>
          </motion.div>

          {/* Who Can Apply */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700/50 text-center"
          >
            <User className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Who Can Apply</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Professionals, certified trainers, or industry experts with 3+ years in Cloud & DevOps. Share your real-world knowledge!
            </p>
          </motion.div>

          {/* How to Get Started */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700/50 text-center"
          >
            <Calendar className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">How to Get Started</h3>
            <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-decimal pl-4 text-left">
              <li>Submit your application with credentials</li>
              <li>Review and content approval (1-2 weeks)</li>
              <li>Launch your course and start teaching!</li>
            </ol>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700/50 text-center"
          >
            <Mail className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Ready to teach? Reach out for a chat.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeachOnXourceBase;