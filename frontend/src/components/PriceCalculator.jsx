import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiBriefcase, FiTruck, FiCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    surface: '',
    frequency: '',
    extras: []
  });

  const serviceTypes = [
    { id: 'bureau', name: 'Bureaux', icon: FiBriefcase, basePrice: 25 },
    { id: 'copropriete', name: 'Copropriété', icon: FiHome, basePrice: 20 },
    { id: 'industriel', name: 'Industriel', icon: FiTruck, basePrice: 30 }
  ];

  const frequencies = [
    { id: 'daily', name: 'Quotidien', multiplier: 1 },
    { id: 'weekly', name: 'Hebdomadaire', multiplier: 1.2 },
    { id: 'biweekly', name: 'Bi-mensuel', multiplier: 1.5 },
    { id: 'monthly', name: 'Mensuel', multiplier: 2 }
  ];

  const extras = [
    { id: 'windows', name: 'Nettoyage vitres', price: 150 },
    { id: 'carpet', name: 'Nettoyage moquettes', price: 200 },
    { id: 'disinfection', name: 'Désinfection', price: 100 },
    { id: 'eco', name: 'Produits écologiques', price: 50 }
  ];

  const calculatePrice = () => {
    if (!formData.serviceType || !formData.surface || !formData.frequency) return 0;

    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const freq = frequencies.find(f => f.id === formData.frequency);
    
    const basePrice = service.basePrice * parseFloat(formData.surface) * freq.multiplier;
    const extrasPrice = formData.extras.reduce((acc, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return acc + extra.price;
    }, 0);

    return Math.round(basePrice + extrasPrice);
  };

  const toggleExtra = (extraId) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter(id => id !== extraId)
        : [...prev.extras, extraId]
    }));
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className="card max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
        Calculateur de Prix
      </h3>

      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                step >= s
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-200 dark:bg-dark-700 text-dark-500'
              }`}
            >
              {step > s ? <FiCheck /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-20 h-1 mx-2 transition-all ${
                  step > s ? 'bg-primary-600' : 'bg-dark-200 dark:bg-dark-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Service Type */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h4 className="text-xl font-semibold mb-6">Type de service</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {serviceTypes.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setFormData({ ...formData, serviceType: service.id });
                    setStep(2);
                  }}
                  className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                    formData.serviceType === service.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-dark-200 dark:border-dark-700 hover:border-primary-400'
                  }`}
                >
                  <service.icon className="w-12 h-12 mx-auto mb-3 text-primary-600" />
                  <p className="font-semibold">{service.name}</p>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mt-1">
                    à partir de {service.basePrice}€/m²
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Surface & Frequency */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h4 className="text-xl font-semibold mb-6">Surface et fréquence</h4>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Surface (m²)
              </label>
              <input
                type="number"
                min="10"
                value={formData.surface}
                onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                placeholder="Ex: 150"
                className="w-full px-4 py-3 rounded-xl border-2 border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 focus:border-primary-600 outline-none transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Fréquence
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {frequencies.map((freq) => (
                  <button
                    key={freq.id}
                    onClick={() => setFormData({ ...formData, frequency: freq.id })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.frequency === freq.id
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-dark-200 dark:border-dark-700 hover:border-primary-400'
                    }`}
                  >
                    <p className="font-semibold text-sm">{freq.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="btn-secondary flex-1"
              >
                Retour
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!formData.surface || !formData.frequency}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Extras & Result */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h4 className="text-xl font-semibold mb-6">Services supplémentaires</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {extras.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                    formData.extras.includes(extra.id)
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-dark-200 dark:border-dark-700 hover:border-primary-400'
                  }`}
                >
                  <div className="text-left">
                    <p className="font-semibold">{extra.name}</p>
                    <p className="text-sm text-dark-600 dark:text-dark-400">
                      +{extra.price}€
                    </p>
                  </div>
                  {formData.extras.includes(extra.id) && (
                    <FiCheck className="w-6 h-6 text-primary-600" />
                  )}
                </button>
              ))}
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-br from-primary-600 to-blue-700 text-white rounded-2xl p-8 mb-6">
              <p className="text-lg mb-2">Estimation de prix</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">{estimatedPrice}€</span>
                <span className="text-xl">/mois</span>
              </div>
              <p className="text-sm text-blue-100 mt-3">
                * Prix indicatif, devis personnalisé sur demande
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="btn-secondary flex-1"
              >
                Retour
              </button>
              <Link to="/quote" className="btn-primary flex-1 inline-flex items-center justify-center gap-2">
                <span>Demander un devis</span>
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceCalculator;
