import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const defaultFaqs = [
    {
      question: 'Quels types de locaux nettoyez-vous ?',
      answer: 'Nous intervenons dans tous types de locaux : bureaux, copropriétés, commerces, industries, établissements médicaux, écoles, et bien plus. Chaque prestation est adaptée aux spécificités de votre secteur d\'activité.'
    },
    {
      question: 'Proposez-vous des produits écologiques ?',
      answer: 'Oui, nous utilisons prioritairement des produits éco-certifiés (Ecolabel, Ecocert) qui respectent l\'environnement tout en garantissant une efficacité maximale. Nous pouvons adapter notre gamme de produits selon vos préférences.'
    },
    {
      question: 'Quelles sont vos disponibilités horaires ?',
      answer: 'Nous intervenons 7j/7 selon vos besoins : en journée, en soirée, la nuit, ou le week-end. Nos équipes s\'adaptent à vos contraintes pour minimiser l\'impact sur votre activité.'
    },
    {
      question: 'Comment se déroule un premier contact ?',
      answer: 'Après votre demande, nous organisons une visite gratuite de vos locaux pour établir un diagnostic précis. Vous recevrez ensuite un devis détaillé sous 24h. Si vous acceptez, nous planifions le démarrage des prestations à la date de votre choix.'
    },
    {
      question: 'Êtes-vous assurés ?',
      answer: 'Oui, nous disposons d\'une assurance Responsabilité Civile Professionnelle couvrant tous nos interventions. Nos équipes sont également formées aux normes de sécurité et d\'hygiène en vigueur.'
    },
    {
      question: 'Proposez-vous des contrats longue durée ?',
      answer: 'Oui, nous proposons des contrats mensuels, trimestriels ou annuels avec des tarifs dégressifs. Vous bénéficiez ainsi d\'un service régulier et d\'une relation de confiance sur le long terme.'
    },
    {
      question: 'Comment contrôlez-vous la qualité du service ?',
      answer: 'Chaque intervention fait l\'objet d\'un contrôle qualité par nos chefs d\'équipe. Nous réalisons également des audits réguliers et restons à votre écoute pour tout ajustement. Votre satisfaction est notre priorité.'
    },
    {
      question: 'Fournissez-vous le matériel et les produits ?',
      answer: 'Oui, nous apportons tout le matériel professionnel nécessaire (aspirateurs, autolaveuses, chariots, etc.) ainsi que les produits adaptés. Vous n\'avez rien à prévoir de votre côté.'
    }
  ];

  const faqsToDisplay = faqs || defaultFaqs;

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-400">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqsToDisplay.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {activeIndex === index ? (
                    <FiChevronUp className="w-6 h-6 text-primary-600" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-dark-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-dark-700 dark:text-dark-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-br from-primary-600 to-blue-700 text-white rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-3">Vous avez d'autres questions ?</h3>
          <p className="text-blue-100 mb-6">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations
          </p>
          <a
            href="tel:+33478542869"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:scale-105 transition-transform shadow-xl"
          >
            Appelez-nous : 04 78 54 28 69
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
