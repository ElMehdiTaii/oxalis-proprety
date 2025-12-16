import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiHome,
  FiShield,
  FiBriefcase,
  FiTruck,
  FiSun,
  FiDroplet,
  FiCheck
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: FiBriefcase,
      title: 'Nettoyage de Bureaux',
      description: 'Maintenez un environnement de travail propre et professionnel pour vos équipes.',
      features: [
        'Nettoyage quotidien ou hebdomadaire',
        'Entretien des sols et surfaces',
        'Désinfection des espaces communs',
        'Vidage des poubelles',
        'Nettoyage des sanitaires',
        'Dépoussiérage du mobilier'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiHome,
      title: 'Nettoyage de Copropriétés',
      description: 'Entretien régulier des parties communes pour le confort de tous les résidents.',
      features: [
        'Nettoyage des halls d\'entrée',
        'Entretien des escaliers',
        'Nettoyage des ascenseurs',
        'Balayage des parkings',
        'Entretien des espaces verts',
        'Désinfection régulière'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiTruck,
      title: 'Nettoyage Industriel',
      description: 'Solutions adaptées aux contraintes spécifiques des environnements industriels.',
      features: [
        'Nettoyage haute pression',
        'Dégraissage des machines',
        'Nettoyage des sols industriels',
        'Évacuation des déchets',
        'Nettoyage après travaux',
        'Maintenance préventive'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiSun,
      title: 'Nettoyage de Vitrerie',
      description: 'Des vitres éclatantes pour une image impeccable de votre établissement.',
      features: [
        'Nettoyage de façades vitrées',
        'Vitrines commerciales',
        'Baies vitrées',
        'Vérandas',
        'Fenêtres en hauteur',
        'Traitement anti-traces'
      ],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FiShield,
      title: 'Désinfection & Sanitisation',
      description: 'Protocoles de désinfection renforcés pour garantir la sécurité sanitaire.',
      features: [
        'Désinfection totale des locaux',
        'Traitement anti-bactérien',
        'Protocoles COVID-19',
        'Produits certifiés',
        'Matériel professionnel',
        'Rapport d\'intervention'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiDroplet,
      title: 'Nettoyage Écologique',
      description: 'Solutions respectueuses de l\'environnement avec des produits certifiés.',
      features: [
        'Produits biodégradables',
        'Labels environnementaux',
        'Réduction des déchets',
        'Économie d\'eau',
        'Matériel basse consommation',
        'Engagement RSE'
      ],
      color: 'from-teal-500 to-teal-600'
    },
  ];

  return (
    <div className="pt-24">
      <SEO 
        title="Nos Services de Nettoyage Professionnel à Lyon | OXALIS PROPRETE"
        description="Découvrez nos services : nettoyage bureaux, copropriétés, industriel, vitrerie, désinfection. Produits écologiques, intervention 7j/7 à Lyon."
        keywords="nettoyage bureaux Lyon, nettoyage copropriété Lyon, nettoyage industriel, vitrerie professionnelle, désinfection locaux, produits écologiques"
        url="/services"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-blue-700 text-white relative overflow-hidden">
        <div className="bubble w-96 h-96 bg-white -top-32 -right-32" style={{ animationDelay: '0s' }} />
        <div className="bubble w-64 h-64 bg-white bottom-0 -left-32" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-white">
              Nos Services de Nettoyage
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Des solutions complètes et personnalisées pour tous vos besoins en nettoyage professionnel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-dark-100">
                  {service.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-dark-700 dark:text-dark-300">
                      <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">
              Pourquoi choisir <span className="gradient-text">OXALIS PROPRETE</span> ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise & Qualité',
                description: '15 ans d\'expérience dans le nettoyage professionnel avec une équipe qualifiée et formée.',
                icon: '🏆'
              },
              {
                title: 'Engagement Écologique',
                description: 'Utilisation de produits certifiés respectueux de l\'environnement et de votre santé.',
                icon: '🌿'
              },
              {
                title: 'Service Sur-Mesure',
                description: 'Solutions personnalisées adaptées à vos besoins spécifiques et votre budget.',
                icon: '⚙️'
              },
              {
                title: 'Disponibilité',
                description: 'Interventions 7j/7 selon vos contraintes et horaires préférés.',
                icon: '🕐'
              },
              {
                title: 'Prix Compétitifs',
                description: 'Tarifs transparents et compétitifs avec un excellent rapport qualité-prix.',
                icon: '💰'
              },
              {
                title: 'Satisfaction Garantie',
                description: '98% de clients satisfaits qui nous font confiance année après année.',
                icon: '⭐'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white dark:bg-dark-800 rounded-3xl hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-dark-100">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20"
          >
            <h2 className="mb-6">
              Besoin d'un service de nettoyage ?
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400 mb-8">
              Contactez-nous pour un devis gratuit et personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="btn-primary">
                Demander un devis
              </Link>
              <Link to="/contact" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
