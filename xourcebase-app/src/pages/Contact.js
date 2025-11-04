import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // For success/error messages

  // EmailJS Configuration - Replace 'YOUR_USER_ID' with your actual User ID from EmailJS dashboard
  // Find it here: EmailJS Dashboard > Account > Integration > Email Services > Public Key
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID; // e.g., 'user_abc123def456'
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID; // e.g., 'service_esyebgb'
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // e.g., 'template_jcb2gaa'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    // Ensure User ID is set (add a check or alert in production)
    if (EMAILJS_USER_ID === 'YOUR_USER_ID') {
      setSubmitStatus('Error: Please set your EmailJS User ID in the code.');
      setIsLoading(false);
      return;
    }

    try {
      // Send email via EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID);
      setSubmitStatus('success'); // Success state
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error'); // Error state
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-4 flex justify-center items-center gap-3">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions about our programs or partnership opportunities, we’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 animate-fade-in">
            {/* Success/Error Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl" role="alert">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl" role="alert">
                Failed to send message. Please try again or contact us directly.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm dark:shadow-gray-700/50 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm dark:shadow-gray-700/50 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm dark:shadow-gray-700/50 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                placeholder="What can we help you with?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-3 sm:px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm dark:shadow-gray-700/50 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-700 dark:to-teal-700 rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-teal-700 dark:hover:from-indigo-800 dark:hover:to-teal-800 transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>

          <div className="space-y-6 sm:space-y-8 animate-fade-in delay-200">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg dark:shadow-gray-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
                Reach Out Directly
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
                  <a href="mailto:contact@xourcebase.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    contact@xourcebase.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
                  <a href="tel:+91 8767765307" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    +91 8767765307
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg dark:shadow-gray-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-3 sm:space-x-4">
                {[
                  { icon: Linkedin, url: 'https://www.linkedin.com/company/xourcebase', color: 'text-indigo-600 dark:text-indigo-400' },
                  { icon: Twitter, url: 'https://x.com/XourceBase', color: 'text-sky-500 dark:text-sky-400' },
                  { icon: Instagram, url: 'https://www.instagram.com/xourcebase/', color: 'text-pink-500 dark:text-pink-400' },
                  { icon: Youtube, url: 'https://www.youtube.com/@XourceBase', color: 'text-red-600 dark:text-red-400' },
                  { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61582394452096', color: 'text-blue-600 dark:text-blue-400' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition duration-200 ${social.color} hover:scale-110`}
                    aria-label={`Follow on ${social.icon.name}`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default Contact;