import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cookie, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">At XourceBase, your privacy is our priority. We are committed to protecting your personal information and ensuring transparency in how we handle your data.</p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <motion.section variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <Shield className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>We collect information to provide and improve our services. This includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details when you enroll in programs or contact us.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our site, such as pages visited and time spent, to enhance user experience.</li>
                  <li><strong>Cookies and Tracking:</strong> Small data files to remember preferences and analyze site performance (see Cookies Policy below).</li>
                </ul>
                <p>We only collect what is necessary and do not sell your data to third parties.</p>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <UserCheck className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Information</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Your information helps us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process enrollments and provide personalized program recommendations.</li>
                  <li>Send updates, newsletters, and promotional content (you can opt out anytime).</li>
                  <li>Improve our platform through analytics and feedback.</li>
                  <li>Comply with legal obligations, such as fraud prevention.</li>
                </ul>
                <p>We use secure processors for payments and do not store sensitive financial details.</p>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <Lock className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Protecting your data is essential. We implement:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Industry-standard encryption (SSL/TLS) for data in transit and at rest.</li>
                  <li>Regular security audits and access controls to prevent unauthorized access.</li>
                  <li>Compliance with GDPR and Indian data protection laws.</li>
                </ul>
                <p>In the unlikely event of a breach, we will notify affected users promptly.</p>
              </div>
            </motion.section>

            {/* Cookies Policy */}
            <motion.section variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <Cookie className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookies Policy</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>We use cookies to enhance your experience:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for site functionality (e.g., session management).</li>
                  <li><strong>Analytics Cookies:</strong> To understand usage patterns (e.g., Google Analytics, anonymized).</li>
                  <li><strong>Marketing Cookies:</strong> For personalized ads (you can manage via browser settings).</li>
                </ul>
                <p>You can disable cookies in your browser, but this may affect site features. Learn more in our Cookie Settings (coming soon).</p>
              </div>
            </motion.section>

            {/* User Rights and Choices */}
            <motion.section variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <UserCheck className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Rights and Choices</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>You have control over your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access & Update:</strong> View or edit your information anytime via your account dashboard.</li>
                  <li><strong>Deletion:</strong> Request data deletion (subject to legal retention).</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from emails or cookies.</li>
                  <li><strong>Complaints:</strong> Contact us or relevant authorities if concerned.</li>
                </ul>
                <p>We respond to requests within 30 days.</p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Questions about this policy? Reach out to us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:contact@xourcebase.com" className="text-red-600 dark:text-red-400 hover:underline">contact@xourcebase.com</a></li>
                </ul>
                <p>We'll respond within 48 hours.</p>
              </div>
            </motion.section>
          </div>

          {/* Last Updated */}
          <motion.div variants={fadeInUp} className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: October 20, 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;