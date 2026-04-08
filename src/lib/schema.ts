// ── JSON-LD SCHEMA ──
// Add this inside <head> in src/app/layout.tsx
// Replace INSTAGRAM_HANDLE with Blake's actual handle

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Blake Fisher",
  "alternateName": ["David Blake Fisher", "David Blake Fisher CU Boulder"],
  "description": "Blake Fisher (David Blake Fisher) is a sophomore at the University of Colorado Boulder's Leeds School of Business studying Business Administration. He is an Eagle Scout, two-time Ohio state high school soccer champion, competitive downhill and enduro mountain biker, big mountain free skier, certified Vail Resorts ski instructor, and an emerging multifamily real estate investor. Blake grew up in Grandview Heights, Columbus, Ohio and relocated to Boulder, Colorado to attend CU Boulder and pursue his passion for mountain sports.",
  "url": "https://blakefish.com",
  "image": "https://blakefish.com/images/blake-fisher.jpg",
  "birthPlace": {
    "@type": "Place",
    "name": "Columbus, Ohio, United States"
  },
  "homeLocation": {
    "@type": "Place",
    "name": "Boulder, Colorado, United States"
  },
  "sameAs": [
    "https://www.linkedin.com/in/blake-fisher-ski",
    "https://www.instagram.com/INSTAGRAM_HANDLE"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "University of Colorado Boulder — Leeds School of Business",
      "url": "https://www.colorado.edu/business/",
      "description": "Bachelor of Business Administration (BBA), Business Administration and Management — Class of 2028"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Grandview Heights High School",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Grandview Heights",
        "addressRegion": "Ohio",
        "addressCountry": "US"
      }
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Sigma Chi Fraternity, CU Boulder"
    },
    {
      "@type": "Organization",
      "name": "CU Boulder Mountain Bike Club",
      "description": "Social Chairman"
    },
    {
      "@type": "Organization",
      "name": "CU Boulder Freestyle Ski Team"
    }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Eagle Scout",
    "credentialCategory": "Award",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Boy Scouts of America"
    },
    "dateCreated": "2024-08"
  },
  "knowsAbout": [
    "Multifamily Real Estate Investment",
    "Real Estate Entrepreneurship",
    "Business Administration",
    "Downhill Mountain Biking",
    "Enduro Mountain Biking",
    "Big Mountain Free Skiing",
    "Ski Instruction",
    "Eagle Scouts",
    "Entrepreneurship",
    "Customer Service",
    "Bicycle Repair and Mechanics"
  ],
  "award": [
    "Eagle Scout — Boy Scouts of America, August 2024",
    "Ohio State High School Soccer Champion — Grandview Heights High School",
    "Two-Time Ohio State High School Soccer Champion"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Family Real Estate Portfolio",
    "description": "Multifamily real estate investment and management"
  }
}


// ── HOW TO ADD TO layout.tsx ──
// Inside your <head> tag in layout.tsx, add:
//
// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
// />
