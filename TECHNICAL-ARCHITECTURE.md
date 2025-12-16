# Architecture Technique - OXALIS PROPRETE

## 📋 Vue d'Ensemble

Site web moderne full-stack pour entreprise de nettoyage professionnel avec:
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express + Nodemailer
- **Design**: Type Apple (minimaliste, épuré, animations fluides)
- **Déploiement**: Vercel (frontend) + Railway/Heroku (backend)

---

## 🏗️ Architecture Frontend

### Stack Technique
```
React 18.2.0
├── Vite 5.0.8           # Build tool ultra-rapide
├── React Router 6.20.0  # Navigation SPA
├── Tailwind CSS 3.4.0   # Utility-first CSS
├── Framer Motion 10.16  # Animations fluides
└── Axios 1.6.2          # Client HTTP
```

### Structure des Composants

```
src/
├── components/
│   ├── Header.jsx           # Navigation + Dark Mode toggle
│   ├── Footer.jsx           # Footer avec liens et infos
│   ├── Hero.jsx             # Section hero animée
│   ├── ServiceCard.jsx      # Carte de service réutilisable
│   ├── ScrollToTop.jsx      # Scroll to top on route change
│   └── SEO.jsx              # Meta tags dynamiques
│
├── pages/
│   ├── Home.jsx             # Page d'accueil
│   ├── Services.jsx         # Liste des services
│   ├── About.jsx            # À propos de l'entreprise
│   ├── Projects.jsx         # Portfolio de réalisations
│   ├── Contact.jsx          # Formulaire de contact
│   └── Quote.jsx            # Demande de devis
│
├── App.jsx                  # Configuration routes + Dark Mode
├── main.jsx                 # Point d'entrée React
└── index.css                # Styles globaux Tailwind
```

### Design System

#### Couleurs (Tailwind)
```js
primary: {
  50: '#f0f9ff',
  500: '#0ea5e9',  // Couleur principale
  600: '#0284c7',
  900: '#0c4a6e'
}

dark: {
  50: '#f9fafb',
  800: '#1f2937',
  900: '#111827',
  950: '#030712'
}
```

#### Typographie
- **Font**: System fonts (SF Pro Display, Segoe UI)
- **Scale**: Text-xl à text-7xl
- **Weight**: Normal (400) à Bold (700)

#### Animations
```js
'fade-in': fadeIn 0.6s ease-in-out
'slide-up': slideUp 0.6s ease-out
'scale-in': scaleIn 0.5s ease-out
'float': float 6s infinite (pour bulles décoratives)
```

#### Composants Réutilisables
```css
.btn-primary    # Bouton principal bleu
.btn-secondary  # Bouton secondaire bordure
.card           # Carte avec ombre et hover
.glass-effect   # Effet glassmorphism
```

---

## 🔧 Architecture Backend

### Stack Technique
```
Node.js + Express
├── express 4.18.2         # Framework web
├── nodemailer 6.9.7       # Envoi d'emails
├── helmet 7.1.0           # Sécurité HTTP headers
├── cors 2.8.5             # Cross-Origin Resource Sharing
├── express-validator 7.0  # Validation données
└── express-rate-limit 7.1 # Protection contre abus
```

### Structure API

```
backend/
├── routes/
│   ├── contact.js         # POST /api/contact
│   └── quote.js           # POST /api/quote
│
├── services/
│   └── emailService.js    # Service d'envoi d'emails
│
├── server.js              # Configuration serveur Express
├── .env.example           # Template variables d'environnement
└── package.json
```

### Endpoints API

#### POST /api/contact
**Body:**
```json
{
  "name": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "subject": "string (required, 5-200 chars)",
  "message": "string (required, 10-2000 chars)"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Votre message a été envoyé avec succès..."
}
```

**Response Error (400/500):**
```json
{
  "success": false,
  "message": "Error message",
  "errors": [...]  // Validation errors
}
```

#### POST /api/quote
**Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "company": "string (optional)",
  "serviceType": "string (required)",
  "surface": "number (optional)",
  "frequency": "string (required)",
  "address": "string (required)",
  "message": "string (optional)"
}
```

#### GET /api/health
**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2025-12-16T10:00:00.000Z"
}
```

### Sécurité

#### Mesures Implémentées
- ✅ **Helmet**: Headers HTTP sécurisés
- ✅ **CORS**: Origine frontend autorisée uniquement
- ✅ **Rate Limiting**: 100 requêtes/15min par IP
- ✅ **Validation**: express-validator sur tous les inputs
- ✅ **Sanitization**: Nettoyage des données
- ✅ **Environment Variables**: Secrets dans .env

#### Configuration CORS
```js
cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
})
```

#### Rate Limiting
```js
windowMs: 15 * 60 * 1000,  // 15 minutes
max: 100                     // 100 requests max
```

---

## 📧 Service Email

### Configuration SMTP
```js
host: 'smtp.gmail.com',
port: 587,
auth: {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS  // App password
}
```

### Templates Email

#### Contact Email
- **Sujet**: [CONTACT] {subject}
- **Contenu**: HTML formaté avec infos client
- **Reply-To**: Email du client

#### Quote Email
- **Sujet**: [DEVIS] Nouvelle demande - {serviceType}
- **Contenu**: HTML formaté avec détails service
- **Sections**: 
  - Infos client
  - Détails service (highlighted)
  - Message complémentaire
  - Alert "Répondre sous 24h"

---

## 🎨 Features UI/UX

### Dark Mode
- Toggle dans Header
- Sauvegarde dans localStorage
- Respect de prefers-color-scheme
- Transition fluide (300ms)

