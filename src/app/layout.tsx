import type { Metadata } from "next";
import "./globals.css";

// ============================================
// COMPREHENSIVE GERMAN CITIES DATABASE
// ============================================
const allGermanCities = {
  // Bayern - Franken (Primary Region)
  franken: [
    "Nürnberg", "Würzburg", "Bamberg", "Erlangen", "Fürth", "Ansbach",
    "Bayreuth", "Schweinfurt", "Aschaffenburg", "Coburg", "Hof", "Kulmbach",
    "Forchheim", "Schwabach", "Neumarkt", "Amberg", "Weiden", "Rothenburg ob der Tauber",
    "Dinkelsbühl", "Gunzenhausen", "Weißenburg", "Lauf", "Herzogenaurach", "Zirndorf"
  ],
  // Bayern - Other
  bayernOther: [
    "München", "Augsburg", "Regensburg", "Ingolstadt", "Rosenheim", "Landshut",
    "Passau", "Straubing", "Kempten", "Kaufbeuren", "Memmingen", "Lindau",
    "Garmisch-Partenkirchen", "Bad Reichenhall", "Freising", "Dachau", "Fürstenfeldbruck",
    "Starnberg", "Erding", "Pfaffenhofen", "Neuburg", "Deggendorf", "Cham"
  ],
  // Baden-Württemberg
  badenWuerttemberg: [
    "Stuttgart", "Mannheim", "Karlsruhe", "Freiburg", "Heidelberg", "Ulm",
    "Heilbronn", "Pforzheim", "Reutlingen", "Esslingen", "Ludwigsburg", "Tübingen",
    "Villingen-Schwenningen", "Konstanz", "Aalen", "Sindelfingen", "Schwäbisch Gmünd",
    "Friedrichshafen", "Offenburg", "Baden-Baden", "Rastatt", "Lörrach"
  ],
  // Hessen
  hessen: [
    "Frankfurt", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach", "Hanau",
    "Gießen", "Marburg", "Fulda", "Bad Homburg", "Rüsselsheim", "Wetzlar",
    "Oberursel", "Dreieich", "Bensheim", "Rodgau", "Limburg"
  ],
  // Nordrhein-Westfalen
  nrw: [
    "Köln", "Düsseldorf", "Dortmund", "Essen", "Duisburg", "Bochum",
    "Wuppertal", "Bielefeld", "Bonn", "Münster", "Mönchengladbach", "Gelsenkirchen",
    "Aachen", "Krefeld", "Oberhausen", "Hagen", "Hamm", "Mülheim", "Leverkusen",
    "Solingen", "Herne", "Neuss", "Paderborn", "Recklinghausen", "Bottrop"
  ],
  // Niedersachsen
  niedersachsen: [
    "Hannover", "Braunschweig", "Oldenburg", "Osnabrück", "Wolfsburg", "Göttingen",
    "Salzgitter", "Hildesheim", "Wilhelmshaven", "Delmenhorst", "Celle", "Lüneburg",
    "Lingen", "Nordhorn", "Emden", "Hameln", "Goslar"
  ],
  // Other Major Cities
  other: [
    "Berlin", "Hamburg", "Bremen", "Dresden", "Leipzig", "Chemnitz",
    "Magdeburg", "Erfurt", "Jena", "Weimar", "Potsdam", "Rostock",
    "Schwerin", "Kiel", "Lübeck", "Flensburg", "Saarbrücken", "Mainz",
    "Koblenz", "Trier", "Kaiserslautern"
  ]
};

// Flatten all cities
const allCitiesFlat = Object.values(allGermanCities).flat();

