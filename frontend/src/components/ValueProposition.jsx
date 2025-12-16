import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward } from 'react-icons/fi';

const ValueProposition = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Service de nettoyage professionnel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/95 via-cyan-500/90 to-blue-600/95" />
          </div>

          {/* Gradient Background */}
          <div className="relative z-10 px-8 md:px-16 py-20 md:py-32">
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Top Right Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 right-8 bg-white/95 backdrop-blur-md text-dark-800 px-6 py-4 rounded-2xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🌿</div>
                <div>
                  <div className="font-bold text-sm">Écologique</div>
                  <div className="text-xs text-dark-600">Produits certifiés</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md text-dark-800 px-6 py-4 rounded-2xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <FiCheckCircle className="w-8 h-8 text-header-500" />
                <div>
                  <div className="font-bold text-3xl text-header-600">98%</div>
                  <div className="text-sm text-dark-600">Satisfaction client</div>
                </div>
              </div>
            </motion.div>

            {/* Center Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="mb-8 inline-block"
              >
                <div className="relative">
                  <div className="text-7xl animate-pulse">✨</div>
                  <div className="absolute -top-2 -right-2 text-3xl animate-bounce">⭐</div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
              >
                Propreté Impeccable
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-white/90 font-light"
              >
                Votre satisfaction, notre priorité
              </motion.p>

              {/* Additional Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-wrap justify-center gap-4"
              >
                {[
                  { icon: '🏆', text: 'Certifié Qualité' },
                  { icon: '⚡', text: 'Intervention rapide' },
                  { icon: '🛡️', text: 'Assuré RC Pro' },
                  { icon: '♻️', text: 'Éco-responsable' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-md text-dark-800 px-5 py-3 rounded-full text-sm font-semibold shadow-lg border border-white/20"
                  >
                    <span className="text-lg">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
