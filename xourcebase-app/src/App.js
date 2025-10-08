import React, { useState } from 'react';
import { ChevronRight, Zap, Briefcase, Users, CheckCircle, Clock, BookOpen, Star } from 'lucide-react';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // --- Components ---

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wider">
          XourceBase
        </h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Mission', 'Why Us', 'Plan', 'Success'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActiveSection(item.toLowerCase().replace(' ', '-'))}
              className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out font-medium py-1 border-b-2 border-transparent hover:border-indigo-600"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hidden sm:block">
          Enroll Now
        </button>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );

  const HeroSection = () => (
    <section id="home" className="pt-24 pb-16 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center px-4 py-1.5 text-sm font-bold text-indigo-800 bg-indigo-100 rounded-full mb-4 shadow-md">
          <Zap className="w-4 h-4 mr-2" />
          Your 14-Day Career Accelerator
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          <span className="block xl:inline">Unlock Your</span>
          <span className="block text-indigo-600 xl:inline"> Interview Potential.</span>
        </h2>
        <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-500 mb-10">
          XourceBase trains students, professionals, and undergraduates to build unshakeable confidence, master interviews, and secure their dream job in just two weeks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">
            View 14-Day Plan <ChevronRight className="w-5 h-5 ml-2" />
          </button>
          <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:text-indigo-600 font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 ease-in-out hover:border-indigo-500">
            Book a Demo Call
          </button>
        </div>
      </div>
    </section>
  );

  const MissionSection = () => (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-16">
          Our Three Pillars of Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <FeatureCard
            icon={Users}
            title="Interview Confidence"
            description="We eliminate self-doubt through rigorous mock interviews and personalized feedback sessions, ensuring you walk in prepared and calm."
          />
          <FeatureCard
            icon={Briefcase}
            title="Job Cracking Mastery"
            description="Our curriculum is designed by industry veterans, focusing on technical and behavioral questions that truly make a difference in hiring decisions."
          />
          <FeatureCard
            icon={CheckCircle}
            title="Guaranteed Guidance"
            description="We don't just train; we actively guide you through the application process and provide continuous support until you secure an offer."
          />
        </div>
      </div>
    </section>
  );

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="p-8 border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-indigo-600 p-2 bg-indigo-50 rounded-full" />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  );
  
  // --- NEW SECTION: Why Choose Us ---
  const WhyChooseUsSection = () => (
    <section id="why-us" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            The XourceBase Advantage
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
            Why 98% of our students succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We bridge the gap between academic knowledge and corporate expectations with a focus on real-world hiring processes.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative p-4">
              <dt className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white shadow-lg">
                  <Star className="h-6 w-6" />
                </div>
                <p className="ml-4 text-lg leading-6 font-medium text-gray-900">Industry Expert Mentors</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Learn directly from active hiring managers and senior professionals who know exactly what current companies are looking for—no outdated textbooks.
              </dd>
            </div>

            <div className="relative p-4">
              <dt className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white shadow-lg">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="ml-4 text-lg leading-6 font-medium text-gray-900">Hyper-Personalized Roadmaps</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Our 14-day plan is customized based on your background and target roles, ensuring maximum impact in minimum time. We don't use generic scripts.
              </dd>
            </div>

            <div className="relative p-4">
              <dt className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-4 text-lg leading-6 font-medium text-gray-900">Lifetime Job Guidance</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Our commitment extends beyond training. We offer continuous job application reviews, referral support, and negotiation coaching post-program.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );

  const PlanSection = () => (
    <section id="plan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            The XourceBase 14-Day Blueprint
          </h3>
          <p className="text-xl text-gray-600">
            A comprehensive, high-intensity program designed to transition you from candidate to employee.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative">
            {/* Timeline Line (Desktop) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-300 hidden md:block"></div>
            {/* Timeline Line (Mobile) */}
            <div className="absolute left-4 h-full w-0.5 bg-indigo-300 md:hidden"></div>

            <TimelineItem
              day="Days 1-4"
              title="Confidence & Communication Fundamentals"
              description="Mastering the art of self-introduction, structuring answers with the STAR method, and overcoming interview anxiety."
              isLeft={true}
            />
            <TimelineItem
              day="Days 5-8"
              title="Technical & Domain Deep Dive"
              description="Targeted practice on core technical concepts, problem-solving, and in-depth discussions tailored to your target role/industry."
              isLeft={false}
            />
            <TimelineItem
              day="Days 9-12"
              title="Mock Interviews & Feedback Loop"
              description="Multiple full-length mock interviews with real industry experts, followed by detailed, actionable feedback reports and refinement sessions."
              isLeft={true}
            />
            <TimelineItem
              day="Days 13-14"
              title="Job Application & Negotiation Strategy"
              description="Finalizing resume/cover letters, understanding offer letters, and strategic guidance on salary negotiation and onboarding preparation."
              isLeft={false}
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="flex items-center mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <Clock className="w-5 h-5 mr-2" />
            Join the Next Batch
          </button>
        </div>
      </div>
    </section>
  );

  const TimelineItem = ({ day, title, description, isLeft }) => (
    // Responsive container for the timeline item
    <div className="flex relative items-start md:items-center">
      
      {/* Circle Icon for Mobile */}
      <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 z-10 md:hidden"></div>

      {/* Content for Mobile: always on the right */}
      <div className="w-full pl-10 md:pl-0 md:w-1/2 md:flex md:justify-end">
        
        {/* Content for Desktop: switch sides */}
        <div className={`w-full ${isLeft ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
          <div className="bg-indigo-50 p-6 rounded-xl shadow-lg border-t-4 border-indigo-600 relative">
            <h4 className="text-sm font-bold text-indigo-600 uppercase mb-1">{day}</h4>
            <h5 className="text-xl font-bold text-gray-900 mb-2">{title}</h5>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Circle Icon for Desktop */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white z-10 hidden md:block`}></div>
    </div>
  );

  const TestimonialsSection = () => (
    <section id="success" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Success Stories That Drive Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The 14-day plan completely transformed my communication style. I finally cracked the FAANG interview and doubled my expected salary!"
            name="Aarav Sharma"
            title="Software Engineer, Global Tech Firm"
          />
          <TestimonialCard
            quote="I moved from an undergraduate lacking direction to a confident professional with a clear job offer. The personalized guidance was priceless."
            name="Priya Singh"
            title="Marketing Analyst, Top E-commerce"
          />
          <TestimonialCard
            quote="As a seasoned professional looking for a domain switch, XourceBase helped me package my experience perfectly for the new role."
            name="Rajesh Menon"
            title="Product Manager, Fintech"
          />
        </div>
      </div>
    </section>
  );

  const TestimonialCard = ({ quote, name, title }) => (
    <div className="p-8 bg-white rounded-xl border-t-8 border-indigo-500 shadow-xl flex flex-col h-full">
      <p className="text-lg italic text-gray-700 mb-4 flex-grow">"{quote}"</p>
      <div className="text-sm font-bold text-gray-900 mt-auto">{name}</div>
      <div className="text-xs text-indigo-600">{title}</div>
    </div>
  );

  // --- NEW SECTION: Final Call to Action ---
  const CallToActionSection = () => (
    <section className="py-20 bg-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
          Ready to Secure Your Future?
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto">
          Stop worrying about interviews and start preparing for your success. Enrollment for the next batch is now open. Don't miss your chance!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center bg-white text-indigo-700 font-bold py-3 px-8 rounded-full text-lg shadow-2xl transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-[1.02]">
            Enroll Now <ChevronRight className="w-5 h-5 ml-2" />
          </button>
          <button className="flex items-center justify-center border border-white text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-indigo-700">
            Talk to an Advisor
          </button>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-indigo-400">XourceBase</h4>
            <p className="text-gray-400 text-sm">
              Accelerating careers, one confident interview at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 border-b border-indigo-500 pb-1 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#mission" className="hover:text-indigo-400 transition">Our Mission</a></li>
              <li><a href="#plan" className="hover:text-indigo-400 transition">14-Day Plan</a></li>
              <li><a href="#why-us" className="hover:text-indigo-400 transition">Why Choose Us</a></li>
              <li><a href="#success" className="hover:text-indigo-400 transition">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 border-b border-indigo-500 pb-1 inline-block">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 border-b border-indigo-500 pb-1 inline-block">Connect</h4>
            <p className="text-sm text-gray-400">Email: info@xourcebase.com</p>
            <p className="text-sm text-gray-400">Phone: +1 (555) 123-4567</p>
            {/* Social Icons could go here */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} XourceBase. All rights reserved. Built with React and Tailwind CSS.
        </div>
      </div>
    </footer>
  );

  // --- Main Render ---

  return (
    <div className="bg-white font-inter">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <WhyChooseUsSection /> {/* New section added here */}
        <PlanSection />
        <TestimonialsSection />
        <CallToActionSection /> {/* New section added here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
