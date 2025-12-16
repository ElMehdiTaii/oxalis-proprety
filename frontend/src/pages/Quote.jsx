import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { FiCheckCircle } from 'react-icons/fi';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    surface: '',
    frequency: '',
    address: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/quote', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        surface: '',
        frequency: '',
        address: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  const serviceTypes = [
    'Nettoyage de bureaux',
    'Nettoyage de copropriétés',
    'Nettoyage industriel',
    'Nettoyage de vitrerie',
    'Désinfection & Sanitisation',
    'Nettoyage écologique',
    'Autre'
  ];

  const frequencies = [
    'Quotidien',
    'Hebdomadaire',
    'Bimensuel',
    'Mensuel',
    'Ponctuel',
    'À définir'
  ];

  const benefits = [
    'Réponse sous 24 heures',
    'Devis gratuit et sans engagement',
    'Tarifs compétitifs',
    'Visite sur site possible',
    'Conseils personnalisés',
    'Service client dédié'
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
            <h1 className="mb-6 text-white">Demander un Devis Gratuit</h1>
            <p className="text-xl text-blue-100">
              Recevez une réponse rapide et personnalisée sous 24 heures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding -mt-20 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-xl"
              >
                <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-dark-700 dark:text-dark-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 card"
            >
              <h2 className="text-3xl font-bold mb-6 text-dark-900 dark:text-dark-100">
                Informations pour votre devis
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="jean@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Société
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Type de service *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez un service</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Fréquence souhaitée *
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez une fréquence</option>
                      {frequencies.map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Surface (m²)
                    </label>
                    <input
                      type="number"
                      name="surface"
                      value={formData.surface}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="150"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Code postal / Ville *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="69007 Lyon"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                    Détails supplémentaires
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez vos besoins spécifiques, horaires préférés, etc."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary"
                >
                  {loading ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
                </button>

                <p className="text-sm text-dark-500 dark:text-dark-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par OXALIS PROPRETE
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="card bg-gradient-to-br from-primary-600 to-blue-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {[
                    '15 ans d\'expérience',
                    'Personnel qualifié',
                    'Produits écologiques',
                    'Tarifs compétitifs',
                    'Satisfaction garantie',
                    'Interventions 7j/7'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-dark-900 dark:text-dark-100">
                  Besoin d'aide ?
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  Notre équipe est disponible pour répondre à vos questions
                </p>
                <a
                  href="tel:+33478542869"
                  className="btn-secondary w-full text-center block"
                >
                  Appelez-nous
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
