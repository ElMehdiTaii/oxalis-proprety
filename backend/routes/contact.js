import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// Validation rules
const contactValidation = [
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
    .optional()
    .trim()
    .matches(/^[+]?[\d\s()-]+$/).withMessage('Numéro de téléphone invalide'),
  body('subject')
    .trim()
    .notEmpty().withMessage('Le sujet est requis')
    .isLength({ min: 5, max: 200 }).withMessage('Le sujet doit contenir entre 5 et 200 caractères'),
  body('message')
    .trim()
    .notEmpty().withMessage('Le message est requis')
    .isLength({ min: 10, max: 2000 }).withMessage('Le message doit contenir entre 10 et 2000 caractères')
];

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
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

    const { name, email, phone, subject, message } = req.body;

    // Prepare email content
    const emailData = {
      from: email,
      name,
      phone: phone || 'Non fourni',
      subject,
      message
    };

    // Send email
    await sendContactEmail(emailData);

    // Log the contact (in production, save to database)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.'
    });
  }
});

export default router;
