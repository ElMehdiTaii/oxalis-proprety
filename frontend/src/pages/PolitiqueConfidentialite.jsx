import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PolitiqueConfidentialite = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Politique de confidentialité - OXALIS PROPRETE"
        description="Politique de confidentialité et protection des données personnelles d'OXALIS PROPRETE."
        url="/politique-confidentialite"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-blue-700 text-white relative overflow-hidden">
        <div className="bubble w-96 h-96 bg-white -top-32 -right-32" style={{ animationDelay: '0s' }} />
        <div className="bubble w-64 h-64 bg-white bottom-0 -left-32" style={{ animationDelay: '2s' }} />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-white">Politique de confidentialité</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Protection de vos données personnelles — conformité RGPD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12 text-dark-700 leading-relaxed"
          >

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement de vos données personnelles est <span className="font-medium">OXALIS PROPRETE</span>,
                dont le siège social est situé au 183 Grande Rue de la Guillotière, 69007 Lyon.
                Contact : <a href="mailto:contact@oxalis-proprete.fr" className="text-primary-600 hover:underline">contact@oxalis-proprete.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">2. Données collectées</h2>
              <p className="mb-6">Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires :</p>
              <div className="overflow-x-auto rounded-2xl border border-dark-100">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-dark-50">
                      <th className="text-left p-4 font-semibold text-dark-900">Formulaire</th>
                      <th className="text-left p-4 font-semibold text-dark-900">Données collectées</th>
                      <th className="text-left p-4 font-semibold text-dark-900">Finalité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-100">
                    <tr>
                      <td className="p-4">Contact</td>
                      <td className="p-4">Nom, email, téléphone (optionnel), message</td>
                      <td className="p-4">Répondre à votre demande</td>
                    </tr>
                    <tr>
                      <td className="p-4">Devis</td>
                      <td className="p-4">Nom, email, téléphone, société (optionnel), adresse, type de service</td>
                      <td className="p-4">Établir un devis personnalisé</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">3. Base légale du traitement</h2>
              <p>
                Le traitement de vos données est fondé sur votre <span className="font-medium">consentement</span> (art. 6.1.a du RGPD),
                exprimé lors de l'envoi du formulaire, ainsi que sur notre <span className="font-medium">intérêt légitime</span> à
                répondre aux demandes commerciales (art. 6.1.f).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">4. Durée de conservation</h2>
              <p>
                Vos données sont conservées pendant <span className="font-medium">3 ans</span> à compter de
                votre dernière prise de contact, conformément aux recommandations de la CNIL.
                Au-delà, elles sont supprimées ou anonymisées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">5. Destinataires des données</h2>
              <p>
                Vos données sont destinées exclusivement à l'équipe commerciale d'OXALIS PROPRETE.
                Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales.
                Elles peuvent être transmises à nos prestataires techniques (hébergement, email) dans
                le strict cadre de l'exécution du service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">6. Vos droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="space-y-3">
                {[
                  { droit: 'Droit d\'accès', desc: 'obtenir une copie de vos données' },
                  { droit: 'Droit de rectification', desc: 'corriger des données inexactes' },
                  { droit: 'Droit à l\'effacement', desc: 'demander la suppression de vos données' },
                  { droit: 'Droit à la portabilité', desc: 'recevoir vos données dans un format structuré' },
                  { droit: 'Droit d\'opposition', desc: 'vous opposer à un traitement basé sur notre intérêt légitime' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <span><span className="font-medium">{item.droit}</span> : {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:contact@oxalis-proprete.fr" className="text-primary-600 hover:underline">
                  contact@oxalis-proprete.fr
                </a>.
                En cas de litige, vous pouvez saisir la{' '}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  CNIL
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">7. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                protéger vos données contre tout accès non autorisé, perte ou altération
                (chiffrement HTTPS, rate limiting, validation des données).
              </p>
            </section>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
