import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Mic, FileText, Brain, Map, Clock, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const testimonials = [
    {
      name: 'Ritika S.',
      job: 'DevOps Engineer, Infosys',
      quote: 'After completing the 14-day accelerator, I landed a DevOps Engineer role at Infosys!',
      image: 'https://via.placeholder.com/60x60?text=RS', // Replace with real images
      rating: 5,
    },
    {
      name: 'Amit K.',
      job: 'Cloud Architect, AWS',
      quote: 'The mentorship and mock interviews transformed my interview skills—got promoted within months!',
      image: 'https://via.placeholder.com/60x60?text=AK',
      rating: 5,
    },
    {
      name: 'Sneha R.',
      job: 'Full-Stack Developer, TCS',
      quote: 'From zero confidence to acing technical rounds. XourceBase made it possible!',
      image: 'https://via.placeholder.com/60x60?text=SR',
      rating: 5,
    },
    {
      name: 'Raj P.',
      job: 'Site Reliability Engineer, Google',
      quote: 'The resume optimization and behavioral training were key to my success.',
      image: 'https://via.placeholder.com/60x60?text=RP',
      rating: 5,
    },
  ];

  const pillars = [
    { icon: Mic, title: 'Mock Interviews', desc: 'Real-time practice with expert feedback to simulate high-stakes scenarios.' },
    { icon: Brain, title: 'Technical Assessments', desc: 'Hands-on coding challenges and quizzes tailored to top IT companies.' },
    { icon: Users, title: 'Communication Mastery', desc: 'Voice modulation, storytelling, and STAR method for impactful responses.' },
    { icon: FileText, title: 'Resume & Portfolio Review', desc: 'Personalized critiques to make your profile ATS-friendly and compelling.' },
    { icon: Clock, title: 'Confidence Coaching', desc: 'Mindset sessions to overcome anxiety and build lasting interview poise.' },
  ];

  const benefits = [
    { icon: Users, title: 'Real Interview Simulations', desc: 'Live mocks mirroring actual company interviews.' },
    { icon: Brain, title: 'One-on-One Mentorship', desc: 'Dedicated guidance from industry veterans.' },
    { icon: FileText, title: 'Resume & LinkedIn Optimization', desc: 'Craft profiles that get noticed by recruiters.' },
    { icon: Map, title: 'Technical & Behavioral Training', desc: 'Balanced prep for every interview stage.' },
    { icon: Clock, title: 'Cloud & DevOps Career Roadmaps', desc: 'Personalized paths to your target role.' },
    { icon: Star, title: 'Lifetime Community Access', desc: 'Ongoing support from alumni and experts.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Your 14-Day Career Accelerator
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl mb-4">
              Unlock Your Interview Potential.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg mb-8 max-w-3xl mx-auto">
              XourceBase trains students, professionals, and undergraduates to build unshakeable confidence, master interviews, and secure their dream job in just two weeks.
            </motion.p>
            <motion.div
              variants={staggerChildren}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                variants={staggerChildren}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/plans-pricing">View Pricing</Link>
              </motion.button>
              <motion.button
                variants={staggerChildren}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                <Link to="/contact">Book a Demo Call</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why You Need This Course */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Why You Need This Course</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Our Value Propositions</p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl shadow-md dark:shadow-gray-700/50 bg-gray-50 dark:bg-gray-700"
              >
                <benefit.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. The Interview Clearing Kit Essentials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">The Interview Clearing Kit Essentials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Master the 5 Pillars of Interview Success.</p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700/50"
              >
                <pillar.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pillar.desc}</p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-semibold"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Success Stories from XourceBase Learners</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Our students have transformed their careers — you can too.</p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md dark:shadow-gray-600/50 text-center"
              >
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.job}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-8">
              Join thousands of learners mastering interviews, building confidence, and landing jobs with XourceBase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/plans-pricing"
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Plans and Pricing
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;