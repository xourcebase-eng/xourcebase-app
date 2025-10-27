// TechCareerAccelerator.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp, Cloud, Code, Database, GraduationCap, Zap } from 'lucide-react';

const TechCareerAccelerator = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Manual SEO setup without Helmet
    document.title = 'Tech Career Accelerator | XourceBase';
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'From learning to leadership — your IT career starts here. Build a successful tech career with our accelerator programs in cloud, DevOps, and data domains.';
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'tech career accelerator, IT training, cloud engineering, DevOps, data analyst, software professional, career readiness';
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Tech Career Accelerator | XourceBase' },
      { property: 'og:description', content: 'From learning to leadership — your IT career starts here. Ideal for aspiring Cloud Engineers, DevOps Engineers, Data Analysts, or Software Professionals.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://xourcebase.com/tech-career-accelerator' },
      { property: 'og:image', content: 'https://xourcebase.com/assets/tech-accelerator-hero.jpg' }
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
      { name: 'twitter:title', content: 'Tech Career Accelerator | XourceBase' },
      { name: 'twitter:description', content: 'Build your IT career with hands-on projects, certification guidance, and leadership training.' },
      { name: 'twitter:image', content: 'https://xourcebase.com/assets/tech-accelerator-hero.jpg' }
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

  const programs = [
    {
      icon: GraduationCap,
      title: 'LaunchPad – Foundations & Job Readiness',
      description: 'For beginners building core IT skills and preparing for entry-level roles.',
      path: '/launchpad'
    },
    {
      icon: Code,
      title: 'Elite – Career Growth & Upskilling',
      description: 'For intermediate professionals advancing in cloud, DevOps, or data engineering.',
      path: '/elite'
    },
    {
      icon: Zap,
      title: 'Elite Pro – Leadership & Transformation',
      description: 'For advanced leaders mastering AI, automation, and strategic tech roles.',
      path: '/elite-pro'
    }
  ];

  const focusAreas = [
    { icon: Cloud, title: 'Cloud Computing', description: 'AWS, Azure, and Google Cloud fundamentals.' },
    { icon: Code, title: 'DevOps Practices', description: 'CI/CD pipelines and infrastructure as code.' },
    { icon: Database, title: 'Data Analytics', description: 'SQL, Python, and big data tools.' }
  ];

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
            Tech Career Accelerator
          </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            From learning to leadership — your IT career starts here.
          </motion.p>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link
              to="/plans-pricing"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View Plans
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10" /> {/* Overlay for depth */}
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        {/* About Section */}
        <motion.section variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            About the Program
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            For students and professionals who want to build or grow a career in Information Technology. Ideal for aspiring Cloud Engineers, DevOps Engineers, Data Analysts, or Software Professionals.
          </p>
        </motion.section>

        {/* Focus Areas */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <area.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Programs Grid */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Programs Under This Track
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <program.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{program.description}</p>
                <Link
                  to={program.path}
                  className="block text-center bg-indigo-600 text-white py-2 px-4 rounded font-semibold hover:bg-indigo-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
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
            Ready to launch your tech career?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Start your journey with XourceBase today.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/plans-pricing"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View Pricing
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
            >
              Contact Us
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

export default TechCareerAccelerator;