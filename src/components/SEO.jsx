import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path }) => {
  const url = `https://projectdignity.org${path || ''}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Project Dignity Hobbs",
    "url": url,
    "logo": "https://projectdignity.org/logo.png",
    "email": "hello@projectdignity.org",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hobbs",
        "addressRegion": "NM",
        "addressCountry": "US"
      }
    }
  };

  return (
    <Helmet>
      <title>{`${title} | Project Dignity Hobbs`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | Project Dignity`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://projectdignity.org/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | Project Dignity`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://projectdignity.org/logo.png" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
