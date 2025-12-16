import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/about' },
    { name: 'Réalisations', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6" role="navigation" aria-label="Navigation principale">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Retour à l'accueil">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            src="https://oxalis-proprete.fr/wp-content/uploads/2022/03/logo_clipdrop-background-removal.png"
            alt="OXALIS PROPRETE"
            className="h-12 md:h-14 object-contain"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center space-x-10" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              role="menuitem"
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={`relative font-medium text-[17px] tracking-tight transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : isScrolled 
                    ? 'text-dark-900 hover:text-primary-600' 
                    : 'text-dark-700 hover:text-primary-600'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button - Accent Green (always visible) */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="tel:+33478542869"
            className="flex items-center space-x-2 px-5 py-2.5 text-dark-700 hover:text-primary-600 transition-colors font-medium"
            aria-label="Appeler au 04 78 54 28 69"
          >
            <FiPhone className="w-4 h-4" />
            <span className="text-[15px]">04 78 54 28 69</span>
          </a>
          
          <Link 
            to="/quote" 
            className="px-6 py-2.5 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-medium text-[17px] transition-all duration-200 shadow-sm hover:shadow-lg"
            style={{ transform: 'translateY(0)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Devis gratuit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6 text-dark-900" />
          ) : (
            <FiMenu className="w-6 h-6 text-dark-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-dark-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-dark-700 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+33478542869"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 text-primary-600 border-2 border-primary-600 rounded-full font-medium"
                >
                  <FiPhone className="w-4 h-4" />
                  <span>04 78 54 28 69</span>
                </a>
                
                <Link
                  to="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full px-6 py-3 bg-accent-500 text-white rounded-full font-medium"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
