import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://projectdignityhobbs.org';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

// Page types: 'website' | 'article' | 'breadcrumb'
// breadcrumbs: [{ name, item }] — item is the full URL
const SEO = ({ title, description, path = '/', type = 'website', breadcrumbs, article }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const altLang = lang === 'en' ? 'es' : 'en';

  const url = `${BASE_URL}${path}`;
  const altUrl = `${BASE_URL}/${altLang}${path}`;

  /* ── Organisation schema (every page) ── */
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${BASE_URL}/#organization`,
    "name": "Project Dignity Hobbs",
    "alternateName": "Proyecto Dignidad Hobbs",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo.png`,
      "width": 200,
      "height": 200
    },
    "email": "hello@projectdignity.org",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Community Way",
      "addressLocality": "Hobbs",
      "addressRegion": "NM",
      "postalCode": "88240",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/projectdignityhobbs",
      "https://www.instagram.com/projectdignityhobbs",
      "https://twitter.com/projectdignity"
    ]
  };

  /* ── BreadcrumbList schema ── */
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      ...breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": crumb.name,
        "item": crumb.item || `${BASE_URL}${crumb.path || ''}`
      }))
    ]
  } : null;

  /* ── Article schema (blog posts, news) ── */
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": article.image || OG_IMAGE,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logo.png` }
    }
  } : null;

  const fullTitle = `${title} | Project Dignity Hobbs`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* hreflang alternates */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="es" href={altUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />

      {/* Open Graph */}
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={lang === 'es' ? 'es_MX' : 'en_US'} />
      <meta property="og:locale:alternate" content={altLang === 'es' ? 'es_MX' : 'en_US'} />
      <meta property="og:site_name" content="Project Dignity Hobbs" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@projectdignity" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD: Organization (every page) */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>

      {/* JSON-LD: BreadcrumbList (pages with breadcrumbs) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}

      {/* JSON-LD: Article (blog / news pages) */}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SYBBFYC33"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0SYBBFYC33');
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
