export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Value Profits System",
  "alternateName": "VPS",
  "url": "https://valueprofitssystem.dk",
  "logo": "https://valueprofitssystem.dk/logo.png",
  "description": "Lær value betting med dokumenteret strategi og komplet kursus",
  "founder": {
    "@type": "Person",
    "name": "Asger Lindorff Leerskov"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DK",
    "addressLocality": "Denmark"
  },
  "sameAs": [
    "https://www.skool.com/the-value-profits-system/about"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "asger@valueprofitssystem.dk",
    "contactType": "Customer Service",
    "availableLanguage": "Danish"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Value Profits System",
  "url": "https://valueprofitssystem.dk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://valueprofitssystem.dk/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Value Betting System - Komplet Kursus",
  "description": "Lær value betting fra bunden med matematisk tilgang, strategi og bankroll management",
  "provider": {
    "@type": "Organization",
    "name": "Value Profits System",
    "url": "https://valueprofitssystem.dk"
  },
  "educationalLevel": "Beginner to Advanced",
  "inLanguage": "da-DK",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "PT4H"
  },
  "offers": {
    "@type": "Offer",
    "category": "Paid",
    "priceCurrency": "DKK"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "200",
    "bestRating": "5"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kræver det erfaring med betting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nej, vi starter fra bunden. Alt du behøver er disciplin og vilje til at følge systemet. Vi lærer dig alt fra grundlæggende sandsynlighedsregning til avanceret bankroll management."
      }
    },
    {
      "@type": "Question",
      "name": "Hvor meget tid tager det?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De fleste bruger 30-60 minutter dagligt på at placere bets. Kurset tager ca. 4-6 timer at gennemføre, men du kan tage det i dit eget tempo."
      }
    },
    {
      "@type": "Question",
      "name": "Hvad er penge-tilbage garantien?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hvis du følger systemet 100% i minimum 90 dage med 900+ bets og ikke har profit, får du fuld refundering. Vi står bag vores metode."
      }
    },
    {
      "@type": "Question",
      "name": "Er det lovligt i Danmark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, sportsbetting er 100% lovligt i Danmark, og gevinster er skattefrie. Du skal blot være over 18 år og bruge licenserede bookmakere."
      }
    }
  ]
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
