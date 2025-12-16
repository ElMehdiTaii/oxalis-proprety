import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Centre d\'affaires Lyon Part-Dieu',
      category: 'Bureaux',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      description: '3000m² • Nettoyage quotidien',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      title: 'Résidence Les Jardins',
      category: 'Copropriétés',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
      description: '120 logements',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      title: 'Usine Pharmaceutique',
      category: 'Industriel',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop',
      description: 'Nettoyage spécialisé',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 4,
      title: 'Centre Commercial Confluence',
      category: 'Commerces',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
      description: 'Vitrines & espaces',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 5,
      title: 'École Primaire Victor Hugo',
      category: 'Collectivités',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop',
      description: 'Protocoles sanitaires',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      id: 6,
      title: 'Clinique Saint-Jean',
      category: 'Santé',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
      description: 'Nettoyage médical',
      span: 'md:col-span-1 md:row-span-2'
    },
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
            <h1 className="mb-6 text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Nos Réalisations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed tracking-tight">
              Chaque espace mérite une attention particulière
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${project.span} group relative overflow-hidden rounded-3xl cursor-pointer`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-accent-400 text-xs uppercase font-semibold mb-3 tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 tracking-tight">
                    {project.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projets réalisés' },
              { value: '98%', label: 'Satisfaction client' },
              { value: '15+', label: 'Ans d\'expérience' },
              { value: '24h', label: 'Réponse devis' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-dark-600 dark:text-dark-400 tracking-tight">{stat.label}</div>
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
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-dark-100 tracking-tight leading-tight">
              Votre projet avec OXALIS PROPRETE ?
            </h2>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 tracking-tight">
              Contactez-nous pour un devis personnalisé
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

export default Projects;
