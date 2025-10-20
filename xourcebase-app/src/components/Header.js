import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useDragControls } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import XourceBaseLogo from '../assets/xourcebase-logo.png'; // Adjust path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Plans & Pricing', path: '/plans-pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const isActive = (path) => location.pathname === path;

  // Swipe gesture setup
  const x = useMotionValue(0);
  const controls = useDragControls();
  const opacity = useTransform(x, [0, 100], [1, 0]);

  const handleSwipeEnd = (e, info) => {
    if (info.offset.x < -50) { // Swipe left to close
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-indigo-100/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              src={XourceBaseLogo}
              alt="XourceBase Logo"
              className="w-24 h-auto sm:w-32 group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  relative text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 pb-1
                  ${isActive(item.path) ? 'text-indigo-600 dark:text-indigo-400' : ''}
                `}
              >
                {item.name}
                <span
                  className={`
                    absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300
                    ${isActive(item.path) ? 'w-full' : 'group-hover:w-full'}
                  `}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="hidden md:block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              dragControls={controls}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleSwipeEnd}
              style={{ x, opacity }}
              className="md:hidden fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 z-50 shadow-xl"
            >
              <div className="flex justify-end items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <nav className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200
                      ${isActive(item.path) 
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <span>Toggle Theme</span>
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;