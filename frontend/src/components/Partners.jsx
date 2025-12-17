import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      name: 'MAE',
      logo: '/logo-mae.png',
      alt: 'MAE - Partenaire OXALIS PROPRETE'
    },
    {
      name: 'ADAS Avocats',
      logo: '/adas-avocats-logo-150.jpg',
      alt: 'ADAS Avocats - Partenaire OXALIS PROPRETE'
    },
    {
      name: 'Alliade Habitat',
      logo: '/logo-alliade-habitat.svg',
      alt: 'Alliade Habitat - Partenaire OXALIS PROPRETE'
    },
    {
      name: 'Régie Pozetto',
      logo: '/6bbe2fa9-60d4-4bf2-9032-9c50085924f1.png',
      alt: 'Régie Pozetto - Partenaire OXALIS PROPRETE'
    },
    {
      name: 'Cap Com',
      logo: '/capcom-logo.svg',
      alt: 'Cap Com - Partenaire OXALIS PROPRETE'
    },
    {
      name: 'Etiknounou',
      logo: '/etiknounou-768x401.png',
      alt: 'Etiknounou - Partenaire OXALIS PROPRETE'
    }
  ];

  return (
    <section className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Nos partenaires <span className="gradient-text">de confiance</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Ils nous font confiance pour leurs besoins en nettoyage professionnel
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-12 flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 border border-dark-100"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section with Professional Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
              alt="Partenariat professionnel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/95 to-primary-700/90" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-20 px-6">
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Rejoignez nos partenaires
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Développons ensemble une collaboration durable et bénéfique
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white hover:bg-dark-50 text-primary-600 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-2xl"
              style={{ transform: 'translateY(0)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Devenir partenaire
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
