// Programs.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp, Code, Mic } from 'lucide-react';

const Programs = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Manual SEO setup without Helmet
    document.title = 'Programs | XourceBase';
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Choose your career path with XourceBase. Explore Tech Career Accelerator and Communication & Support Excellence programs for professional growth.';
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'career programs, tech accelerator, communication training, IT careers, BPO training, professional development';
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Programs | XourceBase' },
      { property: 'og:description', content: 'Whether you’re launching your tech career or mastering communication skills, XourceBase helps you achieve professional excellence.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://xourcebase.com/programs' },
      { property: 'og:image', content: 'https://xourcebase.com/assets/programs-hero.jpg' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.property = tag.property;
        document.head.appendChild(ogTag);
      }
      ogTag.content = tag.content;
    });
    
    // Twitter cards
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Programs | XourceBase' },
      { name: 'twitter:description', content: 'Discover structured, mentor-led programs in tech and communication for your career success.' },
      { name: 'twitter:image', content: 'https://xourcebase.com/assets/programs-hero.jpg' }
    ];
    
    twitterTags.forEach(tag => {
      let twTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twTag) {
        twTag = document.createElement('meta');
        twTag.name = tag.name;
        document.head.appendChild(twTag);
      }
      twTag.content = tag.content;
    });

    // Cleanup function (optional: reset on unmount)
    return () => {
      // You can remove or reset metas here if needed, but for SPA it's often fine to leave them
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Choose Your Career Path with XourceBase
          </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Whether you’re launching your tech career or mastering communication skills, XourceBase helps you achieve professional excellence with structured, mentor-led programs.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black/10" /> {/* Overlay for depth */}
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        {/* Career Tracks Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Our Career Tracks
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tech Career Accelerator Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Code className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
                Tech Career Accelerator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center leading-relaxed">
                For students and professionals aiming to build a career in IT — Cloud, DevOps, or Data. Includes hands-on projects, certification support, and leadership training.
              </p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-center mb-6 italic">
                From learning to leadership — your IT career starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tech-career-accelerator"
                  className="bg-indigo-600 text-white py-2 px-6 rounded font-semibold hover:bg-indigo-700 transition-colors duration-300 text-center"
                >
                  Explore Program
                </Link>
                <Link
                  to="/plans-pricing"
                  className="border-2 border-indigo-600 text-indigo-600 py-2 px-6 rounded font-semibold hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            {/* Communication & Support Excellence Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Mic className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
                Communication & Support Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center leading-relaxed">
                For individuals aspiring to excel in BPO, Voice, or Non-Voice careers. Build communication confidence, client handling skills, and professional personality.
              </p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-center mb-6 italic">
                From communication to confidence — build your professional voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/communication-support-excellence"
                  className="bg-indigo-600 text-white py-2 px-6 rounded font-semibold hover:bg-indigo-700 transition-colors duration-300 text-center"
                >
                  Explore Program
                </Link>
                <Link
                  to="/plans-pricing"
                  className="border-2 border-indigo-600 text-indigo-600 py-2 px-6 rounded font-semibold hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Not sure which track is right for you?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Book a free consultation with our mentors today.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book a Demo Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </main>
  );
};

export default Programs;