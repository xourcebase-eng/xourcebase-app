import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Star, Quote, Clock, Mail, Phone, User, Calendar, MessageCircle } from 'lucide-react';

const PricingCard = ({ plan, price, primaryGoal, keyObjective, interviewKit, qaSamples, templatesGuides, groupAccess, mockInterviews, personalCoaching, placementSupport, additionalBenefits, valueProp, whyNeed, isRecommended = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-700/50 transition-all duration-300 border-4 group overflow-hidden bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
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
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{price}</h3>
      <div className="mb-4 text-sm space-y-1">
        <p className="font-semibold text-indigo-700 dark:text-indigo-300">Primary Goal: {primaryGoal}</p>
        <p className="font-semibold text-indigo-700 dark:text-indigo-300">Key Objective: {keyObjective}</p>
      </div>
      <ul className="space-y-2 mb-4 text-sm">
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Interview Kit: {interviewKit}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Q&A Samples: {qaSamples}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Templates & Guides: {templatesGuides}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Group Access: {groupAccess}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Mock Interviews: {mockInterviews}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Personal Coaching: {personalCoaching}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Placement Support: {placementSupport}</li>
        <li className="flex items-start"><Check className="mr-2 mt-0.5 w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />Additional Benefits: {additionalBenefits}</li>
      </ul>
      <div className="mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
        <p className="text-xs italic text-gray-600 dark:text-gray-400 mb-2">Value Proposition: {valueProp}</p>
        <p className="text-xs text-gray-700 dark:text-gray-300">{whyNeed}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 font-semibold rounded-lg shadow-md transition duration-150 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800"
      >
        Get Started
      </motion.button>
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

const FeatureMatrix = () => {
  const features = [
    { name: 'Starter Kit', price: '₹99', primaryGoal: 'Build trust, generate leads, warm up cold traffic', keyObjective: 'Basic interview preparation foundation', interviewKit: '14-Day basic version', qaSamples: '3 basic samples with voice tips', templatesGuides: 'Basic voice tone tips' },
    { name: 'Pro Kit', price: '₹499', primaryGoal: 'Help candidates feel confident and interview-ready', keyObjective: 'Advanced communication skills development', interviewKit: 'Full 14-Day with detailed explanations', qaSamples: '20+ samples (voice + non-voice + IT support)', templatesGuides: 'Accent practice guide + STAR story templates' },
    { name: 'Elite Kit', price: '₹1,499', primaryGoal: 'Maximize interview success and build premium brand value', keyObjective: 'Complete professional training experience', interviewKit: 'Everything in Pro Kit', qaSamples: 'Same as Pro Kit', templatesGuides: 'Resume templates + self-intro builder + cultural awareness module' },
    { name: 'Final Application Plan', price: '₹5,999', primaryGoal: 'Ultimate career transformation with placement support', keyObjective: 'Comprehensive career launch with mentorship', interviewKit: 'Advanced 14-Day Elite Edition', qaSamples: '50+ comprehensive samples', templatesGuides: 'Done-for-you resume + custom scripts + advanced accent training' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Complete Comparison Matrix</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Plan</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Primary Goal</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Key Objective</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Interview Kit</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Q&A Samples</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Templates & Guides</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : ''}>
              <td className="px-4 py-3 text-sm font-medium">{feature.name}</td>
              <td className="px-4 py-3 text-sm">{feature.price}</td>
              <td className="px-4 py-3 text-sm">{feature.primaryGoal}</td>
              <td className="px-4 py-3 text-sm">{feature.keyObjective}</td>
              <td className="px-4 py-3 text-sm">{feature.interviewKit}</td>
              <td className="px-4 py-3 text-sm">{feature.qaSamples}</td>
              <td className="px-4 py-3 text-sm">{feature.templatesGuides}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const SupportMatrix = () => {
  const supports = [
    { name: 'Starter Kit', groupAccess: 'WhatsApp group access', mockInterviews: 'None', personalCoaching: 'None', placementSupport: 'None', additionalBenefits: 'Basic community support' },
    { name: 'Pro Kit', groupAccess: 'WhatsApp group access', mockInterviews: '1 mock interview script', personalCoaching: 'None', placementSupport: 'None', additionalBenefits: 'Advanced preparation materials' },
    { name: 'Elite Kit', groupAccess: 'WhatsApp voice feedback (optional add-on)', mockInterviews: '3 mock interview scripts + feedback checklist', personalCoaching: 'None', placementSupport: 'None', additionalBenefits: 'Premium content access' },
    { name: 'Final Application Plan', groupAccess: 'Exclusive alumni community', mockInterviews: 'Live mock with detailed scorecard + improvement plan', personalCoaching: '3 one-on-one Zoom sessions with expert trainers', placementSupport: 'WhatsApp alerts + referral shortlisting', additionalBenefits: 'Lifetime access to resource vault' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Support & Interaction Features</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Plan</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Group Access</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Mock Interviews</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Personal Coaching</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Placement Support</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Additional Benefits</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {supports.map((support, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : ''}>
              <td className="px-4 py-3 text-sm font-medium">{support.name}</td>
              <td className="px-4 py-3 text-sm">{support.groupAccess}</td>
              <td className="px-4 py-3 text-sm">{support.mockInterviews}</td>
              <td className="px-4 py-3 text-sm">{support.personalCoaching}</td>
              <td className="px-4 py-3 text-sm">{support.placementSupport}</td>
              <td className="px-4 py-3 text-sm">{support.additionalBenefits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const ValuePropositionMatrix = () => {
  const values = [
    { name: 'Starter Kit', valueProp: 'Low-risk entry point to test effectiveness', whyNeed: 'Your first job shapes your entire career trajectory. For less than a dinner cost, you\'re not buying a course - you\'re buying confidence that your first impression won\'t be your last chance.' },
    { name: 'Pro Kit', valueProp: 'Comprehensive preparation without premium cost', whyNeed: 'You\'re tired of being nervous in interviews. Every day you delay is another day someone else gets the job you deserve. Stop losing opportunities to candidates who simply prepared better.' },
    { name: 'Elite Kit', valueProp: 'Professional-grade training with premium features', whyNeed: 'You\'ve invested years in your education. Don\'t let poor interview skills waste that investment. Your parents\' sacrifices deserve more than rejection emails.' },
    { name: 'Final Application Plan', valueProp: 'Complete career transformation with guaranteed support', whyNeed: 'This isn\'t just about getting any job - it\'s about launching the career that changes your family\'s future. While others keep applying and hoping, you\'ll have mentors and guaranteed support until you succeed.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Value Proposition</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Plan</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Value Proposition</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Why You Need This Course</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {values.map((value, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : ''}>
              <td className="px-4 py-3 text-sm font-medium">{value.name}</td>
              <td className="px-4 py-3 text-sm">{value.valueProp}</td>
              <td className="px-4 py-3 text-sm">{value.whyNeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const Pricing = () => {
  const plans = [
    {
      plan: 'Starter Kit',
      price: '₹99',
      primaryGoal: 'Build trust, generate leads, warm up cold traffic',
      keyObjective: 'Basic interview preparation foundation',
      interviewKit: '14-Day basic version',
      qaSamples: '3 basic samples with voice tips',
      templatesGuides: 'Basic voice tone tips',
      groupAccess: 'WhatsApp group access',
      mockInterviews: 'None',
      personalCoaching: 'None',
      placementSupport: 'None',
      additionalBenefits: 'Basic community support',
      valueProp: 'Low-risk entry point to test effectiveness',
      whyNeed: 'Your first job shapes your entire career trajectory. For less than a dinner cost, you\'re not buying a course - you\'re buying confidence that your first impression won\'t be your last chance.',
    },
    {
      plan: 'Pro Kit',
      price: '₹499',
      primaryGoal: 'Help candidates feel confident and interview-ready',
      keyObjective: 'Advanced communication skills development',
      interviewKit: 'Full 14-Day with detailed explanations',
      qaSamples: '20+ samples (voice + non-voice + IT support)',
      templatesGuides: 'Accent practice guide + STAR story templates',
      groupAccess: 'WhatsApp group access',
      mockInterviews: '1 mock interview script',
      personalCoaching: 'None',
      placementSupport: 'None',
      additionalBenefits: 'Advanced preparation materials',
      valueProp: 'Comprehensive preparation without premium cost',
      whyNeed: 'You\'re tired of being nervous in interviews. Every day you delay is another day someone else gets the job you deserve. Stop losing opportunities to candidates who simply prepared better.',
    },
    {
      plan: 'Elite Kit',
      price: '₹1,499',
      primaryGoal: 'Maximize interview success and build premium brand value',
      keyObjective: 'Complete professional training experience',
      interviewKit: 'Everything in Pro Kit',
      qaSamples: 'Same as Pro Kit',
      templatesGuides: 'Resume templates + self-intro builder + cultural awareness module',
      groupAccess: 'WhatsApp voice feedback (optional add-on)',
      mockInterviews: '3 mock interview scripts + feedback checklist',
      personalCoaching: 'None',
      placementSupport: 'None',
      additionalBenefits: 'Premium content access',
      valueProp: 'Professional-grade training with premium features',
      whyNeed: 'You\'ve invested years in your education. Don\'t let poor interview skills waste that investment. Your parents\' sacrifices deserve more than rejection emails.',
      isRecommended: true,
    },
    {
      plan: 'Final Application Plan',
      price: '₹5,999',
      primaryGoal: 'Ultimate career transformation with placement support',
      keyObjective: 'Comprehensive career launch with mentorship',
      interviewKit: 'Advanced 14-Day Elite Edition',
      qaSamples: '50+ comprehensive samples',
      templatesGuides: 'Done-for-you resume + custom scripts + advanced accent training',
      groupAccess: 'Exclusive alumni community',
      mockInterviews: 'Live mock with detailed scorecard + improvement plan',
      personalCoaching: '3 one-on-one Zoom sessions with expert trainers',
      placementSupport: 'WhatsApp alerts + referral shortlisting',
      additionalBenefits: 'Lifetime access to resource vault',
      valueProp: 'Complete career transformation with guaranteed support',
      whyNeed: 'This isn\'t just about getting any job - it\'s about launching the career that changes your family\'s future. While others keep applying and hoping, you\'ll have mentors and guaranteed support until you succeed.',
    },
  ];

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
            XourceBase Voice & Non-Voice IT Interview Programs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored for IT aspirants to excel in interviews with confidence.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((planData, index) => (
            <PricingCard
              key={planData.plan}
              {...planData}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Feature Matrices */}
        <FeatureMatrix />
        <SupportMatrix />
        <ValuePropositionMatrix />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />
      </div>
    </section>
  );
};

export default Pricing;