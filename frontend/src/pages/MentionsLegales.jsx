import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const MentionsLegales = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Mentions légales - OXALIS PROPRETE"
        description="Mentions légales du site OXALIS PROPRETE, entreprise de nettoyage professionnel à Lyon."
        url="/mentions-legales"
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
            <h1 className="mb-6 text-white">Mentions légales</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Informations légales relatives au site oxalis-proprete.fr
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
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">1. Éditeur du site</h2>
              <div className="bg-dark-50 rounded-2xl p-6 space-y-2">
                <p><span className="font-medium">Raison sociale :</span> OXALIS PROPRETE</p>
                <p><span className="font-medium">Forme juridique :</span> <span className="text-amber-600">[À compléter]</span></p>
                <p><span className="font-medium">Capital social :</span> <span className="text-amber-600">[À compléter]</span></p>
                <p><span className="font-medium">SIRET :</span> <span className="text-amber-600">[À compléter]</span></p>
                <p><span className="font-medium">Numéro TVA intracommunautaire :</span> <span className="text-amber-600">[À compléter]</span></p>
                <p><span className="font-medium">Siège social :</span> 183 Grande Rue de la Guillotière, 69007 Lyon, France</p>
                <p><span className="font-medium">Téléphone :</span> 04 78 54 28 69</p>
                <p><span className="font-medium">Email :</span> contact@oxalis-proprete.fr</p>
                <p><span className="font-medium">Directeur de la publication :</span> <span className="text-amber-600">[À compléter]</span></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">2. Hébergeur</h2>
              <div className="bg-dark-50 rounded-2xl p-6 space-y-2">
                <p><span className="font-medium">Société :</span> Netlify, Inc.</p>
                <p><span className="font-medium">Adresse :</span> 512 Second Street, Suite 200, San Francisco, CA 94107, États-Unis</p>
                <p><span className="font-medium">Site web :</span> netlify.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive
                d'OXALIS PROPRETE ou de ses partenaires. Toute reproduction, distribution ou utilisation sans
                autorisation écrite préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">4. Limitation de responsabilité</h2>
              <p>
                OXALIS PROPRETE s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
                Toutefois, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations
                publiées et décline toute responsabilité pour les erreurs ou omissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">5. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de tracking ou publicitaires. Des cookies techniques
                strictement nécessaires au fonctionnement du site peuvent être déposés. Ils ne
                nécessitent pas votre consentement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">6. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige,
                les tribunaux compétents sont ceux du ressort de Lyon.
              </p>
            </section>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
