// TechCareerAccelerator.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp, Cloud, Code, Database, GraduationCap, Zap, ChevronDown, Crown } from 'lucide-react';

const TechCareerAccelerator = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedPlans, setExpandedPlans] = useState({
    starter: false,
    pro: false,
    elite: false,
    master: false
  });

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

  const togglePlan = (planKey) => {
    setExpandedPlans(prev => ({ ...prev, [planKey]: !prev[planKey] }));
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

  const expandVariants = {
    expanded: { height: 'auto', opacity: 1 },
    collapsed: { height: 0, opacity: 0 }
  };

  const focusAreas = [
    { icon: Cloud, title: 'Cloud Computing', description: 'AWS, Azure, and Google Cloud fundamentals.' },
    { icon: Code, title: 'DevOps Practices', description: 'CI/CD pipelines and infrastructure as code.' },
    { icon: Database, title: 'Data Analytics', description: 'SQL, Python, and big data tools.' }
  ];

  const plans = [
    {
      key: 'starter',
      icon: GraduationCap,
      title: 'STARTER KIT',
      tagline: 'Foundations & Job Readiness',
      idealFor: '🎓 Students, fresh graduates, early professionals (0–2 years)',
      goal: 'Build strong foundations, gain job-ready confidence, and secure your first role.',
      duration: '9 Days | 1 Hour/Day (Mon–Fri) or 5 Days | 2 Hours/Day (Sat–Sun)',
      whatYouGet: [
        { number: '1️⃣', phase: 'Foundation Phase – Find Your Direction', items: ['🎯 Career Counselling & Role Mapping', '→ Discover your ideal domain (Cloud, DevOps, Data, etc.) with expert guidance.'] },
        { number: '2️⃣', phase: 'Skill Development Phase – Build Real Capabilities', items: ['📚 Industry-Aligned Curriculum', '🧠 Technical Skill Training (Cloud/DevOps/Data)', '🏆 Certification Preparation Support', '🗣️ Soft Skills & Communication Training', '🧩 Career Readiness Assessments'] },
        { number: '3️⃣', phase: 'Career Preparation & Job Readiness Phase', items: ['📝 Resume & Portfolio Building', '🌐 LinkedIn & Naukri Optimization', '💬 Interview Q&A Library', '🚀 Interview Preparation & Mock Interviews'] }
      ]
    },
    {
      key: 'pro',
      icon: Code,
      title: 'PRO KIT',
      tagline: 'Career Growth & Upskilling',
      idealFor: '💡 Early to mid-level professionals (2–6 years)',
      goal: 'Upskill efficiently, accelerate your career, and transition into high-demand domains.',
      duration: '6 Days | 1 Hour/Day (Mon–Fri) or 3 Days | 2 Hours/Day (Sat–Sun)',
      whatYouGet: [
        { number: '1️⃣', phase: 'Mentorship & Career Guidance Phase', items: ['🤝 1-on-1 Mentorship Sessions', '🎓 Career Growth & Transition Mentoring', '🌍 Networking with Industry Experts'] },
        { number: '2️⃣', phase: 'Placement & Performance Phase', items: ['📂 Placement & Internship Assistance', '🎯 Recruiter Connect & Referrals', '🔍 Personalized Feedback & Skill Assessment'] },
        { number: '3️⃣', phase: 'Advanced Skill Development Phase', items: ['💻 Real-World Projects & Workshops', '🧩 New Tools & Trends', '💼 Alumni Community Access'] }
      ]
    },
    {
      key: 'elite',
      icon: Zap,
      title: 'ELITE KIT',
      tagline: 'Leadership & Transformation',
      idealFor: '🏆 Mid–Senior professionals & career switchers (5+ years)',
      goal: 'Transition into leadership or redefine your career with future-ready skills.',
      duration: '5 Days | 1 Hour/Day (Mon–Fri) or 3 Days | 2 Hours/Day (Sat–Sun)',
      whatYouGet: [
        { number: '1️⃣', phase: 'Career Transformation Phase', items: ['🧭 Career Transition Programs (Non-Tech → Tech, Mid → Senior roles)', '🎯 Leadership Coaching', '💡 Corporate Readiness & Workplace Etiquette'] },
        { number: '2️⃣', phase: 'Strategic Growth & Future Tech Phase', items: ['🤖 AI, Automation & Future Tech', '🌍 Global Trends & Skills', '💼 Product Management & Tech Leadership (Optional)'] },
        { number: '3️⃣', phase: 'Exclusive Access & Continuous Growth Phase', items: ['🔑 Priority Recruiter Access', '💬 Personal Branding Consultations', '🌐 Lifetime Alumni Community'] }
      ]
    },
    {
      key: 'master',
      icon: Crown,
      title: 'MASTER PROGRAM – The Complete Tech Career Accelerator',
      tagline: 'Full Career Transformation Bundle',
      idealFor: 'Anyone who wants a full career transformation in IT.',
      goal: 'Complete end-to-end training, from foundation to leadership, in one journey.',
      duration: '20 Days | 1 Hour per Day (Mon–Fri) or 11 Days | 2 Hours per Day (Sat–Sun)',
      whatYouGet: [
        { number: '', phase: 'Covers: Starter Kit + Pro + Elite', items: [] },
        { number: '', phase: 'Includes:', items: ['All features from Plans 1, 2 & 3', 'End-to-end career mentorship', 'Certification, resume, and placement guidance', 'Post-program alumni and recruiter support'] }
      ]
    }
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

        {/* Programs Accordion */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Programs Under This Track
          </h2>
          <div className="space-y-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.key}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  onClick={() => togglePlan(plan.key)}
                >
                  <div className="flex items-center space-x-4">
                    <plan.icon className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{plan.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{plan.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ChevronDown
                      className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${expandedPlans[plan.key] ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={expandedPlans[plan.key] ? 'expanded' : 'collapsed'}
                  variants={expandVariants}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden bg-gray-50 dark:bg-gray-700"
                >
                  <div className="p-6 space-y-6">
                    {/* Ideal For & Goal */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Ideal For</h4>
                      <p className="text-gray-600 dark:text-gray-300">{plan.idealFor}</p>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Goal</h4>
                      <p className="text-gray-600 dark:text-gray-300">{plan.goal}</p>
                    </div>

                    {/* Duration */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Duration Options</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 1 Hour per Day (Monday–Friday)</li>
                        <li>• 2 Hours per Day (Saturday–Sunday)</li>
                      </ul>
                      <p className="text-sm font-medium text-indigo-600 mt-2">{plan.duration}</p>
                    </div>

                    {/* What You’ll Get */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">What You’ll Get</h4>
                      {plan.whatYouGet.map((section, secIndex) => (
                        <div key={secIndex} className="mb-6">
                          <h5 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            {section.number} {section.phase}
                          </h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <Link
                        to="/plans-pricing"
                        className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded font-semibold text-center hover:bg-indigo-700 transition-colors duration-300"
                      >
                        View Pricing
                      </Link>
                      <Link
                        to="https://forms.cloud.microsoft/r/qjHECcYaSV" target="_blank" rel="noopener noreferrer"
                        className="flex-1 border-2 border-indigo-600 text-indigo-600 py-2 px-4 rounded font-semibold text-center hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                      >
                        Book This Program
                      </Link>
                    </div>
                  </div>
                </motion.div>
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