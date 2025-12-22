import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import GlobalPreloader from "@/components/GlobalPreloader";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
 const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#webpage",
        "url": "https://websitedevelopment.allsparktechnologies.com/",
        "name": "Website Designing and Development Services",
        "description":
          "Professional website designing and development services that help businesses build fast, secure, and conversion focused websites.",
        "isPartOf": {
          "@id": "https://websitedevelopment.allsparktechnologies.com/#organization",
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://websitedevelopment.allsparktechnologies.com/images/hero-section.jpg",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#organization",
        "name": "All Spark Technologies",
        "url": "https://websitedevelopment.allsparktechnologies.com/",
        "logo": "https://websitedevelopment.allsparktechnologies.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/allsparktechnologies",
          "https://twitter.com/allsparktech",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#localbusiness",
        "name": "All Spark Technologies",
        "image": "https://websitedevelopment.allsparktechnologies.com/images/hero-section.jpg",
        "telephone": "+1(616)308-1863",
        "email": "info@allsparktechnologies.com",
        "priceRange": "$$$",
        "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "638 Knollwood Road",
          "addressLocality": "Franklin Lakes",
          "addressRegion": "NJ",
          "postalCode": "07417",
          "addressCountry": "US",
        },
      },
      {
        "@type": "Service",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#service",
        "name": "Website Designing and Development Services",
        "description":
          "End to end website designing and development services including custom websites, ecommerce platforms, CMS solutions, and API integrations.",
        "url": "https://websitedevelopment.allsparktechnologies.com/",
        "provider": {
          "@id": "https://websitedevelopment.allsparktechnologies.com/#localbusiness",
        },
        "areaServed": { "@type": "Country", "name": "United States" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Varies based on project scope",
          "availability": "https://schema.org/InStock",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Website Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Application Development",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ecommerce Website Development",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "CMS Development" },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "API Development and Integration",
              },
            },
          ],
        },
        "potentialAction": {
          "@type": "ContactAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate":
              "https://websitedevelopment.allsparktechnologies.com/contact",
          },
          "name": "Request Website Development Consultation",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#portfolio",
        "name": "Website Development Portfolio",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "CreativeWork",
              "name": "Corporate Website Development Project",
              "creator": {
                "@id": "https://websitedevelopment.allsparktechnologies.com/#organization",
              },
            },
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "CreativeWork",
              "name": "Ecommerce Website Development Project",
              "creator": {
                "@id": "https://websitedevelopment.allsparktechnologies.com/#organization",
              },
            },
          },
        ],
      },
      {
        "@type": "Review",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#testimonial",
        "reviewBody":
          "All Spark Technologies delivered a fast and clean website that improved our online presence and lead quality.",
        "author": { "@type": "Person", "name": "Verified Client" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "itemReviewed": {
          "@id": "https://websitedevelopment.allsparktechnologies.com/#service",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What website development services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We offer website designing and development, custom web applications, ecommerce websites, CMS development, and API integrations.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you provide website development services across the USA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we provide website development services for businesses across the United States.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does a website development project cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost varies based on project requirements, features, and complexity.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://websitedevelopment.allsparktechnologies.com/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://websitedevelopment.allsparktechnologies.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Website Development Services",
            "item": "https://websitedevelopment.allsparktechnologies.com/",
          },
        ],
      },
    ],
  };
export const metadata = {
  title: "Website Design and Development Services | Scale Your ROI",
  description:
    "Scale your ROI with expert website design and development services. We build custom, responsive sites to boost your business. Get a free, detailed quote today!",
  keywords:
    "website design, website development, custom website, responsive design, website services, boost ROI, web development services",
  openGraph: {
    title: "Website Design and Development Services | Scale Your ROI",
    description:
      "Scale your ROI with expert website design and development services. We build custom, responsive sites to boost your business. Get a free, detailed quote today!",
    url: "https://buildyourwebsite.allsparktechnologies.com",
    siteName: "AllSpark Technologies",
    images: [
      {
        url: "https://buildyourwebsite.allsparktechnologies.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build Your Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="NgOeMSHB2lVnom-ZkpqjyYv10Zlng_e2Cvpqovf6BIM"
        />
<meta name="google-site-verification" content="G1uaovu8fDlyB3-5phzFHMeTubsdrU5pyZmKLe4l7FA" />
        {/* Rajdhani Font CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag Manager (must be as high in <head> as possible) */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WC4JXXKN');`}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PGRX0PX1Q2"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PGRX0PX1Q2');`}
        </Script>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${plusJakarta.variable} antialiased !w-[100vw] !overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) - immediately after opening <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WC4JXXKN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div>
          {children}
          <ScrollToTopButton />
        </div>

        <GlobalPreloader />

        {/* Calendly widget script (moved inside body properly) */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
