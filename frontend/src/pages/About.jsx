import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiUsers, FiHeart, FiTarget } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque intervention avec des standards de qualité élevés.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiUsers,
      title: 'Équipe Professionnelle',
      description: 'Une équipe qualifiée, formée et passionnée par son métier.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiHeart,
      title: 'Engagement Client',
      description: 'Votre satisfaction est notre priorité absolue, nous nous adaptons à vos besoins.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiTarget,
      title: 'Écologie',
      description: 'Engagement fort pour l\'environnement avec des produits certifiés et écologiques.',
      color: 'from-teal-500 to-teal-600'
    },
  ];

  const timeline = [
    { year: '2008', event: 'Création d\'OXALIS PROPRETE à Lyon' },
    { year: '2012', event: 'Expansion des services aux copropriétés' },
    { year: '2015', event: 'Certification écologique obtenue' },
    { year: '2018', event: 'Extension vers le nettoyage industriel' },
    { year: '2020', event: 'Protocoles sanitaires renforcés COVID-19' },
    { year: '2023', event: '500+ clients satisfaits et en croissance' },
  ];

  return (
    <div className="pt-24">
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
            <h1 className="mb-6 text-white">À Propos d'OXALIS PROPRETE</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Plus de 15 ans d'expertise au service de votre propreté à Lyon et son agglomération
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">
                Qui sommes-nous <span className="gradient-text">?</span>
              </h2>
              <div className="space-y-4 text-lg text-dark-600 dark:text-dark-400">
                <p>
                  <strong className="text-dark-900 dark:text-dark-100">OXALIS PROPRETE</strong> est une entreprise spécialisée
                  dans le nettoyage professionnel, intervenant sur Lyon et son agglomération depuis plus de 15 ans.
                </p>
                <p>
                  Nous accompagnons les syndics, entreprises, collectivités et particuliers dans l'entretien
                  et le nettoyage de leurs locaux avec des solutions personnalisées et adaptées à chaque besoin.
                </p>
                <p>
                  Notre engagement : vous offrir un service de qualité irréprochable avec une équipe professionnelle,
                  des produits écologiques et des tarifs compétitifs.
                </p>
                <p>
                  Forte de son expérience et de sa réputation, OXALIS PROPRETE compte aujourd'hui plus de 500 clients
                  satisfaits qui nous font confiance pour l'entretien quotidien de leurs espaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Équipe OXALIS PROPRETE"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent flex items-end">
                  <div className="p-12 text-white">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-4xl font-bold mb-2">15 ans</h3>
                    <p className="text-2xl">d'excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="mb-6">
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:shadow-2xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-dark-900 dark:text-dark-100">
                  {value.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">
              Notre <span className="gradient-text">Histoire</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              Un parcours marqué par la croissance et l'innovation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-1 text-right pr-8">
                  {index % 2 === 0 && (
                    <div className="card inline-block">
                      <p className="text-dark-700 dark:text-dark-300">{item.event}</p>
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full z-10" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-300 dark:bg-primary-700 absolute top-4" />
                  )}
                </div>

                <div className="flex-1 pl-8">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {item.year}
                  </div>
                  {index % 2 !== 0 && (
                    <div className="card">
                      <p className="text-dark-700 dark:text-dark-300">{item.event}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">
              Notre <span className="gradient-text">Équipe</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              Des professionnels qualifiés et passionnés à votre service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { role: 'Direction', description: 'Gestion et stratégie d\'entreprise' },
              { role: 'Équipe Terrain', description: 'Techniciens qualifiés et formés' },
              { role: 'Service Client', description: 'À votre écoute 7j/7' }
            ].map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-dark-100">
                  {team.role}
                </h3>
                <p className="text-dark-600 dark:text-dark-400">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20"
          >
            <h2 className="mb-6">Rejoignez nos clients satisfaits</h2>
            <p className="text-xl text-dark-600 dark:text-dark-400 mb-8">
              Découvrez pourquoi plus de 500 clients nous font confiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="btn-primary">
                Demander un devis
              </a>
              <a href="/contact" className="btn-secondary">
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
