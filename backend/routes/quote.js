import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendQuoteEmail } from '../services/emailService.js';

const router = express.Router();

// Validation rules
const quoteValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Le nom est requis')
    .isLength({ min: 2, max: 100 }).withMessage('Le nom doit contenir entre 2 et 100 caractères'),
  body('email')
    .trim()
    .notEmpty().withMessage('L\'email est requis')
    .isEmail().withMessage('Email invalide')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty().withMessage('Le téléphone est requis')
    .matches(/^[+]?[\d\s()-]+$/).withMessage('Numéro de téléphone invalide'),
  body('serviceType')
    .trim()
    .notEmpty().withMessage('Le type de service est requis'),
  body('frequency')
    .trim()
    .notEmpty().withMessage('La fréquence est requise'),
  body('address')
    .trim()
    .notEmpty().withMessage('L\'adresse est requise')
    .isLength({ min: 5, max: 200 }).withMessage('L\'adresse doit contenir entre 5 et 200 caractères'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Le nom de société doit contenir maximum 100 caractères'),
  body('surface')
    .optional()
    .trim()
    .isNumeric().withMessage('La surface doit être un nombre'),
  body('message')
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage('Le message doit contenir maximum 2000 caractères')
];

// POST /api/quote
router.post('/', quoteValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Erreur de validation',
        errors: errors.array()
      });
    }

    const {
      name,
      email,
      phone,
      company,
      serviceType,
      surface,
      frequency,
      address,
      message
    } = req.body;

    // Prepare email content
    const quoteData = {
      name,
      email,
      phone,
      company: company || 'Non fourni',
      serviceType,
      surface: surface || 'Non fourni',
      frequency,
      address,
      message: message || 'Aucun message supplémentaire'
    };

    // Send email
    await sendQuoteEmail(quoteData);

    // Log the quote request (in production, save to database)
    console.log('Quote request:', {
      name,
      email,
      serviceType,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les 24 heures.'
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.'
    });
  }
});

export default router;
