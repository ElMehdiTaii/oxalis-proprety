import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = 'OXALIS PROPRETE - Service de nettoyage professionnel à Lyon',
  description = 'OXALIS PROPRETE intervient auprès des syndics, entreprises, collectivités et particuliers pour tous vos besoins en nettoyage professionnel à Lyon.',
  keywords = 'nettoyage, propreté, Lyon, entreprise, syndic, collectivité, bureaux, copropriété, industriel',
  image = 'https://oxalis-proprete.fr/og-image.jpg',
  url = 'https://oxalis-proprete.fr',
  type = 'website',
  schemaMarkup = null
}) => {
  const siteUrl = 'https://oxalis-proprete.fr';
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Schema.org LocalBusiness structured data
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OXALIS PROPRETE",
    "image": fullImage,
    "description": description,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+33478542869",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "183 GR DE LA GUILLOTIERE",
      "addressLocality": "Lyon",
      "postalCode": "69007",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.7484,
      "longitude": 4.8467
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/oxalisproprete",
      "https://www.linkedin.com/company/oxalisproprete"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="OXALIS PROPRETE" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@oxalisproprete" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="OXALIS PROPRETE" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup || defaultSchema)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  schemaMarkup: PropTypes.object
};

export default SEO;
