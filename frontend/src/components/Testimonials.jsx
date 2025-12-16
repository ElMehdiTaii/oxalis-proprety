import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophie Martin',
      company: 'Syndic Immobilier Lyon',
      role: 'Gestionnaire de copropriété',
      rating: 5,
      text: 'Service impeccable depuis 3 ans. Les équipes sont toujours ponctuelles et le travail est irréprochable. Les parties communes de nos immeubles n\'ont jamais été aussi propres.',
      avatar: 'SM',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Jean Dupont',
      company: 'TechStart SAS',
      role: 'Directeur Général',
      rating: 5,
      text: 'OXALIS PROPRETE s\'occupe de nos bureaux depuis notre création. Leur professionnalisme et leur réactivité sont remarquables. Je les recommande vivement.',
      avatar: 'JD',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Marie Leclerc',
      company: 'Restaurant Le Gourmet',
      role: 'Propriétaire',
      rating: 5,
      text: 'Un grand merci à toute l\'équipe pour leur travail méticuleux. Les normes d\'hygiène sont strictement respectées, ce qui est crucial dans notre secteur.',
      avatar: 'ML',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Pierre Rousseau',
      company: 'Cabinet Médical Lyon 7',
      role: 'Médecin',
      rating: 5,
      text: 'La désinfection quotidienne de notre cabinet est effectuée avec le plus grand soin. Nos patients se sentent en sécurité. Excellent service.',
      avatar: 'PR',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Claire Dubois',
      company: 'Mairie de Lyon',
      role: 'Responsable services techniques',
      rating: 5,
      text: 'Prestataire de confiance pour nos bâtiments publics. OXALIS PROPRETE allie qualité de service et respect de l\'environnement avec des produits écologiques.',
      avatar: 'CD',
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Marc Bernard',
      company: 'Industries Lyon Ouest',
      role: 'Directeur de site',
      rating: 5,
      text: 'Le nettoyage industriel demande une expertise particulière qu\'OXALIS maîtrise parfaitement. Ils interviennent même en horaires décalés sans problème.',
      avatar: 'MB',
      color: 'from-cyan-400 to-cyan-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-dark-50 dark:from-dark-950 dark:to-dark-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Ce que disent <span className="gradient-text">nos clients</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Plus de 500 clients satisfaits nous font confiance pour leurs besoins en nettoyage
          </p>
        </motion.div>

        {/* Rating Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Rating Score */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="text-7xl font-bold bg-gradient-to-r from-header-500 to-primary-500 bg-clip-text text-transparent mb-3">
                    4.9
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-dark-600 dark:text-dark-400 font-medium">
                    Basé sur 127 avis clients
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-header-600 dark:text-header-400 mb-1">98%</div>
                    <p className="text-sm text-dark-600 dark:text-dark-400">Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-header-600 dark:text-header-400 mb-1">500+</div>
                    <p className="text-sm text-dark-600 dark:text-dark-400">Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-header-600 dark:text-header-400 mb-1">15+</div>
                    <p className="text-sm text-dark-600 dark:text-dark-400">Années</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header with Avatar */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-lg text-dark-900 dark:text-dark-100 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-dark-600 dark:text-dark-400 truncate">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-header-600 dark:text-header-400 truncate">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-dark-700 dark:text-dark-300 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: '🏆', text: 'Certifié Qualité', color: 'from-yellow-400 to-orange-500' },
            { icon: '🌿', text: 'Éco-responsable', color: 'from-green-400 to-emerald-500' },
            { icon: '🛡️', text: 'Assuré RC Pro', color: 'from-blue-400 to-indigo-500' },
            { icon: '⚡', text: 'Intervention rapide', color: 'from-purple-400 to-pink-500' }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`text-4xl mb-3 bg-gradient-to-br ${badge.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                {badge.icon}
              </div>
              <span className="text-sm font-semibold text-center text-dark-800 dark:text-dark-200">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