// ============================================
// SEO KEYWORDS GENERATION
// ============================================
const generateKeywords = () => {
  const services = [
    "Hochzeitsfotograf", "Hochzeitsvideograf", "Hochzeitsvideo",
    "Drohnenaufnahmen Hochzeit", "Hochzeitssaal", "Eventlocation",
    "Hochzeitsreportage", "Brautpaar Fotograf", "Wedding Photographer"
  ];

  const keywords: string[] = [];

  // City + Service combinations
  allCitiesFlat.forEach(city => {
    services.forEach(service => {
      keywords.push(`${service} ${city}`);
    });
  });

  // General keywords
  keywords.push(
    // German keywords
    "Hochzeitsfotograf Deutschland",
    "Hochzeitsvideograf Bayern",
    "Hochzeitsfotografie Franken",
    "Professionelle Hochzeitsfotos",
    "Cineastische Hochzeitsfilme",
    "Drohnenaufnahmen Hochzeit Deutschland",
    "4K Hochzeitsvideo",
    "Emotionale Hochzeitsfotos",
    "Authentische Hochzeitsfotografie",
    "Hochzeitsreportage Bayern",
    "Premium Hochzeitsfotograf",
    "Luxus Hochzeitsfotografie",
    "Hochzeitsfotograf mit Drohne",
    "Standesamt Fotograf",
    "Freie Trauung Fotograf",
    "Kirchliche Trauung Fotograf",
    "After Wedding Shooting",
    "Verlobungsshooting Deutschland",
    "Engagement Shooting",
    "Brautpaar Shooting",
    "Hochzeitsalbum",
    "Fotobuch Hochzeit",

    // Multicultural keywords
    "Arabische Hochzeit Fotograf",
    "Türkische Hochzeit Videograf",
    "Persische Hochzeit Deutschland",
    "Indische Hochzeit Fotograf",
    "Internationale Hochzeit",
    "Multikulturelle Hochzeit",
    "Orientalische Hochzeit",
    "Afghanische Hochzeit Fotograf",
    "Marokkanische Hochzeit",
    "Libanesische Hochzeit",

    // English keywords
    "Wedding Photographer Germany",
    "Wedding Videographer Bavaria",
    "Drone Wedding Video Germany",
    "Cinematic Wedding Film",
    "Luxury Wedding Photography",
    "Destination Wedding Germany",

    // Location keywords
    "Hochzeitslocation Bayern",
    "Eventlocation Franken",
    "Hochzeitssaal Nürnberg",
    "Feierlocation Bayern",
    "Hochzeitsfeier Location",

    // Voice search / Long-tail
    "Wie finde ich einen guten Hochzeitsfotografen",
    "Was kostet ein Hochzeitsfotograf",
    "Hochzeitsfotograf in meiner Nähe",
    "Bester Hochzeitsfotograf Bayern",
    "Hochzeitsfotograf Empfehlung",
    "Hochzeitsfotograf Bewertungen"
  );

  return keywords;
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bella-films.de'),
  title: {
    default: "Bella Films | Premium Hochzeitsfotograf Deutschland | Hochzeitsvideo & Drohnenaufnahmen Bayern",
    template: "%s | Bella Films - Hochzeitsfotograf Deutschland"
  },
  description: "Ihr professioneller Hochzeitsfotograf & Videograf in Deutschland. Cineastische Hochzeitsfilme mit Drohnenaufnahmen, emotionale Fotografie & exklusive Eventlocation. 500+ Hochzeiten in Nürnberg, München, Frankfurt & ganz Deutschland. Erfahrung mit arabischen, türkischen & deutschen Hochzeiten. Jetzt kostenlos anfragen!",
  keywords: generateKeywords(),
  authors: [{ name: "Bella Films", url: "https://bella-films.de" }],
  creator: "Bella Films",
  publisher: "Bella Films",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US", "ar_SA", "tr_TR"],
    url: "https://bella-films.de",
    siteName: "Bella Films - Premium Hochzeitsfotografie",
    title: "Bella Films | Premium Hochzeitsfotograf & Videograf Deutschland",
    description: "Professionelle Hochzeitsfotografie & cineastische Videos mit Drohnenaufnahmen. 500+ Hochzeiten dokumentiert. Jetzt kostenlos anfragen!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bella Films - Premium Hochzeitsfotografie Deutschland",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Films | Premium Hochzeitsfotograf Deutschland",
    description: "Professionelle Hochzeitsfotografie, Videos & Drohnenaufnahmen. 500+ Hochzeiten. Jetzt anfragen!",
    images: ["/og-image.jpg"],
    creator: "@bellafilms",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://bella-films.de",
    languages: {
      "de-DE": "https://bella-films.de",
      "en-US": "https://bella-films.de/en",
      "ar-SA": "https://bella-films.de/ar",
      "tr-TR": "https://bella-films.de/tr",
    },
  },
  category: "Photography",
  classification: "Wedding Photography, Videography, Event Photography",
};

