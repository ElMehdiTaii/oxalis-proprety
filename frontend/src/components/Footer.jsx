import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiFacebook,
  FiLinkedin,
  FiInstagram
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Projets', path: '/projects' },
    { name: 'À propos de nous', path: '/about' },
    { name: 'Recrutement', path: '/contact' },
    { name: 'Nous contacter', path: '/contact' },
  ];

  const services = [
    'Nettoyage de bureaux',
    'Nettoyage de copropriétés',
    'Nettoyage industriel',
    'Nettoyage de vitrerie',
  ];

  return (
    <footer className="bg-dark-900 dark:bg-black text-dark-100">
      {/* Main Footer */}
      <div className="section-padding border-b border-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <img
                  src="/logo.png"
                  alt="OXALIS PROPRETE"
                  className="h-14"
                />
              </motion.div>
              <p className="text-dark-400 mb-6 leading-relaxed">
                Une entreprise de nettoyage générale intervenant sur Lyon et son agglomération.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-800 rounded-full hover:bg-header-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-800 rounded-full hover:bg-header-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-800 rounded-full hover:bg-header-500 transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Liens rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-dark-400 hover:text-primary-400 transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Nos services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-dark-400 inline-flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Nous contacter</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-400">
                    183 GR DE LA GUILLOTIERE<br />
                    69007 LYON, France
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:+33478542869"
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    +33 4 78 54 28 69
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FiClock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-400">
                    Lun-Ven: 9:00-12:30<br />
                    14:00-17:30
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@oxalis-proprete.fr"
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    contact@oxalis-proprete.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-400 text-sm">
              © {currentYear} OXALIS PROPRETE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/legal"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/privacy"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
