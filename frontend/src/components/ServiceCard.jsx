import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ service, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      className="relative bg-white dark:bg-dark-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-header-500"
    >
      {/* Image Header */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-5xl">{service.icon}</div>
        </div>
      )}
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-header-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 p-8">
        {!service.image && (
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-dark-100 group-hover:text-header-600 dark:group-hover:text-header-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-dark-600 dark:text-dark-400 mb-6 leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-dark-700 dark:text-dark-300">
              <span className="w-5 h-5 bg-header-100 dark:bg-header-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="w-2 h-2 bg-header-500 rounded-full" />
              </span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center text-header-600 dark:text-header-400 font-semibold group-hover:translate-x-2 transition-transform">
          <span>En savoir plus</span>
          <FiArrowRight className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
