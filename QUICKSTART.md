# OXALIS PROPRETE - Guide de Démarrage Rapide

## Installation Rapide

### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```
Ouvre http://localhost:3000

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env
# Éditez .env avec vos informations SMTP
npm run dev
```
API disponible sur http://localhost:5000

## Configuration Email Rapide (Gmail)

1. Allez sur https://myaccount.google.com/apppasswords
2. Créez un mot de passe d'application
3. Dans `backend/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=mot-de-passe-app-genere
```

## Commandes Essentielles

### Frontend
- `npm run dev` - Développement
- `npm run build` - Production
- `npm run preview` - Prévisualiser

### Backend
- `npm run dev` - Développement avec nodemon
- `npm start` - Production

## Structure des Pages

- `/` - Accueil
- `/services` - Services
- `/about` - À propos
- `/projects` - Réalisations
- `/contact` - Contact
- `/quote` - Demande de devis

## Personnalisation

### Couleurs (tailwind.config.js)
```js
colors: {
  primary: {
    500: '#0ea5e9', // Couleur principale
  }
}
```

### Logo et Textes
- Header: `frontend/src/components/Header.jsx`
- Footer: `frontend/src/components/Footer.jsx`

## Support

Questions ? contact@oxalis-proprete.fr
