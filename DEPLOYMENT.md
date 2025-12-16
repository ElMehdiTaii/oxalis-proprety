# DÉPLOIEMENT

## Déploiement Frontend (Vercel)

### Méthode 1: Via le CLI Vercel

1. Installer Vercel CLI:
```bash
npm i -g vercel
```

2. Se connecter:
```bash
vercel login
```

3. Déployer depuis le dossier frontend:
```bash
cd frontend
vercel
```

4. Pour la production:
```bash
vercel --prod
```

### Méthode 2: Via l'interface Vercel

1. Allez sur https://vercel.com
2. Connectez votre repository GitHub/GitLab
3. Sélectionnez le dossier `frontend`
4. Configuration automatique détectée (Vite)
5. Déployez !

**Variables d'environnement Vercel:**
- Aucune nécessaire côté frontend si l'API est sur un domaine séparé

---

## Déploiement Backend (Railway)

### Via Railway CLI

1. Installer Railway CLI:
```bash
npm i -g @railway/cli
```

2. Login:
```bash
railway login
```

3. Initialiser depuis le dossier backend:
```bash
cd backend
railway init
```

4. Déployer:
```bash
railway up
```

5. Configurer les variables d'environnement:
```bash
railway variables set NODE_ENV=production
railway variables set SMTP_HOST=smtp.gmail.com
railway variables set SMTP_PORT=587
railway variables set SMTP_USER=votre-email@gmail.com
railway variables set SMTP_PASS=votre-mot-de-passe
railway variables set FRONTEND_URL=https://votre-domaine-frontend.vercel.app
```

### Via l'interface Railway

1. Allez sur https://railway.app
2. Créez un nouveau projet
3. Connectez votre repository
4. Sélectionnez le dossier `backend`
5. Ajoutez les variables d'environnement dans Settings
6. Déployez !

---

## Déploiement Backend (Heroku)

1. Créer une app Heroku:
```bash
cd backend
heroku create oxalis-proprete-api
```

2. Configurer les variables:
```bash
heroku config:set NODE_ENV=production
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_USER=votre-email@gmail.com
heroku config:set SMTP_PASS=votre-mot-de-passe
heroku config:set FRONTEND_URL=https://votre-domaine-frontend.vercel.app
```

3. Déployer:
```bash
git push heroku main
```

---

## Déploiement Backend (DigitalOcean App Platform)

1. Connectez votre repository GitHub/GitLab
2. Sélectionnez le dossier `backend`
3. Configuration:
   - Type: Web Service
   - Build Command: `npm install`
   - Run Command: `npm start`
   - Port: 5000

4. Ajoutez les variables d'environnement dans l'interface

---

## Déploiement Fullstack (Render)

### Backend

1. Créez un nouveau Web Service sur https://render.com
2. Connectez votre repository
3. Configuration:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Ajoutez les variables d'environnement

### Frontend

1. Créez un nouveau Static Site
2. Configuration:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Publish Directory: `dist`

---

## Configuration DNS et Domaine

### Vercel

1. Allez dans Project Settings > Domains
2. Ajoutez votre domaine personnalisé
3. Configurez les enregistrements DNS selon les instructions

### Backend avec domaine personnalisé

1. Configurez un enregistrement A ou CNAME
2. Pointez vers l'IP/URL fournie par votre hébergeur
3. Ajoutez un certificat SSL (Let's Encrypt)

---

## Checklist Avant Production

### Frontend
- [ ] Variables d'environnement configurées
- [ ] Build testé localement (`npm run build && npm run preview`)
- [ ] URLs API mises à jour avec le domaine de production
- [ ] Favicon et meta tags configurés
- [ ] Google Analytics ajouté (optionnel)
- [ ] Robots.txt et sitemap.xml créés

### Backend
- [ ] Toutes les variables d'environnement en place
- [ ] CORS configuré avec le domaine frontend
- [ ] Rate limiting activé
- [ ] Logs configurés
- [ ] Email SMTP testé
- [ ] Health check endpoint fonctionnel
- [ ] Certificat SSL activé

---

## Mise à Jour du Projet

### Vercel
```bash
cd frontend
git push origin main
# Déploiement automatique
```

### Railway/Heroku
```bash
cd backend
git push railway main  # ou heroku main
```

---

## Monitoring et Logs

### Vercel
- Accès aux logs dans le dashboard Vercel
- Analytics intégré

### Railway
```bash
railway logs
```

### Heroku
```bash
heroku logs --tail
```

---

## Backup et Sauvegarde

1. **Code**: Repository Git (GitHub/GitLab)
2. **Variables d'environnement**: Sauvegardez dans un gestionnaire de mots de passe
3. **Base de données**: Mettez en place des backups automatiques si vous en ajoutez une

---

## Support Production

En cas de problème en production:

1. Vérifiez les logs
2. Testez le health check: `https://api.votredomaine.com/api/health`
3. Vérifiez les variables d'environnement
4. Redémarrez le service si nécessaire

---

## Coûts Estimés (Gratuit au départ)

- **Vercel**: Plan gratuit suffisant pour démarrer
- **Railway**: $5/mois après crédit gratuit
- **Heroku**: Plan gratuit arrêté, ~$7/mois minimum
- **Render**: Plan gratuit disponible
- **DigitalOcean**: À partir de $5/mois

---

**Note**: Assurez-vous de mettre à jour `FRONTEND_URL` dans le backend avec l'URL réelle de production !
