import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WorkshopLandingPage = () => {
  // Timer Logic (15 minutes countdown)
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="font-sans text-slate-800 bg-gray-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text & CTA */}
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Power Up Your Career <br className="hidden md:block" />
              <span className="text-yellow-400">In Just 2 Hours</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-200 font-semibold">
              Discover the Proven Scientific Process to 2-3X Your Salary
            </h2>
            
            <p className="text-lg text-gray-300">
              While finally achieving the work-life balance you've always dreamed of.
            </p>

            {/* Coach Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-xl p-4 gap-4 border border-white/20">
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-400">Your Expert Coach</p>
                <p className="font-bold text-yellow-400 text-xl">Abhijeet Vishwakarma</p>
                <p className="text-sm text-gray-200">India's Leading Career Coach</p>
              </div>
            </div>

            {/* Ratings */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex text-yellow-400 text-2xl">★★★★★</div>
              <p className="text-gray-300">
                <span className="font-bold">4.95/5</span> - India's Highest Rated Career Program
              </p>
            </div>

            {/* Urgency & CTA */}
            <div className="space-y-4">
                <Link to="/workshop-checkout">
                  <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-2xl py-5 px-12 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-yellow-500/50">
                    JOIN WORKSHOP NOW @ JUST ₹99
                  </button>
                </Link>
              <p className="text-red-400 text-lg font-bold animate-pulse">
                Limited Seats • Enrollment Closes Today • Workshop: 20th Dec
              </p>
            </div>
          </div>

          {/* Hero Coach Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-2xl blur-3xl opacity-30"></div>
            <img 
              src="https://as1.ftcdn.net/jpg/05/21/94/72/1000_F_521947221_VO1npq5R2Ia0dZeZmtex8gLGcdaVyDXD.jpg" 
              alt="Abhijeet Vishwakarma - Career Coach" 
              className="relative rounded-2xl shadow-2xl border-8 border-slate-700 object-cover w-full"
            />
          </div>
        </div>
      </header>

      {/* --- BENEFITS GRID WITH IMAGES --- */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "2-3X Salary Growth", desc: "Unlock proven strategies to multiply your income fast.", img: "https://images.peopleimages.com/picture/202409/3116503-black-woman-excited-and-laptop-for-win-in-office-celebrate-and-read-notification-of-promotion-female-person-bonus-and-employee-for-online-achievement-salary-increase-and-professional-for-goals-fit_400_400.jpg" },
            { title: "Land Your Dream Job", desc: "Get hired by top companies that value you.", img: "https://algocademy.com/blog/wp-content/uploads/2024/10/compressed_image-71-1024x585.jpg" },
            { title: "Perfect Work-Life Balance", desc: "Earn more while enjoying life fully.", img: "https://careergappers.com/wp-content/uploads/2024/09/Sara-Young-long-bay-family-photo.jpg" },
            { title: "Recognition & Respect", desc: "Be valued for your true contributions.", img: "https://static.vecteezy.com/system/resources/previews/049/707/905/non_2x/businessman-climbing-a-ladder-surrounded-by-bar-charts-and-icons-symbolizing-success-growth-and-career-advancement-vector.jpg" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border-t-4 border-yellow-500">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIFE TRANSFORMATION SECTION --- */}
      <section className="bg-zinc-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What Will Change After This Workshop?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "Master skills to secure high-paying roles or massive salary hikes.",
              "End compromises — achieve true work-life balance.",
              "Identify companies with exceptional culture and stability.",
              "Learn to evaluate recession-proof employers using financial insights.",
              "Negotiate like a pro and accelerate your career trajectory.",
              "Build confidence to switch domains or climb to leadership."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
                <span className="text-3xl text-green-400">✓</span>
                <p className="text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURRICULUM --- */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What You'll Master in This 2-Hour Workshop</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Finding the perfect company & role alignment",
            "Proven techniques to attract offers from dream companies",
            "Standing out in today's ultra-competitive job market",
            "Science-backed salary negotiation tactics",
            "Balancing high income with personal fulfillment",
            "Long-term strategies for sustained career acceleration"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <span className="text-3xl">🎯</span>
              <span className="text-lg font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- TARGET AUDIENCE --- */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Is This Workshop For You?</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {["Salaried Professionals", "Feeling Stuck in Career", "Seeking Better Balance", "Domain/Role Switchers", "Ready for Next-Level Growth"].map((tag) => (
              <span key={tag} className="bg-white px-8 py-4 rounded-full shadow-lg text-lg font-bold border border-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-red-600 font-semibold">
            Not for business owners or students seeking shortcuts.
          </p>
        </div>
      </section>

      {/* --- BONUSES --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Exclusive Bonuses Worth ₹6,400</h2>
        <p className="text-center text-gray-600 mb-12">(Yours FREE when you join today)</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h4 className="text-2xl font-bold mb-4 text-blue-600">Registration Bonuses</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> How to Choose the Right Career Path</li>
              <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Landing International Job Opportunities</li>
              <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Navigating Workplace Politics</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h4 className="text-2xl font-bold mb-4 text-green-600">Participation Bonuses</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Ultimate Salary Negotiation Guide</li>
              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Mastering Interviews at Top Companies</li>
              <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Path to Senior Leadership Roles</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
            <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">LIMITED</span>
            <h4 className="text-2xl font-bold mb-4 text-orange-700">Gen AI Job Hunt Guide</h4>
            <p className="text-gray-700">Automate your job search with cutting-edge AI tools.</p>
            <p className="text-red-600 font-bold mt-4 text-sm">Only for attendees who stay till the end!</p>
          </div>
        </div>
      </section>

      {/* --- COACH BIO --- */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://as1.ftcdn.net/jpg/05/21/94/72/1000_F_521947221_VO1npq5R2Ia0dZeZmtex8gLGcdaVyDXD.jpg" 
            alt="Abhijeet Vishwakarma" 
            className="rounded-full shadow-2xl border-8 border-gray-100 w-80 h-80 object-cover mx-auto"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Meet Your Coach: Abhijeet Vishwakarma</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Known as <strong>"The Career Guy"</strong>, Sawan is India’s most trusted career coach. With top-tier education from the US & UK, he climbed from entry-level to CEO. After a major setback, he engineered a breakthrough framework that landed him <strong>4 job offers in just 30 days</strong> with massive salary jumps.
            </p>
            <p className="text-lg text-gray-600 font-semibold">
              Now, he’s helped over 150,000 professionals transform their careers.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {["CEO", "18+ Years", "250+ Seminars", "1.5L+ Trained"].map((stat) => (
                <div key={stat} className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-xl text-center shadow-md">
                  <div className="text-2xl font-bold text-slate-800">{stat.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600">{stat.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GUARANTEE --- */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-500 rounded-3xl p-12 text-center shadow-2xl">
          <img src="https://www.shutterstock.com/image-vector/money-back-guarantee-ribbon-banner-260nw-1782590579.jpg" alt="Money Back Guarantee" className="w-32 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-green-700 mb-6">100% Risk-Free: Money Back Guarantee</h3>
          <p className="text-xl text-green-800">
            If this workshop doesn't deliver massive value in just 2 hours, email us for a <strong>full ₹99 refund</strong>. No questions asked.
          </p>
        </div>
      </section>

      {/* --- STICKY CTA FOOTER --- */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">Limited Time Offer</p>
            <p className="text-3xl font-bold">
              <span className="line-through text-white/70 mr-3">₹999</span>
              <span>₹99 ONLY</span>
            </p>
            <p className="text-lg font-mono">
              Offer Ends In: <span className="text-yellow-300 font-bold text-2xl ml-2">{formatTime(timeLeft)}</span>
            </p>
          </div>
          <Link to="/workshop-checkout">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-extrabold text-xl py-4 px-12 rounded-xl shadow-xl transform hover:scale-105 transition">
              SECURE YOUR SPOT NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopLandingPage;