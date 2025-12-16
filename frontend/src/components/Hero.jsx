import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-50 via-blue-50 to-primary-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-96 h-96 bg-primary-200 dark:bg-primary-900/30 top-20 -left-48" style={{ animationDelay: '0s' }} />
        <div className="bubble w-64 h-64 bg-secondary-200 dark:bg-secondary-900/30 top-40 right-20" style={{ animationDelay: '2s' }} />
        <div className="bubble w-80 h-80 bg-primary-300 dark:bg-primary-800/30 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="bubble w-72 h-72 bg-secondary-300 dark:bg-secondary-800/30 bottom-40 right-1/3" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container-custom px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-header-100 dark:bg-header-900/30 text-header-700 dark:text-header-300 px-5 py-3 rounded-full mb-8 shadow-lg border border-header-200 dark:border-header-800"
            >
              <span className="w-2 h-2 bg-header-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">✨ Votre partenaire de confiance depuis 15 ans</span>
            </motion.div>

            <h1 className="mb-8 leading-tight">
              <span className="block text-dark-800 dark:text-dark-100">Service de nettoyage</span>
              <span className="block gradient-text text-6xl md:text-7xl lg:text-8xl">professionnel</span>
              <span className="block text-dark-800 dark:text-dark-100">à Lyon</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-700 dark:text-dark-300 mb-10 leading-relaxed max-w-2xl font-light">
              OXALIS PROPRETE intervient auprès des <strong className="font-semibold text-header-600 dark:text-header-400">syndics, entreprises, collectivités</strong> et particuliers
              pour tous vos besoins en nettoyage professionnel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/quote" className="btn-primary group">
                <span>Demander un devis</span>
                <FiArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="btn-secondary group"
              >
                <FiPlay className="inline mr-2" />
                <span>Découvrir nos services</span>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center p-4 bg-white/50 dark:bg-dark-800/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-header-600 dark:text-header-400 mb-2">15+</div>
                <div className="text-sm font-medium text-dark-700 dark:text-dark-300">Années d'expérience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center p-4 bg-white/50 dark:bg-dark-800/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-header-600 dark:text-header-400 mb-2">500+</div>
                <div className="text-sm font-medium text-dark-700 dark:text-dark-300">Clients satisfaits</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center p-4 bg-white/50 dark:bg-dark-800/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-header-600 dark:text-header-400 mb-2">7j/7</div>
                <div className="text-sm font-medium text-dark-700 dark:text-dark-300">Service disponible</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Professional Cleaning Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-[3rem] shadow-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
                  alt="Équipe de nettoyage professionnelle OXALIS PROPRETE"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 text-white p-12">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-3xl font-bold mb-2">Propreté Impeccable</h3>
                  <p className="text-lg opacity-90">Votre satisfaction, notre priorité</p>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl p-6 w-64"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-dark-900 dark:text-dark-100">98%</div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">Satisfaction client</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-8 -right-8 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl p-6 w-64"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <div className="font-bold text-dark-900 dark:text-dark-100">Écologique</div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">Produits certifiés</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-400 dark:border-dark-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-dark-400 dark:bg-dark-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
