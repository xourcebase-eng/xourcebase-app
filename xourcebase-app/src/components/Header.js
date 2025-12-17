import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useDragControls } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import XourceBaseLogo from '../assets/xourcebase-logo.png'; // Adjust path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();
  const programsRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Programs', 
      path: '/programs',
      children: [
        { name: 'Tech Career Accelerator', path: '/tech-career-accelerator' },
        { name: 'Communication & Support Excellence', path: '/communication-support-excellence' }
      ]
    },
    { name: 'Workshops', path: '/workshop' },
    { name: 'Plans & Pricing', path: '/plans-pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Disable background scroll and signal drawer open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden', 'mobile-drawer-open');
    } else {
      document.body.classList.remove('overflow-hidden', 'mobile-drawer-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden', 'mobile-drawer-open');
    };
  }, [isMenuOpen]);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    // Check initial size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const isActive = (item) => {
    if (item.children) {
      return item.path === location.pathname || item.children.some(child => child.path === location.pathname);
    }
    return location.pathname === item.path;
  };

  // Keyboard navigation for desktop dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showProgramsDropdown) return;

      const children = navItems[1].children;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSubmenuIndex((prev) => (prev < children.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSubmenuIndex((prev) => (prev > 0 ? prev - 1 : children.length - 1));
      } else if (e.key === 'Escape') {
        setShowProgramsDropdown(false);
        setActiveSubmenuIndex(-1);
        programsRef.current?.focus();
      } else if (e.key === 'Enter' && activeSubmenuIndex >= 0) {
        e.preventDefault();
        const selectedItem = children[activeSubmenuIndex];
        navigate(selectedItem.path);
        setShowProgramsDropdown(false);
        setActiveSubmenuIndex(-1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showProgramsDropdown, activeSubmenuIndex, navigate]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && 
          programsRef.current && !programsRef.current.contains(e.target)) {
        setShowProgramsDropdown(false);
        setActiveSubmenuIndex(-1);
      }
    };

    if (showProgramsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProgramsDropdown]);

  // Swipe gesture setup
  const x = useMotionValue(0);
  const controls = useDragControls();
  const opacity = useTransform(x, [0, 100], [1, 0]);

  const handleSwipeEnd = (e, info) => {
    if (info.offset.x < -50) { // Swipe left to close
      setIsMenuOpen(false);
    }
  };

  // Mobile keyboard navigation
  const handleMobileKeyDown = (e, itemIndex, childIndex = -1) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-red-100/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              src={XourceBaseLogo}
              alt="XourceBase Logo"
              className="w-24 h-auto sm:w-32 group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                ref={item.name === 'Programs' ? programsRef : null}
                className="relative group"
                onMouseEnter={() => item.children && setShowProgramsDropdown(true)}
                onMouseLeave={() => item.children && setShowProgramsDropdown(false)}
                role={item.children ? "menuitem" : undefined}
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? showProgramsDropdown : undefined}
                tabIndex={item.children ? 0 : -1}
                onKeyDown={(e) => {
                  if (item.children && e.key === 'Enter') {
                    setShowProgramsDropdown(true);
                    setActiveSubmenuIndex(0);
                  }
                }}
              >
                <Link
                  to={item.path}
                  className={`
                    relative text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 pb-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                    ${isActive(item) ? 'text-red-600 dark:text-red-400' : ''}
                  `}
                  aria-current={isActive(item) ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all duration-300
                      ${isActive(item) ? '' : 'group-hover:w-full'}
                    `}
                  />
                </Link>
                {item.children && (
                  <AnimatePresence>
                    {showProgramsDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 shadow-lg rounded-lg py-2 z-50 border border-gray-200/50 dark:border-gray-700/50"
                        role="menu"
                        aria-labelledby="programs-menu"
                        id="programs-dropdown"
                      >
                        {item.children.map((child, childIndex) => (
                          <motion.div
                            key={child.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.15, delay: childIndex * 0.05, ease: "easeOut" }}
                            className={`
                              block px-4 py-2 text-xs font-medium transition-colors duration-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:border-2 focus:border-red-500
                              ${location.pathname === child.path
                                ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/50'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }
                              ${activeSubmenuIndex === childIndex ? 'bg-gray-100 dark:bg-gray-800' : ''}
                            `}
                            role="menuitem"
                            tabIndex={activeSubmenuIndex === childIndex ? 0 : -1}
                            onMouseEnter={() => setActiveSubmenuIndex(childIndex)}
                            onKeyDown={(e) => handleMobileKeyDown(e, index, childIndex)}
                          >
                            <Link
                              to={child.path}
                              className="block w-full h-full"
                              aria-current={location.pathname === child.path ? 'page' : undefined}
                            >
                              {child.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="hidden md:block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              dragControls={controls}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
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
              transition={{ duration: 0.15, ease: "easeInOut" }} // Optimized faster exit for mobile
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, // Increased stiffness for snappier mobile animation
                damping: 35, 
                mass: 0.8, // Reduced mass for quicker response
                ease: "easeOut" 
              }}
              drag="x"
              dragConstraints={{ right: 0 }}
              dragElastic={0.1} // Reduced elasticity for more controlled drag on mobile
              onDragEnd={handleSwipeEnd}
              style={{ x, opacity }}
              className="md:hidden fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 z-50 shadow-xl flex flex-col"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-heading"
            >
              {/* Sticky Header with Logo and Close */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-10">
                <Link to="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={XourceBaseLogo}
                    alt="XourceBase Logo"
                    className="w-20 h-auto group-hover:scale-105 transition-transform duration-200"
                  />
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }} // Slightly reduced scale for mobile
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <nav 
                className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto" 
                role="menu"
                aria-labelledby="mobile-menu-heading"
                id="mobile-menu"
              >
                <h2 id="mobile-menu-heading" className="sr-only">Main navigation</h2>
                {navItems.map((item, index) => (
                  <div key={item.name} role="none">
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        py-3 px-4 text-sm font-medium transition-colors duration-200 block focus:outline-none focus:border-2 focus:border-red-500 focus:border-b-2
                        ${isActive(item) 
                          ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/50' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => handleMobileKeyDown(e, index)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div 
                        className="ml-6 space-y-2 mt-2 border-l-2 border-red-200 dark:border-red-800 pl-4"
                        role="menu"
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`
                              block py-2 px-2 text-xs font-medium transition-colors duration-200 focus:outline-none focus:border-2 focus:border-red-500 focus:border-b-2
                              ${location.pathname === child.path
                                ? 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }
                            `}
                            role="menuitem"
                            tabIndex={0}
                            onKeyDown={(e) => handleMobileKeyDown(e, index, childIndex)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-auto" // Added mt-auto to push to bottom if needed
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
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