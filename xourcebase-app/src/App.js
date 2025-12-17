import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // New import
import ScrollButton from './components/ScrollButton';
import Home from './pages/Home';
import About from './pages/About';
import PlansPricing from './pages/PlansPricing';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import HelpSupport from './pages/HelpSupport';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import TermsAndConditions from './pages/TermsAndConditions';
import TeachOnXourceBase from './pages/TeachOnXourceBase';
import TechCareerAccelerator from './pages/TechCareerAccelerator';
import CommunicationSupportExcellence from './pages/CommunicationSupportExcellence';
import Programs from './pages/Programs';
import Workshop from './pages/WorkshopPage';
import WorkshopCheckout from './pages/WorkshopCheckoutPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header />
        <ScrollToTop />
        <main className="container mx-auto p-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans-pricing" element={<PlansPricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<HelpSupport />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/teach-on-xourcebase" element={<TeachOnXourceBase />} />
            <Route path="/tech-career-accelerator" element={<TechCareerAccelerator />} />
            <Route path="/communication-support-excellence" element={<CommunicationSupportExcellence />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/workshop-checkout" element={<WorkshopCheckout />} />
          </Routes>
        </main>
        <Footer />
        <ScrollButton /> {/* Add here */}
      </div>
    </Router>
  );
};

export default App;