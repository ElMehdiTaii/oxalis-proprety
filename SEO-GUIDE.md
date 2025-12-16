# Guide SEO et Optimisations

## 📈 Optimisations SEO Implémentées

### Meta Tags
- ✅ Title optimisés par page
- ✅ Descriptions uniques
- ✅ Keywords pertinents
- ✅ Open Graph pour réseaux sociaux
- ✅ Twitter Cards
- ✅ Balises canonical

### Performance
- ✅ Lazy loading des images
- ✅ Code splitting automatique
- ✅ Compression des assets
- ✅ Minification CSS/JS
- ✅ Cache browser optimisé

### Structure
- ✅ URLs propres et SEO-friendly
- ✅ Hiérarchie H1-H6 respectée
- ✅ Sitemap.xml (à générer)
- ✅ Robots.txt configuré
- ✅ Schema.org structured data

---

## 🚀 Optimisations Supplémentaires à Implémenter

### 1. Installation de React Helmet Async

```bash
cd frontend
npm install react-helmet-async
```

### 2. Configuration dans App.jsx

```jsx
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* ... */}
      </Router>
    </HelmetProvider>
  );
}
```

### 3. Utilisation dans les Pages

```jsx
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Accueil - OXALIS PROPRETE"
        description="Service de nettoyage professionnel à Lyon..."
      />
      {/* Contenu */}
    </>
  );
};
```

---

## 📄 Génération du Sitemap

### Créer sitemap.xml dans public/

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://oxalis-proprete.fr/</loc>
    <lastmod>2025-12-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://oxalis-proprete.fr/services</loc>
    <lastmod>2025-12-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://oxalis-proprete.fr/about</loc>
    <lastmod>2025-12-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://oxalis-proprete.fr/projects</loc>
    <lastmod>2025-12-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://oxalis-proprete.fr/contact</loc>
    <lastmod>2025-12-16</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://oxalis-proprete.fr/quote</loc>
    <lastmod>2025-12-16</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 🤖 Configuration Robots.txt

### Créer robots.txt dans public/

```txt
User-agent: *
Allow: /

Sitemap: https://oxalis-proprete.fr/sitemap.xml
```

---

## 📊 Google Analytics & Search Console

### 1. Google Analytics 4

Ajoutez dans `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre propriété
3. Vérifiez avec meta tag ou fichier HTML
4. Soumettez votre sitemap

---

## 🎯 Mots-clés Ciblés

### Principaux
- nettoyage Lyon
- entreprise nettoyage Lyon
- nettoyage professionnel Lyon
- nettoyage bureaux Lyon
- nettoyage copropriété Lyon

### Longue traîne
- société de nettoyage à Lyon
- service de nettoyage professionnel Lyon 7
- entreprise nettoyage industriel Lyon
- nettoyage vitrerie Lyon
- devis nettoyage gratuit Lyon

---

## 🏆 Structured Data (Schema.org)

### Ajoutez dans index.html

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OXALIS PROPRETE",
  "image": "https://oxalis-proprete.fr/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "183 GR DE LA GUILLOTIERE",
    "addressLocality": "Lyon",
    "postalCode": "69007",
    "addressCountry": "FR"
  },
  "telephone": "+33478542869",
  "email": "contact@oxalis-proprete.fr",
  "openingHours": "Mo-Fr 09:00-12:30,14:00-17:30",
  "priceRange": "$$",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.7511",
    "longitude": "4.8391"
  },
  "sameAs": [
    "https://facebook.com/oxalisproprete",
    "https://linkedin.com/company/oxalisproprete"
  ]
}
</script>
```

---

## ⚡ Optimisations Performance

### 1. Compression des Images

Utilisez:
- WebP format
- Lazy loading
- Responsive images

```jsx
<img 
  src="image.webp" 
  alt="Description"
  loading="lazy"
  srcSet="image-400.webp 400w, image-800.webp 800w"
  sizes="(max-width: 768px) 400px, 800px"
/>
```

### 2. Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./pages/Projects'));

<Suspense fallback={<Loader />}>
  <Projects />
</Suspense>
```

### 3. Preload des ressources critiques

Dans `index.html`:

```html
<link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
```

---

## 📱 Optimisation Mobile

- ✅ Responsive design
- ✅ Touch-friendly (44px minimum)
- ✅ Pas de hover obligatoire
- ✅ Performance mobile optimisée
- ✅ Viewport configuré

---

## 🔍 Tests SEO

### Outils recommandés

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **Lighthouse** (Chrome DevTools)
4. **SEMrush** ou **Ahrefs** (payant)
5. **Google Search Console**

### Objectifs de Performance

- PageSpeed Score: > 90
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1

---

## 📝 Checklist SEO

### Technique
- [ ] Sitemap.xml créé et soumis
- [ ] Robots.txt configuré
- [ ] Structured data ajouté
- [ ] Meta tags optimisés
- [ ] URLs propres
- [ ] HTTPS activé
- [ ] Temps de chargement < 3s

### Contenu
- [ ] Mots-clés ciblés
- [ ] Contenu unique et de qualité
- [ ] Hiérarchie des titres
- [ ] Alt text sur images
- [ ] Liens internes
- [ ] Call-to-actions clairs

### Off-Page
- [ ] Google My Business créé
- [ ] Réseaux sociaux actifs
- [ ] Backlinks de qualité
- [ ] Citations locales
- [ ] Avis clients

---

## 🎯 Objectifs Mensuels

1. **Mois 1**: Configuration de base + Google Search Console
2. **Mois 2**: Optimisation contenu + premiers backlinks
3. **Mois 3**: Analyse et ajustements
4. **Mois 6**: Évaluation ROI et stratégie

---

## 📞 Support SEO

Pour des questions SEO spécifiques, consultez:
- Google Search Central: https://developers.google.com/search
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
