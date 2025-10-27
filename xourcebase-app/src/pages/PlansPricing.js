import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Award, Star, Quote, Clock, Mail, Phone, User, Calendar, MessageCircle, Rocket, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkeletonCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className="relative flex flex-col p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-700/50 bg-white dark:bg-gray-800 animate-pulse h-full"
  >
    <div className="absolute top-4 right-4">
      <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
    </div>
    <div className="flex-grow space-y-4">
      <div className="h-8 bg-gray-200 rounded w-24"></div>
      <div className="h-4 bg-gray-200 rounded w-32"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-4/5"></div>
        <div className="h-3 bg-gray-200 rounded w-3/5"></div>
      </div>
    </div>
    <div className="mt-auto">
      <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
    </div>
  </motion.div>
);

const PricingCard = ({ plan, price, primaryGoal, keyObjective, isRecommended = false, duration, icon, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative flex flex-col p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-700/50 transition-all duration-300 border-4 group bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 h-full"
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg whitespace-nowrap">
            <Award className="w-3 h-3" />
            Most Recommended
          </span>
        </div>
      )}
      <div className="absolute top-4 right-4">
        <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full text-xs font-semibold">
          {plan}
        </span>
      </div>
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full mx-auto mb-4">
          {icon}
        </div>
      )}
      <div className="flex-grow pt-2">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{price}</h3>
        {duration && <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{duration}</p>}
        <div className="mb-4 text-sm space-y-1">
          {primaryGoal && <p className="font-semibold text-indigo-700 dark:text-indigo-300">Primary Goal: {primaryGoal}</p>}
          {keyObjective && <p className="font-semibold text-indigo-700 dark:text-indigo-300">Key Objective: {keyObjective}</p>}
        </div>
      </div>
      <div className="mt-auto">
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 font-semibold rounded-lg shadow-md transition duration-150 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800"
          >
            Enroll Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      plan: 'Starter Kit',
      quote: 'This kit gave me the confidence for my first interview. Landed my dream job at Infosys in just 2 weeks!',
      rating: 5,
    },
    {
      name: 'Rahul Mehta',
      plan: 'Pro Kit',
      quote: 'The Q&A samples and STAR templates were game-changers. Went from nervous to nailing every question.',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      plan: 'Elite Kit',
      quote: 'The cultural awareness module helped me stand out in global interviews. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      plan: 'Final Application Plan',
      quote: 'The mentorship and placement support got me placed at TCS with a great package. Worth every penny!',
      rating: 5,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Learners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md dark:shadow-gray-600/50"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <User className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 p-2 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.plan}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What makes XourceBase programs unique?',
      answer: 'Our programs blend industry-aligned training with personalized mentorship, focusing on real-world skills like mock interviews, resume building, and cultural awareness for IT roles.',
    },
    {
      question: 'How long do the programs take?',
      answer: 'Most kits are self-paced over 14 days, with live sessions in premium plans. The Final Application Plan includes 3 Zoom coaching sessions over 4-6 weeks.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, all plans come with a 7-day money-back guarantee. If not satisfied, contact us for a full refund.',
    },
    {
      question: 'Do you offer placement assistance?',
      answer: 'Yes, the Final Application Plan includes WhatsApp job alerts and referral shortlisting. All plans provide resume and interview prep for self-placement.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! Upgrade anytime within 30 days and pay the difference. Contact support for seamless transition.',
    },
    {
      question: 'What if I have prior experience?',
      answer: 'Our plans are tiered: Starter for beginners, Pro/Elite for intermediates, Final for advanced. Schedule a free consultation to find the best fit.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-600/50 overflow-hidden"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center p-6 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                <MessageCircle className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 text-gray-600 dark:text-gray-300"
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const TechPlansSection = ({ isLoading = false }) => {
  const techPlans = [
    {
      plan: 'LaunchPad',
      price: '₹4,999',
      duration: '2 Weeks',
      primaryGoal: 'Build foundational IT skills and job readiness',
      keyObjective: 'Entry-level preparation for tech careers',
    },
    {
      plan: 'Elite',
      price: '₹8,999',
      duration: '4 Weeks',
      primaryGoal: 'Accelerate career growth through advanced upskilling',
      keyObjective: 'Intermediate level proficiency in DevOps and cloud',
      isRecommended: true,
    },
    {
      plan: 'Elite Pro',
      price: '₹14,999',
      duration: '6 Weeks',
      primaryGoal: 'Develop leadership and transformation skills',
      keyObjective: 'Advanced expertise with mentorship',
    },
  ];

  const numCards = 3;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
        {isLoading
          ? Array.from({ length: numCards }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : techPlans.map((planData, index) => (
              <PricingCard
                key={planData.plan}
                {...planData}
                index={index}
              />
            ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [expandedTech, setExpandedTech] = useState(false);
  const [expandedComm, setExpandedComm] = useState(false);
  const [loadingTech, setLoadingTech] = useState(false);
  const [loadingComm, setLoadingComm] = useState(false);

  const handleToggleTech = () => {
    if (!expandedTech) {
      setLoadingTech(true);
      setTimeout(() => {
        setLoadingTech(false);
        setExpandedTech(true);
      }, 500);
    } else {
      setExpandedTech(false);
    }
  };

  const handleToggleComm = () => {
    if (!expandedComm) {
      setLoadingComm(true);
      setTimeout(() => {
        setLoadingComm(false);
        setExpandedComm(true);
      }, 500);
    } else {
      setExpandedComm(false);
    }
  };

  const commPlans = [
    {
      plan: 'Starter Kit',
      price: '₹99',
      primaryGoal: 'Build trust, generate leads, warm up cold traffic',
      keyObjective: 'Basic interview preparation foundation',
    },
    {
      plan: 'Pro Kit',
      price: '₹499',
      primaryGoal: 'Help candidates feel confident and interview-ready',
      keyObjective: 'Advanced communication skills development',
    },
    {
      plan: 'Elite Kit',
      price: '₹1,499',
      primaryGoal: 'Maximize interview success and build premium brand value',
      keyObjective: 'Complete professional training experience',
      isRecommended: true,
    },
    {
      plan: 'Final Application Plan',
      price: '₹5,999',
      primaryGoal: 'Ultimate career transformation with placement support',
      keyObjective: 'Comprehensive career launch with mentorship',
    },
  ];

  const numCommCards = 4;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Plans & Pricing on XourceBase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored for IT aspirants to excel in interviews with confidence.
          </p>
        </motion.div>

        {/* Tech Career Accelerator Accordion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={handleToggleTech}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💻</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tech Career Accelerator</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">From learning to leadership — your IT career starts here.</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedTech ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </div>
          <AnimatePresence>
            {(loadingTech || expandedTech) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <TechPlansSection isLoading={loadingTech} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Communication & Support Excellence Accordion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={handleToggleComm}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎙️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Communication & Support Excellence</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">From communication to confidence — build your professional voice.</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedComm ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </div>
          <AnimatePresence>
            {(loadingComm || expandedComm) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6">
                  {/* Plans Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                    {loadingComm
                      ? Array.from({ length: numCommCards }, (_, index) => (
                          <SkeletonCard key={index} />
                        ))
                      : commPlans.map((planData, index) => (
                          <PricingCard
                            key={planData.plan}
                            {...planData}
                            index={index}
                          />
                        ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />
      </div>
    </section>
  );
};

export default Pricing;