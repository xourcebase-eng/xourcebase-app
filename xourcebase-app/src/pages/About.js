import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added import
import { Users, Heart, Lightbulb, Award, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, title: 'Empathy First', desc: 'We listen and support every step of your unique journey.' },
    { icon: Lightbulb, title: 'Innovation Driven', desc: 'Fresh ideas meet practical skills for real impact.' },
    { icon: Users, title: 'Community Powered', desc: 'Grow with peers and mentors who become lifelong allies.' },
    { icon: Award, title: 'Results Oriented', desc: 'Measurable growth, from interviews to dream jobs.' },
  ];

  const teamMembers = [
    { name: 'Abhijeet Kumar', role: 'Founder & CEO', avatar: 'https://via.placeholder.com/80?text=AK' },
    { name: 'Priya Singh', role: 'Lead Mentor', avatar: 'https://via.placeholder.com/80?text=PS' },
    { name: 'Rahul Mehta', role: 'Tech Lead', avatar: 'https://via.placeholder.com/80?text=RM' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About XourceBase 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're passionate about turning dreams into careers. A team of dedicated mentors and innovators helping you navigate from potential to professional success.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To transform learning into an empowering journey that builds confidence, competence, and career success for every individual.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Award className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To become the most trusted platform for job readiness and professional growth, connecting talent with opportunity through innovation, skill, and mentorship.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -2 }}
              >
                <value.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-200 dark:border-indigo-800"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to unlock your potential with XourceBase?
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl hover:from-indigo-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Programs
            <BookOpen className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;