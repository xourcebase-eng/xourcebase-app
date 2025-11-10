import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Award, Star, Quote, Clock, Mail, Phone, User, Calendar, MessageCircle, Rocket, Zap, Crown, BadgeCheck, ArrowUp } from 'lucide-react';
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

const PricingCard = ({ plan, launchOffer, actualWorth, perfectFor, keyBenefits, price, primaryGoal, keyObjective, interviewKit, qaSamples, templatesGuides, isRecommended = false, icon, index, type = 'tech' }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative flex flex-col p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-700/50 transition-all duration-300 border-2 group bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ${isRecommended ? 'border-purple-500 ring-2 ring-purple-200 dark:ring-purple-800' : 'border-gray-200 dark:border-gray-700'} h-full`}
    >
      {isRecommended && (
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <BadgeCheck className="w-4 h-4" />
          <span>Recommended</span>
        </div>
      )}
      <div className="absolute top-4 left-4">
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
        {type === 'tech' ? (
          <>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Launch Offer</h3>
            <div className="space-y-1 mb-6">
              <p className="text-4xl font-bold text-indigo-600">{launchOffer}</p>
              <p className="text-sm text-gray-500 line-through">Actual Worth: {actualWorth}</p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Perfect For</h4>
              <p className="text-gray-600 dark:text-gray-400">{perfectFor}</p>
            </div>
            <ul className="space-y-2 mb-6 text-left">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                {keyBenefits}
              </li>
            </ul>
          </>
        ) : (
          <>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Launch Offer</h3>
            <div className="space-y-1 mb-6">
              <p className="text-4xl font-bold text-indigo-600">{launchOffer}</p>
              <p className="text-sm text-gray-500 line-through">Actual Worth: {actualWorth}</p>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Primary Goal</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{primaryGoal}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Key Objective</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{keyObjective}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Interview Kit</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{interviewKit}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Q&A Samples</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{qaSamples}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Templates & Guides</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{templatesGuides}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-auto space-y-3">
        <Link to="https://forms.cloud.microsoft/r/qjHECcYaSV" target="_blank" rel="noopener noreferrer">
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

const SpecialOfferSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 text-center mb-16"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white flex items-center justify-center space-x-2">
        <span className="text-2xl">💥</span>
        <span>Special Early-Bird Offer</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        🎁 Get ₹500 OFF on any plan — limited to the first 100 enrollments only!
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 space-x-2"
      >
        <span>Claim Your Discount</span>
        <ArrowUp className="w-4 h-4 rotate-45" />
      </Link>
    </div>
  </motion.section>
);

const ComparisonTable = () => {
  const comparisonData = [
    { feature: 'Career Counselling', starter: '✅', pro: '✅', elite: '✅' },
    { feature: 'Technical Skill Training', starter: '✅', pro: '✅', elite: '✅' },
    { feature: 'Certification Prep', starter: '✅', pro: '✅', elite: '✅' },
    { feature: 'Mock Interviews', starter: '✅', pro: '✅', elite: '✅' },
    { feature: '1-on-1 Mentorship', starter: '❌', pro: '✅', elite: '✅' },
    { feature: 'Placement Assistance', starter: 'Basic', pro: '✅', elite: 'Priority' },
    { feature: 'Leadership Coaching', starter: '❌', pro: '❌', elite: '✅' },
    { feature: 'Lifetime Alumni Access', starter: '❌', pro: '✅', elite: '✅' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Compare Plans
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-4 font-semibold text-gray-700 dark:text-gray-300">Features</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Starter</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Pro</th>
              <th className="p-4 font-semibold text-purple-600 dark:text-purple-400 text-center font-bold">Elite</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <td className="p-4 text-gray-600 dark:text-gray-400 font-medium">{row.feature}</td>
                <td className="p-4 text-center">{row.starter}</td>
                <td className="p-4 text-center">{row.pro}</td>
                <td className="p-4 text-center font-semibold">{row.elite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

const CommSupportTable = () => {
  const supportData = [
    { plan: 'Starter Kit', groupAccess: 'WhatsApp group access', mockInterviews: 'None', personalCoaching: 'None', placementSupport: 'None', additionalBenefits: 'Basic community support' },
    { plan: 'Pro Kit', groupAccess: 'WhatsApp group access', mockInterviews: '1 mock interview script', personalCoaching: 'None', placementSupport: 'None', additionalBenefits: 'Advanced preparation materials' },
    { plan: 'Elite Kit', groupAccess: 'WhatsApp voice feedback (optional add-on)', mockInterviews: '3 mock interview scripts + feedback checklist', personalCoaching: 'None', placementSupport: 'None', additionalBenefits: 'Premium content access' },
    { plan: 'Final Application Plan', groupAccess: 'Exclusive alumni community', mockInterviews: 'Live mock with detailed scorecard + improvement plan', personalCoaching: '3 one-on-one Zoom sessions with expert trainers', placementSupport: 'WhatsApp alerts + referral shortlisting', additionalBenefits: 'Lifetime access to resource vault' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Support & Interaction Features
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-4 font-semibold text-gray-700 dark:text-gray-300">Plan</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Group Access</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Mock Interviews</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Personal Coaching</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Placement Support</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Additional Benefits</th>
            </tr>
          </thead>
          <tbody>
            {supportData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <td className="p-4 text-gray-600 dark:text-gray-400 font-semibold">{row.plan}</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.groupAccess}</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.mockInterviews}</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.personalCoaching}</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.placementSupport}</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.additionalBenefits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

const CommValueTable = () => {
  const valueData = [
    { plan: 'Starter Kit', valueProp: 'Low-risk entry point to test effectiveness', whyNeed: 'Your first job shapes your entire career trajectory. For less than a dinner cost, you\'re not buying a course - you\'re buying confidence that your first impression won\'t be your last chance.' },
    { plan: 'Pro Kit', valueProp: 'Comprehensive preparation without premium cost', whyNeed: 'You\'re tired of being nervous in interviews. Every day you delay is another day someone else gets the job you deserve. Stop losing opportunities to candidates who simply prepared better.' },
    { plan: 'Elite Kit', valueProp: 'Professional-grade training with premium features', whyNeed: 'You\'ve invested years in your education. Don\'t let poor interview skills waste that investment. Your parents\' sacrifices deserve more than rejection emails.' },
    { plan: 'Final Application Plan', valueProp: 'Complete career transformation with guaranteed support', whyNeed: 'This isn\'t just about getting any job - it\'s about launching the career that changes your family\'s future. While others keep applying and hoping, you\'ll have mentors and guaranteed support until you succeed' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Value Proposition
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-4 font-semibold text-gray-700 dark:text-gray-300">Plan</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Value Proposition</th>
              <th className="p-4 font-semibold text-gray-700 dark:text-gray-300 text-center">Why You Need This Course</th>
            </tr>
          </thead>
          <tbody>
            {valueData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <td className="p-4 text-gray-600 dark:text-gray-400 font-semibold">{row.plan}</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400 font-medium">{row.valueProp}</td>
                <td className="p-4 text-left text-gray-600 dark:text-gray-400 italic">{row.whyNeed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
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
      plan: 'Starter Kit',
      launchOffer: '₹999',
      actualWorth: '₹1,999',
      perfectFor: 'Students & Fresh Graduates',
      keyBenefits: 'Build your foundation, ace interviews, and land your first job with confidence.',
      type: 'tech'
    },
    {
      plan: 'Pro Kit',
      launchOffer: '₹1,499',
      actualWorth: '₹3,499',
      perfectFor: 'Early Professionals (1–3 yrs exp)',
      keyBenefits: 'Sharpen your skills, boost performance, and fast-track your career growth.',
      type: 'tech'
    },
    {
      plan: 'Elite Kit',
      launchOffer: '₹1,999',
      actualWorth: '₹4,999',
      perfectFor: 'Mid–Senior Professionals / Career Switchers',
      keyBenefits: 'Master leadership, corporate readiness, and future-ready skills for global roles.',
      isRecommended: true,
      type: 'tech'
    },
  ];

  const numCards = 3;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {isLoading
          ? Array.from({ length: numCards }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : techPlans.map((planData, index) => (
              <PricingCard
                key={planData.plan}
                {...planData}
              />
            ))}
      </div>
      <ComparisonTable />
      <SpecialOfferSection />
    </div>
  );
};

const Pricing = () => {
  const [expandedTech, setExpandedTech] = useState(false);
  const [expandedComm, setExpandedComm] = useState(false);
  const [loadingTech, setLoadingTech] = useState(false);
  const [loadingComm, setLoadingComm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      launchOffer: '₹99',
      actualWorth: '₹499',
      primaryGoal: 'Build trust, generate leads, warm up cold traffic',
      keyObjective: 'Basic interview preparation foundation',
      interviewKit: '14-Day basic version',
      qaSamples: '3 basic samples with voice tips',
      templatesGuides: 'Basic voice tone tips',
      type: 'comm'
    },
    {
      plan: 'Pro Kit',
      launchOffer: '₹499',
      actualWorth: '₹999',
      primaryGoal: 'Help candidates feel confident and interview-ready',
      keyObjective: 'Advanced communication skills development',
      interviewKit: 'Full 14-Day with detailed explanations',
      qaSamples: '20+ samples (voice + non voice + IT support)',
      templatesGuides: 'Accent practice guide + STAR story templates',
      type: 'comm'
    },
    {
      plan: 'Elite Kit',
      launchOffer: '₹1,499',
      actualWorth: '₹2,999',
      primaryGoal: 'Maximize interview success and build premium brand value',
      keyObjective: 'Complete professional training experience',
      interviewKit: 'Everything in Pro Kit',
      qaSamples: 'Same as Pro Kit',
      templatesGuides: 'Resume templates + self-intro builder + cultural awareness module',
      isRecommended: true,
      type: 'comm'
    },
    {
      plan: 'Final Application Plan',
      launchOffer: '₹5,999',
      actualWorth: '₹9,999',
      primaryGoal: 'Ultimate career transformation with placement support',
      keyObjective: 'Comprehensive career launch with mentorship',
      interviewKit: 'Advanced 14-Day Elite Edition',
      qaSamples: '50+ comprehensive samples',
      templatesGuides: 'Done-for-you resume + custom scripts + advanced accent training',
      type: 'comm'
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
            Tailored for aspiring professionals to excel in interviews with confidence.
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
                          />
                        ))}
                  </div>
                  <CommSupportTable />
                  <CommValueTable />
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