import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Numéro WhatsApp (format international sans + ni espaces)
  const phoneNumber = '33478542869'; // Remplacez par votre numéro WhatsApp
  
  // Message pré-rempli
  const defaultMessage = encodeURIComponent(
    'Bonjour OXALIS PROPRETE, je souhaite obtenir des informations sur vos services de nettoyage.'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <>
      {/* Bouton flottant */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {!isOpen ? (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <FaWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform" />
            
            {/* Badge de notification (optionnel) */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold animate-pulse">
              1
            </span>
          </motion.a>
        ) : null}
      </motion.div>

      {/* Tooltip au survol */}
      <style jsx>{`
        .fixed:hover::before {
          content: 'Discutez avec nous';
          position: absolute;
          bottom: 100%;
          right: 0;
          margin-bottom: 0.5rem;
          padding: 0.5rem 1rem;
          background: #1f2937;
          color: white;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          white-space: nowrap;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
