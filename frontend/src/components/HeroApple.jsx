import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroApple = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
          alt="Professionnel du nettoyage au travail"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-50 text-accent-700 rounded-full mb-8 border border-accent-200"
          >
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">15 ans d'excellence à Lyon</span>
          </motion.div>

          {/* Main Title - Apple Style */}
          <h1 className="mb-8 max-w-5xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-2"
              style={{ lineHeight: 1.05, letterSpacing: '-0.015em' }}
            >
              La propreté
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block gradient-text text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
              style={{ lineHeight: 1.05, letterSpacing: '-0.015em' }}
            >
              réinventée
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-dark-600 mb-12 max-w-3xl mx-auto font-light"
            style={{ lineHeight: 1.5, letterSpacing: '-0.011em' }}
          >
            Solutions de nettoyage professionnel pour entreprises,
            <br className="hidden md:block" />
            copropriétés et collectivités à Lyon
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/quote" 
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium text-lg transition-all duration-200 shadow-md hover:shadow-xl"
              style={{ transform: 'translateY(0)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Demander un devis gratuit
            </Link>
            <a
              href="#services"
              className="px-8 py-4 bg-white hover:bg-dark-50 text-primary-600 rounded-full font-medium text-lg transition-all duration-200 border-2 border-dark-200"
            >
              Découvrir nos services
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-16 border-t border-dark-200"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">15+</div>
              <div className="text-sm md:text-base text-dark-600 font-medium">Années d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">500+</div>
              <div className="text-sm md:text-base text-dark-600 font-medium">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-primary-600 mb-2">98%</div>
              <div className="text-sm md:text-base text-dark-600 font-medium">Taux de satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a 
          href="#services"
          className="flex flex-col items-center text-dark-600 hover:text-primary-600 transition-colors group"
          aria-label="Défiler vers les services"
        >
          <span className="text-xs font-medium mb-2 tracking-wider uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroApple;
