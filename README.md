# OXALIS PROPRETE - Site Web Complet

Un site web moderne et élégant pour OXALIS PROPRETE, entreprise de nettoyage professionnel à Lyon, développé avec **React** (frontend) et **Node.js/Express** (backend).

## 🎨 Caractéristiques

### Design Type Apple
- Interface épurée et minimaliste
- Animations fluides avec Framer Motion
- Transitions élégantes et effets de survol
- Dark Mode intégré
- Design responsive (mobile, tablette, desktop)
- Typographie moderne et claire

### Fonctionnalités
- ✨ Page d'accueil avec Hero section dynamique
- 🛠️ Page Services détaillée
- 📞 Formulaire de contact avec validation
- 📋 Système de demande de devis
- 📁 Portfolio de projets réalisés
- 👥 Page À propos
- 🌙 Mode sombre / clair
- 📱 100% Responsive
- ⚡ Performance optimisée
- ♿ Accessible (WCAG)

## 🏗️ Architecture

```
oxalis-proprete-website/
├── frontend/                 # Application React
│   ├── src/
│   │   ├── components/      # Composants réutilisables
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/           # Pages de l'application
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Quote.jsx
│   │   ├── App.jsx          # Composant principal
│   │   ├── main.jsx         # Point d'entrée
│   │   └── index.css        # Styles globaux
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── backend/                 # API Node.js/Express
    ├── routes/              # Routes API
    │   ├── contact.js
    │   └── quote.js
    ├── services/            # Services métier
    │   └── emailService.js
    ├── server.js            # Serveur Express
    ├── package.json
    └── .env.example
```

## 📋 Prérequis

- **Node.js** >= 18.x
- **npm** ou **yarn**
- Un compte email SMTP (Gmail, SendGrid, etc.) pour l'envoi d'emails

## 🚀 Installation

### 1. Cloner le projet

```bash
cd oxalis-proprete-website
```

### 2. Installation du Frontend

```bash
cd frontend
npm install
```

### 3. Installation du Backend

```bash
cd ../backend
npm install
```

### 4. Configuration de l'environnement

Créez un fichier `.env` dans le dossier `backend/` à partir de `.env.example`:

```bash
cp .env.example .env
```

Éditez le fichier `.env` avec vos informations:

```env
PORT=5000
NODE_ENV=development

# Configuration Email SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app
SMTP_FROM=noreply@oxalis-proprete.fr

# URL Frontend
FRONTEND_URL=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Configuration Gmail (recommandé)

1. Activez la validation en 2 étapes sur votre compte Gmail
2. Générez un mot de passe d'application: https://myaccount.google.com/apppasswords
3. Utilisez ce mot de passe dans `SMTP_PASS`

## 🎮 Démarrage

### Mode Développement

Ouvrez **deux terminaux** :

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Le serveur démarre sur `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
L'application s'ouvre sur `http://localhost:3000`

### Mode Production

**Build du Frontend:**
```bash
cd frontend
npm run build
```

**Démarrer le Backend:**
```bash
cd backend
npm start
```

## 📡 API Endpoints

### Contact
```
POST /api/contact
Body: {
  name: string,
  email: string,
  phone?: string,
  subject: string,
  message: string
}
```

### Devis
```
POST /api/quote
Body: {
  name: string,
  email: string,
  phone: string,
  company?: string,
  serviceType: string,
  surface?: number,
  frequency: string,
  address: string,
  message?: string
}
```

### Health Check
```
GET /api/health
Response: { status: "OK", message: "Server is running", timestamp: string }
```

## 🎨 Technologies Utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **React Router** - Navigation
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Axios** - Client HTTP
- **React Icons** - Icônes
- **React Intersection Observer** - Détection de scroll

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Nodemailer** - Envoi d'emails
- **Helmet** - Sécurité HTTP
- **CORS** - Cross-Origin Resource Sharing
- **Express Validator** - Validation des données
- **Express Rate Limit** - Protection contre les abus
- **Dotenv** - Variables d'environnement

