import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  FiCheckCircle, 
  FiArrowRight
} from 'react-icons/fi';
import HeroApple from '../components/HeroApple';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import Partners from '../components/Partners';

const Home = () => {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const services = [
    {
      title: 'Nettoyage de Bureaux',
      description: 'Solutions de nettoyage professionnel pour vos espaces de travail.',
      icon: '🏢',
      image: '/adolfo-felix-PG8NyM_Mcts-unsplash.jpg',
      features: ['Nettoyage quotidien', 'Entretien des sols', 'Désinfection'],
    },
    {
      title: 'Nettoyage de Copropriétés',
      description: 'Entretien complet des parties communes de votre immeuble.',
      icon: '🏘️',
      image: '/giorgio-trovato-5TXz228u4eo-unsplash.jpg',
      features: ['Halls d\'entrée', 'Escaliers', 'Espaces communs'],
    },
    {
      title: 'Nettoyage Industriel',
      description: 'Services adaptés aux environnements industriels et techniques.',
      icon: '🏭',
      image: '/toon-lambrechts-7PTD99F8oUk-unsplash.jpg',
      features: ['Nettoyage intensif', 'Dégraissage', 'Maintenance'],
    },
    {
      title: 'Nettoyage de Vitrerie',
      description: 'Vitrines et fenêtres éclatantes pour une image parfaite.',
      icon: '✨',
      image: '/juup-schram-npCIKVoA1SY-unsplash.jpg',
      features: ['Façades vitrées', 'Vitrines', 'Baies vitrées'],
    },
  ];

  const features = [
    'Personnel qualifié et formé',
    'Produits écologiques certifiés',
    'Interventions 7j/7',
    'Devis gratuit sous 24h',
    'Assurance responsabilité civile',
    'Matériel professionnel moderne',
  ];

  return (
    <div className="overflow-hidden bg-white">
      <SEO 
        title="OXALIS PROPRETE - Nettoyage Professionnel à Lyon | Devis Gratuit"
        description="Expert en nettoyage professionnel à Lyon depuis 15 ans. Bureaux, copropriétés, industries. Produits écologiques, intervention 7j/7. Devis gratuit sous 24h."
        keywords="nettoyage professionnel Lyon, entreprise nettoyage Lyon 7, nettoyage bureaux, nettoyage copropriété, nettoyage industriel, devis nettoyage gratuit"
        url="/"
      />
      
      {/* Hero Section - Apple Style */}
      <HeroApple />

      {/* Services Section - Apple Style */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-5xl md:text-6xl font-semibold tracking-tight">
              Des services <span className="gradient-text">sur mesure</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              Solutions complètes adaptées à chaque environnement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-dark-100 hover:shadow-2xl transition-all duration-300"
                style={{ transform: 'translateY(0)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-dark-600 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-dark-700">
                        <FiCheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-lg font-medium group"
            >
              <span>Voir tous nos services</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Differentiation Section Apple Style */}
      <section className="section-padding bg-dark-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                Une équipe certifiée
                <span className="gradient-text block mt-2">à votre écoute</span>
              </h2>
              <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                Nos professionnels formés aux dernières techniques de nettoyage écologique 
                interviennent avec rigueur et discrétion pour garantir un résultat impeccable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Personnel qualifié</h4>
                    <p className="text-dark-600">Formation continue et certifications professionnelles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Disponibilité 7j/7</h4>
                    <p className="text-dark-600">Intervention rapide selon vos contraintes horaires</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Produits écologiques</h4>
                    <p className="text-dark-600">Certifications environnementales et respect des normes</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/juup-schram-npCIKVoA1SY-unsplash.jpg"
                alt="Équipe OXALIS PROPRETE"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <Partners />

      {/* CTA Section - Apple Style avec fond bleu */}
      <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-white">
              Prêt à transformer
              <span className="block mt-2">vos espaces ?</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
              Obtenez un devis gratuit sous 24h et découvrez nos solutions sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quote" 
                className="px-8 py-4 bg-white hover:bg-dark-50 text-primary-600 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-2xl"
                style={{ transform: 'translateY(0)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33478542869"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-medium text-lg transition-all duration-200"
              >
                04 78 54 28 69
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
