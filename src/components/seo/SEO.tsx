import { Helmet } from "react-helmet-async";
import {
  businessInfo,
  defaultSeo,
  seoKeywords,
  siteUrl,
} from "@/config/seo";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
};

const buildJsonLd = () => {
  const logo = `${siteUrl}/shirdi-cab-logo.svg`;
  const sameAs = ["https://rohitranmale.in"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: businessInfo.name,
        legalName: businessInfo.legalName,
        url: siteUrl,
        logo,
        image: defaultSeo.image,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        sameAs,
      },
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": `${siteUrl}/#localbusiness`,
        name: businessInfo.name,
        url: siteUrl,
        image: defaultSeo.image,
        logo,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          ...businessInfo.address,
        },
        areaServed: businessInfo.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        parentOrganization: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: businessInfo.name,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
};

export const SEO = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  canonical = defaultSeo.canonical,
  image = defaultSeo.image,
  noIndex = false,
}: SEOProps) => {
  const robots = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(buildJsonLd())}
      </script>
    </Helmet>
  );
};
