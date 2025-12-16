import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FooterApple = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { name: 'Nettoyage de bureaux', path: '/services' },
        { name: 'Nettoyage de copropriétés', path: '/services' },
        { name: 'Nettoyage industriel', path: '/services' },
        { name: 'Nettoyage de vitrerie', path: '/services' },
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', path: '/about' },
        { name: 'Réalisations', path: '/projects' },
        { name: 'Contact', path: '/contact' },
        { name: 'Devis gratuit', path: '/quote' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: '04 78 54 28 69', path: 'tel:+33478542869', icon: FiPhone },
        { name: 'contact@oxalis-proprete.fr', path: 'mailto:contact@oxalis-proprete.fr', icon: FiMail },
        { name: 'Lyon 7ème, France', path: '/contact', icon: FiMapPin },
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-dark-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-dark-900 mb-4 tracking-wide uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.path.startsWith('http') || link.path.startsWith('tel') || link.path.startsWith('mailto') ? (
                      <a
                        href={link.path}
                        className="text-dark-600 hover:text-primary-600 transition-colors text-[15px] flex items-center gap-2"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-dark-600 hover:text-primary-600 transition-colors text-[15px] flex items-center gap-2"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-dark-200 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-500">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <Link to="/mentions-legales" className="hover:text-dark-900 transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-dark-900 transition-colors">
              Confidentialité
            </Link>
            <Link to="/cgv" className="hover:text-dark-900 transition-colors">
              CGV
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p>© {currentYear} OXALIS PROPRETE. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterApple;