### Animations
- **Scroll Animations**: useInView + Framer Motion
- **Page Transitions**: Route change animations
- **Hover Effects**: Scale, translate, shadow
- **Loading States**: Skeleton screens

### Responsive Design
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Breakpoints Tailwind:
```js
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1280px',
'2xl': '1536px'
```

### Accessibilité
- ✅ Contraste WCAG AA
- ✅ Navigation clavier
- ✅ ARIA labels
- ✅ Focus visible
- ✅ Alt text images
- ✅ Semantic HTML

---

## 🚀 Performance

### Optimisations Frontend
- **Code Splitting**: Automatique avec Vite
- **Tree Shaking**: Modules inutilisés supprimés
- **Minification**: CSS + JS en production
- **Compression**: Gzip/Brotli
- **Lazy Loading**: Images et composants

### Métriques Cibles
```
First Contentful Paint: < 1.8s
Time to Interactive: < 3.8s
Cumulative Layout Shift: < 0.1
Lighthouse Score: > 90
```

### Optimisations Backend
- **Compression**: Réponses gzip
- **Caching**: Headers cache optimisés
- **Connection pooling**: Si DB ajoutée
- **Error handling**: Middleware centralisé

---

## 📊 SEO

### Meta Tags
- Title unique par page
- Description 150-160 caractères
- Keywords pertinents
- Open Graph (Facebook)
- Twitter Cards

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OXALIS PROPRETE",
  ...
}
```

### Fichiers
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Alt text images

---

## 🔄 Flux de Données

### Contact Form Flow
```
User Input (Contact.jsx)
    ↓
Validation Frontend
    ↓
POST /api/contact
    ↓
Validation Backend (express-validator)
    ↓
Send Email (Nodemailer)
    ↓
Response to Frontend
    ↓
Success/Error Message Display
```

### Quote Request Flow
```
User Input (Quote.jsx)
    ↓
Validation Frontend
    ↓
POST /api/quote
    ↓
Validation Backend
    ↓
Format Email with Quote Details
    ↓
Send Email to Company
    ↓
Response to Frontend
    ↓
Success Message + Form Reset
```

---

## 🌐 Déploiement

### Frontend (Vercel)
```
Build Command: npm run build
Output Directory: dist
Environment Variables: None required
```

### Backend (Railway/Heroku)
```
Build Command: npm install
Start Command: npm start
Environment Variables:
  - NODE_ENV=production
  - PORT=5000
  - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
  - FRONTEND_URL
```

### CI/CD Pipeline (Optionnel)
```
GitHub Push
    ↓
GitHub Actions
    ↓
Run Tests
    ↓
Build
    ↓
Deploy to Production
```

---

## 📦 Variables d'Environnement

### Backend (.env)
```env
# Server
PORT=5000
NODE_ENV=development

# SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@oxalis-proprete.fr

# Frontend
FRONTEND_URL=http://localhost:3000

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend
Aucune variable d'environnement côté frontend (hardcoded: http://localhost:5000 en dev)

---

## 🧪 Tests (À Implémenter)

### Frontend
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e
```

### Backend
```bash
# Unit tests
npm test

# Integration tests
npm run test:integration
```

### Stack de Tests Suggérée
- **Frontend**: Vitest + React Testing Library + Playwright
- **Backend**: Jest + Supertest

---

## 📈 Monitoring (À Implémenter)

### Frontend
- Google Analytics 4
- Vercel Analytics
- Sentry (error tracking)

### Backend
- Application logs
- Error tracking (Sentry)
- Uptime monitoring (UptimeRobot)
- Performance monitoring (New Relic)

---

## 🔐 Sécurité - Checklist

### Frontend
- ✅ XSS protection (React auto-escape)
- ✅ HTTPS en production
- ✅ Validation côté client
- ✅ No sensitive data in localStorage
- ✅ Secure cookies (httpOnly)

### Backend
- ✅ Helmet (HTTP headers)
- ✅ CORS restricted
- ✅ Rate limiting
- ✅ Input validation
- ✅ Sanitization
- ✅ Environment variables
- ✅ No credentials in code
- ⏳ CSRF protection (if stateful)
- ⏳ SQL injection protection (if DB)

---

## 📚 Documentation

### Code Documentation
- JSDoc comments dans fonctions complexes
- README.md complet avec exemples
- Inline comments pour logique métier

### API Documentation
- Endpoints documentés dans README
- Examples de requêtes/réponses
- Status codes expliqués

---

## 🛠️ Maintenance

### Updates Régulières
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Major updates
npx npm-check-updates -u
npm install
```

### Logs & Debugging
```bash
# Frontend (Vite)
console.log debugging
React DevTools

# Backend
console.log/console.error
Morgan HTTP logging (à ajouter)
```

---

## 📊 Métriques de Succès

### Technique
- Uptime: > 99.9%
- Response time: < 200ms
- Error rate: < 1%
- Build time: < 2min

### Business
- Conversion rate (quote requests)
- Bounce rate < 40%
- Page views
- User engagement

---

## 🎯 Prochaines Étapes Techniques

1. **Ajouter base de données** (PostgreSQL/MongoDB)
2. **Implémenter tests** (Vitest + Playwright)
3. **CI/CD Pipeline** (GitHub Actions)
4. **Monitoring** (Sentry + Analytics)
5. **Authentification** (JWT + bcrypt)
6. **Dashboard Admin** (React Admin/Retool)

---

**Documentation mise à jour**: Décembre 2025
**Version**: 1.0.0
**Auteur**: GitHub Copilot
