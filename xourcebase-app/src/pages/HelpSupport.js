import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added import
import { MessageCircle, Mail, BookOpen, Users, ChevronDown } from 'lucide-react';

const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const supportCards = [
    {
      icon: Mail,
      title: 'Contact Support',
      description: 'Get in touch with our team for personalized assistance.',
      action: 'Contact Us',
      path: '/contact',
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Explore our setup guides and tutorials.',
      action: 'Browse Docs',
      path: '/docs',
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Join discussions and find solutions from peers.',
      action: 'Join Forum',
      path: '/forum',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Visit our homepage, click "Sign Up," and fill in your details. Verify your email to get started. It takes less than 2 minutes!',
    },
    {
      question: 'Where can I find pricing information?',
      answer: 'Check our Pricing page for all plans, including launch offers and features. Use the comparison matrix to choose what fits you best.',
    },
    {
      question: 'How do I contact XourceBase support?',
      answer: 'Email contact@xourcebase.com or use the Contact form. Response time is within 24 hours. For urgent issues, call +91-8767765307.',
    },
    {
      question: 'Can I teach on XourceBase?',
      answer: 'Yes! Apply via our Teach page. We seek experienced mentors in IT, career coaching, and more. Review process takes 1-2 weeks.',
    },
    {
      question: 'Do you offer enterprise solutions?',
      answer: 'Absolutely. Contact us for customized plans for teams or organizations, including bulk licensing and dedicated support.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16 px-4"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Help & Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're here to help! Browse FAQs or reach out for assistance.
          </p>
        </motion.div>

        {/* Support Options */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                whileHover={{ y: -4 }}
              >
                <card.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {card.description}
                </p>
                <Link
                  to={card.path}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"
                >
                  {card.action} →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                aria-label={`Toggle ${faq.question}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(openIndex === index ? null : index);
                  }
                }}
              >
                <div className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-6 pb-6"
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Still Need Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl hover:from-indigo-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HelpSupport;