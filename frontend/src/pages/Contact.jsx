import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Adresse',
      content: '183 GR DE LA GUILLOTIERE, 69007 LYON, France',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiPhone,
      title: 'Téléphone',
      content: '+33 4 78 54 28 69',
      link: 'tel:+33478542869',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'contact@oxalis-proprete.fr',
      link: 'mailto:contact@oxalis-proprete.fr',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiClock,
      title: 'Horaires',
      content: 'Lun-Ven: 9:00-12:30, 14:00-17:30',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <div className="pt-24">
      <SEO 
        title="Contactez-nous - OXALIS PROPRETE Lyon | Devis Gratuit 24h"
        description="Contactez OXALIS PROPRETE à Lyon. 📞 04 78 54 28 69 - Devis gratuit sous 24h. Intervention rapide pour tous vos besoins en nettoyage professionnel."
        keywords="contact nettoyage Lyon, devis nettoyage gratuit, OXALIS PROPRETE contact, entreprise nettoyage Lyon 7"
        url="/contact"
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
            <h1 className="mb-6 text-white">Contactez-nous</h1>
            <p className="text-xl text-blue-100">
              Nous sommes à votre écoute pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding -mt-20 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-dark-900 dark:text-dark-100">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-dark-600 dark:text-dark-400">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-6 text-dark-900 dark:text-dark-100">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Demande de renseignements"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre besoin..."
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
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <FiSend />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-dark-100">
                  Notre localisation
                </h3>
                <div className="aspect-video bg-dark-200 dark:bg-dark-700 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.0234!2d4.8391!3d45.7511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ1JzA0LjAiTiA0wrg1MCcyMC44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OXALIS PROPRETE Location"
                  />
                </div>
              </div>

              <div className="card bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
                <h3 className="text-xl font-bold mb-4 text-dark-900 dark:text-dark-100">
                  Besoin d'un devis ?
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  Recevez une réponse rapide sous 24 heures avec nos tarifs compétitifs
                </p>
                <a href="/quote" className="btn-primary w-full text-center block">
                  Demander un devis gratuit
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