## 🔒 Sécurité

- Validation des données côté serveur
- Protection CSRF avec Helmet
- Rate limiting sur les endpoints API
- Sanitization des entrées utilisateur
- CORS configuré
- Variables d'environnement pour les secrets

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- 📱 Mobile (320px - 767px)
- 📱 Tablette (768px - 1023px)
- 💻 Desktop (1024px+)

## ⚡ Performances

- Code splitting automatique avec Vite
- Lazy loading des composants
- Images optimisées
- CSS minifié en production
- JavaScript minifié et compressé
- Animations performantes avec Framer Motion

## ♿ Accessibilité

- Contrastes de couleurs WCAG AA
- Navigation au clavier
- Labels ARIA
- Textes alternatifs pour les images
- Focus visible

## 🌐 Déploiement

### Frontend (Vercel, Netlify, etc.)

**Vercel:**
```bash
cd frontend
npm run build
vercel --prod
```

**Netlify:**
```bash
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

### Backend (Heroku, Railway, DigitalOcean, etc.)

**Heroku:**
```bash
cd backend
heroku create oxalis-proprete-api
git push heroku main
heroku config:set NODE_ENV=production
```

**Variables d'environnement à configurer en production:**
- `PORT`
- `NODE_ENV=production`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `FRONTEND_URL` (URL de production du frontend)

## 🛠️ Scripts Disponibles

### Frontend
```bash
npm run dev       # Démarre le serveur de développement
npm run build     # Build pour la production
npm run preview   # Prévisualise le build de production
npm run lint      # Vérifie le code avec ESLint
```

### Backend
```bash
npm start         # Démarre le serveur (production)
npm run dev       # Démarre avec nodemon (développement)
```

## 📝 Améliorations Possibles

- [ ] Authentification admin
- [ ] Dashboard d'administration
- [ ] Base de données (MongoDB, PostgreSQL)
- [ ] Blog/Actualités
- [ ] Système de réservation en ligne
- [ ] Chat en direct
- [ ] Multi-langue (i18n)
- [ ] Tests unitaires et d'intégration
- [ ] PWA (Progressive Web App)
- [ ] Analytics et tracking
- [ ] SEO avancé avec meta tags dynamiques
- [ ] Sitemap XML
- [ ] RSS Feed

## 🐛 Dépannage

### Le frontend ne se connecte pas au backend

Vérifiez que:
1. Le backend tourne sur le port 5000
2. L'URL dans `axios` correspond bien à `http://localhost:5000`
3. CORS est bien configuré dans le backend

### Les emails ne sont pas envoyés

Vérifiez que:
1. Les variables d'environnement SMTP sont correctes
2. Vous utilisez un mot de passe d'application (Gmail)
3. Le port 587 n'est pas bloqué par un firewall

### Erreur de compilation Tailwind

```bash
cd frontend
rm -rf node_modules
npm install
```

## 📄 Licence

Ce projet a été créé pour OXALIS PROPRETE. Tous droits réservés.

## 👥 Support

Pour toute question ou support:
- Email: contact@oxalis-proprete.fr
- Téléphone: +33 4 78 54 28 69
- Adresse: 183 GR DE LA GUILLOTIERE, 69007 LYON, France

## 🎯 Objectifs Atteints

✅ Design moderne type Apple avec animations fluides
✅ Frontend React 18+ avec hooks et composants fonctionnels
✅ Structure modulaire et réutilisable
✅ Navigation dynamique et responsive
✅ Backend Node.js/Express léger et performant
✅ API RESTful avec validation
✅ Formulaires de contact et devis fonctionnels
✅ Dark Mode
✅ Animations de scroll
✅ SEO optimisé
✅ Performance et accessibilité
✅ Documentation complète

---

**Développé avec ❤️ pour OXALIS PROPRETE**
