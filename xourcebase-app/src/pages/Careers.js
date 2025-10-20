import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase } from 'lucide-react';

const Careers = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center py-16 px-4"
    >
      <div className="text-center max-w-md mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex justify-center items-center gap-3 mx-auto"
        >
          Careers at XourceBase
          <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 dark:text-indigo-400 animate-bounce" />
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Exciting opportunities coming soon!
        </motion.p>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          We're building something amazing — stay tuned for roles in tech, mentorship, and more.
        </motion.p>

        {/* Illustration/Icon Group */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 200 }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <Users className="w-12 h-12 md:w-16 md:h-16 text-indigo-600 dark:text-indigo-400" />
          <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
          <Users className="w-12 h-12 md:w-16 md:h-16 text-teal-600 dark:text-teal-400" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Careers;