// ============================================
// COMPREHENSIVE STRUCTURED DATA FOR AEO
// ============================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. LOCAL BUSINESS (Primary)
    {
      "@type": ["LocalBusiness", "PhotographyBusiness", "ProfessionalService"],
      "@id": "https://bella-films.de/#business",
      "name": "Bella Films",
      "alternateName": ["Bella Films Studio", "Bella Films Hochzeitsfotografie", "Bella Films Wedding Photography"],
      "description": "Premium Hochzeitsfotografie, cineastische Videografie mit 4K Drohnenaufnahmen und exklusive Eventlocation in Deutschland. Spezialisiert auf emotionale, authentische Hochzeitsreportagen für deutsche, arabische und türkische Hochzeiten.",
      "url": "https://bella-films.de",
      "telephone": "+49-XXX-XXXXXXX",
      "email": "info@bella-films.de",
      "priceRange": "€€-€€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
      "image": [
        "https://bella-films.de/images/studio-1.jpg",
        "https://bella-films.de/images/studio-2.jpg",
        "https://bella-films.de/images/wedding-sample.jpg"
      ],
      "logo": "https://bella-films.de/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hauptstraße 1",
        "addressLocality": "Nürnberg",
        "addressRegion": "Bayern",
        "postalCode": "90402",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.4521",
        "longitude": "11.0767"
      },
      "areaServed": allCitiesFlat.map(city => ({
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "Country",
          "name": "Germany"
        }
      })),
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "49.4521",
          "longitude": "11.0767"
        },
        "geoRadius": "500 km"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hochzeitsdienstleistungen",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Hochzeitsfotografie",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ganztägige Hochzeitsreportage",
                  "description": "Komplette fotografische Begleitung Ihrer Hochzeit von Getting Ready bis zur Party"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Standesamtliche Trauung",
                  "description": "Professionelle Fotografie Ihrer standesamtlichen Trauung"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Hochzeitsvideografie",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cinematic Wedding Film",
                  "description": "Filmreifer Hochzeitsfilm in 4K Qualität mit professionellem Schnitt"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Drohnenaufnahmen",
                  "description": "Spektakuläre Luftaufnahmen Ihrer Hochzeitslocation"
                }
              }
            ]
          }
        ]
      },
      "knowsAbout": [
        "Hochzeitsfotografie",
        "Hochzeitsvideografie",
        "Drohnenaufnahmen",
        "Eventfotografie",
        "Arabische Hochzeiten",
        "Türkische Hochzeiten",
        "Deutsche Hochzeiten",
        "Multikulturelle Hochzeiten"
      ],
      "knowsLanguage": ["de", "en", "ar", "tr"],
      "sameAs": [
        "https://www.instagram.com/bella_films/",
        "https://www.facebook.com/bellafilms",
        "https://www.youtube.com/@bellafilms",
        "https://www.tiktok.com/@bellafilms",
        "https://www.pinterest.com/bellafilms"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:00",
          "description": "Termine nach Vereinbarung für Hochzeiten"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah & Thomas"
          },
          "datePublished": "2024-06-15",
          "reviewBody": "Bella Films hat unseren Tag perfekt eingefangen. Die Fotos sind wie aus einem Märchen – natürlich, emotional und wunderschön. Wir sind überwältigt!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fatima & Ahmed"
          },
          "datePublished": "2024-05-20",
          "reviewBody": "Endlich ein Team, das unsere Traditionen versteht und respektiert. Die Drohnenaufnahmen waren spektakulär. Absolute Empfehlung!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Julia & Markus"
          },
          "datePublished": "2024-04-10",
          "reviewBody": "Von der ersten Beratung bis zur fertigen Galerie – alles war perfekt. Das Team ist professionell, kreativ und unglaublich sympathisch.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ],
      "slogan": "Unvergessliche Momente, für die Ewigkeit",
      "foundingDate": "2009",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 5,
        "maxValue": 10
      }
    },

    // 2. WEBSITE
    {
      "@type": "WebSite",
      "@id": "https://bella-films.de/#website",
      "url": "https://bella-films.de",
      "name": "Bella Films - Premium Hochzeitsfotografie Deutschland",
      "description": "Professionelle Hochzeitsfotografie & Videografie mit Drohnenaufnahmen in Deutschland",
      "publisher": {
        "@id": "https://bella-films.de/#business"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://bella-films.de/suche?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "ContactAction",
          "target": "https://bella-films.de/#kontakt",
          "description": "Kostenlose Beratung anfragen"
        }
      ],
      "inLanguage": ["de-DE", "en-US", "ar-SA", "tr-TR"]
    },

    // 3. WEBPAGE (Main)
    {
      "@type": "WebPage",
      "@id": "https://bella-films.de/#webpage",
      "url": "https://bella-films.de",
      "name": "Bella Films | Premium Hochzeitsfotograf Deutschland",
      "description": "Professionelle Hochzeitsfotografie, Videografie & Drohnenaufnahmen",
      "isPartOf": {
        "@id": "https://bella-films.de/#website"
      },
      "about": {
        "@id": "https://bella-films.de/#business"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://bella-films.de/images/hero.jpg"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bella-films.de"
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-description", ".service-description"]
      },
      "lastReviewed": "2024-01-01"
    },

    // 4. COMPREHENSIVE FAQ PAGE (Voice Search Optimized)
    {
      "@type": "FAQPage",
      "@id": "https://bella-films.de/#faq",
      "mainEntity": [
        // Pricing Questions
        {
          "@type": "Question",
          "name": "Was kostet ein Hochzeitsfotograf in Deutschland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Kosten für einen professionellen Hochzeitsfotografen in Deutschland variieren je nach Leistungsumfang zwischen 1.500€ und 5.000€. Bei Bella Films erhalten Sie ein individuelles Angebot basierend auf Ihren Wünschen. Faktoren wie Dauer der Begleitung, Anzahl der Fotografen und zusätzliche Leistungen wie Drohnenaufnahmen beeinflussen den Preis. Kontaktieren Sie uns für eine kostenlose, unverbindliche Beratung."
          }
        },
        {
          "@type": "Question",
          "name": "Wie viel kostet ein Hochzeitsvideo mit Drohne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ein professionelles Hochzeitsvideo mit Drohnenaufnahmen kostet in Deutschland zwischen 2.000€ und 6.000€. Der Preis hängt von der Filmlänge, dem Umfang der Drohnenaufnahmen und der Nachbearbeitung ab. Bei Bella Films bieten wir cineastische 4K-Hochzeitsfilme mit spektakulären Luftaufnahmen. Fragen Sie nach unseren Kombi-Paketen für Foto und Video."
          }
        },
        // Booking Questions
        {
          "@type": "Question",
          "name": "Wie weit im Voraus sollte man einen Hochzeitsfotografen buchen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wir empfehlen, Ihren Hochzeitsfotografen 12-18 Monate vor dem Hochzeitstermin zu buchen, besonders für beliebte Termine im Sommer (Mai-September). Für Termine unter der Woche oder in der Nebensaison ist oft auch eine kürzere Vorlaufzeit möglich. Beliebte Hochzeitsfotografen sind schnell ausgebucht, daher gilt: Je früher, desto besser!"
          }
        },
        {
          "@type": "Question",
          "name": "Wie läuft die Buchung bei Bella Films ab?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1) Sie senden uns eine unverbindliche Anfrage über unser Kontaktformular. 2) Wir vereinbaren ein kostenloses Kennenlerngespräch (persönlich oder per Video). 3) Wir besprechen Ihre Wünsche und zeigen Ihnen unsere Arbeit. 4) Sie erhalten ein individuelles Angebot. 5) Nach Vertragsabschluss planen wir gemeinsam jeden Schritt Ihrer Hochzeit."
          }
        },
        // Location Questions
        {
          "@type": "Question",
          "name": "In welchen Städten ist Bella Films als Hochzeitsfotograf tätig?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bella Films ist in ganz Deutschland tätig, mit Schwerpunkt in Bayern und Franken. Wir fotografieren regelmäßig Hochzeiten in Nürnberg, München, Würzburg, Bamberg, Erlangen, Frankfurt, Stuttgart, Berlin, Hamburg, Köln und über 100 weiteren deutschen Städten. Für Destination Weddings reisen wir auch ins europäische Ausland."
          }
        },
        {
          "@type": "Question",
          "name": "Bietet Bella Films auch eine Hochzeitslocation an?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wir verfügen über eine exklusive Eventlocation für Hochzeiten und Feiern in der Region Nürnberg/Franken. Die Location bietet Platz für bis zu 300 Gäste und kann für standesamtliche Trauungen, freie Trauungen und Hochzeitsfeiern genutzt werden. Kombipakete mit Fotografie und Video sind verfügbar."
          }
        },
        // Multicultural Questions
        {
          "@type": "Question",
          "name": "Haben Sie Erfahrung mit arabischen Hochzeiten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, absolut! Bella Films hat umfangreiche Erfahrung mit arabischen Hochzeiten. Wir kennen die traditionellen Abläufe wie Henna-Nacht, Zaffa, Zaffe und die verschiedenen Bräuche. Unser Team spricht Arabisch und versteht die kulturellen Besonderheiten. Wir dokumentieren respektvoll alle wichtigen Momente Ihrer arabischen Hochzeit."
          }
        },
        {
          "@type": "Question",
          "name": "Fotografieren Sie auch türkische Hochzeiten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wir haben viel Erfahrung mit türkischen Hochzeiten (Düğün). Wir kennen die Traditionen wie Kına Gecesi (Henna-Abend), die Abholung der Braut, den Hochzeitstanz und alle wichtigen Zeremonien. Unser Team ist vertraut mit den kulturellen Erwartungen und dokumentiert Ihre türkische Hochzeit authentisch und respektvoll."
          }
        },
        {
          "@type": "Question",
          "name": "Haben Sie Erfahrung mit multikulturellen Hochzeiten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja! Bella Films ist spezialisiert auf multikulturelle Hochzeiten. Wir haben Erfahrung mit deutschen, arabischen, türkischen, persischen, indischen und internationalen Hochzeiten. Wir verstehen und respektieren verschiedene kulturelle Traditionen und sorgen dafür, dass alle wichtigen Momente festgehalten werden."
          }
        },
        // Technical Questions
        {
          "@type": "Question",
          "name": "Welche Kameraausrüstung verwendet Bella Films?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wir arbeiten mit professioneller High-End Ausrüstung: Sony Alpha und Canon EOS R Vollformatkameras, Cinema-Objektive für Videoaufnahmen, DJI Mavic 3 Pro Drohnen für 4K Luftaufnahmen, professionelle Beleuchtung und Backup-Equipment für jeden Einsatz. Alle unsere Kameras ermöglichen Aufnahmen in höchster Qualität, auch bei schwierigen Lichtverhältnissen."
          }
        },
        {
          "@type": "Question",
          "name": "Bieten Sie auch Drohnenaufnahmen für Hochzeiten an?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wir bieten professionelle Drohnenaufnahmen in 4K-Qualität für Ihre Hochzeit an. Unsere zertifizierten Drohnenpiloten erstellen atemberaubende Luftaufnahmen Ihrer Location, der Gäste und des Brautpaares. Alle Flüge erfolgen selbstverständlich rechtlich abgesichert mit den nötigen Genehmigungen."
          }
        },
        // Delivery Questions
        {
          "@type": "Question",
          "name": "Wann erhalten wir die Hochzeitsfotos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sie erhalten erste Sneak-Peek Bilder innerhalb von 48 Stunden nach Ihrer Hochzeit. Die vollständige, professionell bearbeitete Galerie mit 400-800 Bildern ist in 4-6 Wochen fertig. Alle Bilder werden in einer passwortgeschützten Online-Galerie bereitgestellt, von der Sie direkt Abzüge bestellen können."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange dauert die Fertigstellung des Hochzeitsvideos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ein Highlight-Clip (3-5 Minuten) ist in 2-4 Wochen fertig. Der vollständige cineastische Hochzeitsfilm (15-45 Minuten) benötigt etwa 8-12 Wochen für Schnitt, Farbkorrektur und Sounddesign. Bei Eilbedarf bieten wir Express-Bearbeitung gegen Aufpreis an."
          }
        },
        // Safety Questions
        {
          "@type": "Question",
          "name": "Was passiert, wenn der Fotograf am Hochzeitstag krank wird?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ihre Sicherheit ist uns wichtig. Wir haben immer ein qualifiziertes Backup-Team bereit. Im unwahrscheinlichen Notfall übernimmt ein erfahrener Kollege nahtlos – ohne Kompromisse bei der Qualität. Dies ist in unseren Verträgen garantiert, sodass Sie sich keine Sorgen machen müssen."
          }
        },
        {
          "@type": "Question",
          "name": "Sind die Hochzeitsfotos und Videos bei Ihnen sicher gespeichert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, absolut! Wir speichern alle Rohdaten und bearbeiteten Dateien auf mehreren redundanten Servern und externen Festplatten. Ihre Erinnerungen werden mindestens 2 Jahre archiviert. Gegen einen geringen Aufpreis bieten wir auch eine Langzeitarchivierung an."
          }
        },
        // Style Questions
        {
          "@type": "Question",
          "name": "Welchen Stil hat Bella Films bei der Hochzeitsfotografie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unser Stil ist emotional, authentisch und zeitlos. Wir kombinieren dokumentarische Reportagefotografie mit kunstvollen Porträts. Keine gestellten, unnatürlichen Bilder – stattdessen fangen wir echte Emotionen und spontane Momente ein. Unsere Bildbearbeitung ist elegant und natürlich, mit warmen Farbtönen und feiner Ästhetik."
          }
        },
        // Practical Questions
        {
          "@type": "Question",
          "name": "Wie viele Fotos erhalten wir von unserer Hochzeit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Je nach Dauer der Begleitung erhalten Sie zwischen 400 und 800+ professionell bearbeitete Hochzeitsfotos. Bei einer ganztägigen Reportage (10-12 Stunden) sind es typischerweise 600-800 Bilder. Alle Fotos werden in hoher Auflösung geliefert, druckfertig und für Social Media optimiert."
          }
        },
        {
          "@type": "Question",
          "name": "Können wir vor der Hochzeit ein Verlobungsshooting machen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wir empfehlen ein Verlobungsshooting (Engagement Shooting) sehr! Es ist eine tolle Möglichkeit, uns kennenzulernen und sich vor der Kamera wohlzufühlen. Außerdem erhalten Sie wunderschöne Bilder für Save-the-Dates, Einladungen oder Ihre Hochzeits-Website. Viele unserer Pakete beinhalten ein Verlobungsshooting."
          }
        },
        {
          "@type": "Question",
          "name": "Dürfen Gäste auch fotografieren während Sie arbeiten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grundsätzlich ja, aber wir empfehlen eine 'Unplugged Ceremony' – also Handys und Kameras während der Trauung wegzulegen. So sind alle Gäste im Moment präsent und wir können ungestört arbeiten. Bei Porträts und wichtigen Momenten bitten wir um Rücksichtnahme. Am Abend ist es dann völlig okay!"
          }
        },
        {
          "@type": "Question",
          "name": "Bieten Sie auch Hochzeitsalben an?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wir bieten hochwertige, handgefertigte Hochzeitsalben und Fotobücher an. Diese werden in Deutschland auf Premiumpapier gedruckt und individuell für Sie gestaltet. Verschiedene Größen, Coveroptionen (Leder, Leinen, Acryl) und Layouts sind verfügbar. Elternalben in kleinerer Version sind ebenfalls erhältlich."
          }
        }
      ]
    },

    // 5. SERVICES
    {
      "@type": "Service",
      "@id": "https://bella-films.de/#photography-service",
      "name": "Hochzeitsfotografie",
      "alternateName": ["Wedding Photography", "Hochzeitsreportage", "Brautpaarfotografie"],
      "serviceType": "Wedding Photography",
      "provider": {
        "@id": "https://bella-films.de/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "description": "Professionelle Hochzeitsfotografie mit emotionalen, authentischen Bildern. Ganztägige Begleitung von Getting Ready bis zur Party. Natürlicher, zeitloser Stil mit professioneller Bildbearbeitung.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fotografie-Pakete",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Standesamt",
            "description": "2-3 Stunden Begleitung"
          },
          {
            "@type": "Offer",
            "name": "Halbtags",
            "description": "5-6 Stunden Begleitung"
          },
          {
            "@type": "Offer",
            "name": "Ganztags",
            "description": "10-12 Stunden Begleitung"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://bella-films.de/#videography-service",
      "name": "Hochzeitsvideografie",
      "alternateName": ["Wedding Videography", "Hochzeitsfilm", "Cinematic Wedding Film"],
      "serviceType": "Wedding Videography",
      "provider": {
        "@id": "https://bella-films.de/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "description": "Cineastische Hochzeitsfilme in 4K-Qualität mit professionellem Schnitt, Farbkorrektur und Sounddesign. Inklusive Highlight-Film und vollständiger Dokumentation.",
      "additionalType": "https://schema.org/VideoObject"
    },
    {
      "@type": "Service",
      "@id": "https://bella-films.de/#drone-service",
      "name": "Drohnenaufnahmen",
      "alternateName": ["Drone Videography", "Luftaufnahmen", "Aerial Photography"],
      "serviceType": "Drone Photography and Videography",
      "provider": {
        "@id": "https://bella-films.de/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "description": "Professionelle 4K Drohnenaufnahmen für spektakuläre Luftbilder Ihrer Hochzeitslocation. Zertifizierte Piloten, rechtlich abgesichert."
    },

    // 6. EVENT VENUE
    {
      "@type": "EventVenue",
      "@id": "https://bella-films.de/#venue",
      "name": "Bella Films Eventlocation",
      "description": "Exklusive Hochzeitslocation in Franken für bis zu 300 Gäste",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nürnberg",
        "addressRegion": "Bayern",
        "addressCountry": "DE"
      },
      "maximumAttendeeCapacity": 300,
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parkplätze",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Barrierefreiheit",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Catering-Küche",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Freie Trauung möglich",
          "value": true
        }
      ]
    },

    // 7. ORGANIZATION
    {
      "@type": "Organization",
      "@id": "https://bella-films.de/#organization",
      "name": "Bella Films",
      "url": "https://bella-films.de",
      "logo": "https://bella-films.de/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+49-XXX-XXXXXXX",
          "contactType": "customer service",
          "availableLanguage": ["German", "English", "Arabic", "Turkish"],
          "areaServed": "DE"
        },
        {
          "@type": "ContactPoint",
          "email": "info@bella-films.de",
          "contactType": "sales",
          "availableLanguage": ["German", "English", "Arabic", "Turkish"]
        }
      ]
    },

    // 8. HOW TO (Wedding Planning Tips - Good for Voice Search)
    {
      "@type": "HowTo",
      "@id": "https://bella-films.de/#howto-book",
      "name": "Wie buche ich einen Hochzeitsfotografen bei Bella Films?",
      "description": "Schritt-für-Schritt Anleitung zur Buchung Ihres Hochzeitsfotografen",
      "totalTime": "P7D",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Anfrage senden",
          "text": "Füllen Sie unser Kontaktformular mit Ihren Wünschen und dem Hochzeitsdatum aus.",
          "url": "https://bella-films.de/#kontakt"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Kennenlerngespräch",
          "text": "Wir vereinbaren ein kostenloses Kennenlerngespräch, persönlich oder per Video."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Angebot erhalten",
          "text": "Sie erhalten ein individuelles Angebot basierend auf Ihren Wünschen."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Vertrag unterschreiben",
          "text": "Nach Ihrer Zusage sichern Sie Ihren Termin mit einer Anzahlung."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Detailplanung",
          "text": "Wir planen gemeinsam den Ablauf Ihres Hochzeitstages."
        }
      ]
    },

    // 9. VIDEO OBJECT (Sample)
    {
      "@type": "VideoObject",
      "@id": "https://bella-films.de/#showreel",
      "name": "Bella Films Hochzeitsfilm Showreel 2024",
      "description": "Cineastische Hochzeitsfilme aus Deutschland - Showreel mit den schönsten Momenten unserer Paare",
      "thumbnailUrl": "https://bella-films.de/images/video-thumbnail.jpg",
      "uploadDate": "2024-01-01",
      "duration": "PT3M",
      "contentUrl": "https://bella-films.de/videos/showreel.mp4",
      "embedUrl": "https://www.youtube.com/embed/xxxx",
      "publisher": {
        "@id": "https://bella-films.de/#business"
      }
    },

    // 10. IMAGE GALLERY
    {
      "@type": "ImageGallery",
      "@id": "https://bella-films.de/#portfolio",
      "name": "Bella Films Portfolio - Hochzeitsfotografie Deutschland",
      "description": "Portfolio mit Hochzeitsfotos aus Nürnberg, München, Frankfurt und ganz Deutschland",
      "url": "https://bella-films.de/#portfolio"
    },

    // 11. SPEAKABLE (Voice Search)
    {
      "@type": "WebPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".hero-headline",
          ".hero-description",
          ".service-title",
          ".service-description",
          ".faq-question",
          ".faq-answer"
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme & Colors */}
        <meta name="theme-color" content="#FAF9F7" />
        <meta name="msapplication-TileColor" content="#2D2926" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Nürnberg, Bayern, Deutschland" />
        <meta name="geo.position" content="49.4521;11.0767" />
        <meta name="ICBM" content="49.4521, 11.0767" />

        {/* Language & Content */}
        <meta httpEquiv="content-language" content="de-DE" />
        <meta name="language" content="German" />

        {/* Additional SEO Meta */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Germany" />

        {/* Business Info */}
        <meta name="author" content="Bella Films" />
        <meta name="copyright" content="Bella Films" />
        <meta name="designer" content="Bella Films" />
        <meta name="owner" content="Bella Films" />
        <meta name="reply-to" content="info@bella-films.de" />

        {/* Mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bella Films" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
