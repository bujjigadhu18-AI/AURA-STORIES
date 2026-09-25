import { BusinessConfig } from '../types';

export const demoData: BusinessConfig = {
  businessName: "AURA STORIES",
  shortName: "AURA",
  tagline: "WEDDING PHOTOGRAPHY & CINEMATIC FILMS",
  subTagline: "Visual heirlooms crafted with quiet luxury, intimacy, and timeless cinematic depth.",
  location: "Visakhapatnam, Andhra Pradesh & Worldwide",
  
  heroHighlights: [
    {
      value: "Bespoke Commissions",
      label: "Celebrations Refined",
      subtext: "Limited commissions accepted each season"
    },
    {
      value: "Fine Art & Cinema",
      label: "Artisan Craftsmanship",
      subtext: "Documentary depth & editorial portraiture"
    },
    {
      value: "Visakhapatnam",
      label: "Coastal & Destinations",
      subtext: "Available across India & worldwide"
    }
  ],
  
  // Hero high-res cinematic wedding portraiture (warm highlights, deep blacks)
  heroBackgroundUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85",
  
  aboutStory: {
    headline: "Your Story. Our Lens.",
    leadText: "We believe true luxury lies in subtlety: fleeting glances, unspoken tenderness, and unchoreographed euphoria.",
    bodyText: [
      "Based along the serene coastal elegance of Visakhapatnam, AURA STORIES was created to preserve wedding days not as a sequence of posed formalities, but as a living, breathing cinematic chronicle.",
      "Our team approaches every wedding with an editorial eye and documentary intuition. We embrace natural golden light, genuine cultural depth, and deep atmospheric compositions that remain effortlessly modern fifty years from today."
    ],
    artistQuote: "“To photograph love is to honour the quiet fragments between the grand moments.”",
    experienceBadge: "Crafting visual heirlooms across South India and destination escapes.",
    imagePrimary: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80"
  },

  portfolioCategories: [
    'All',
    'Weddings',
    'Pre-Wedding',
    'Engagement',
    'Bride & Groom',
    'Candid Moments',
    'Cinematic Films'
  ],

  portfolioItems: [
    {
      id: "port-1",
      title: "Coastal Vows at Dolphin's Nose",
      category: "Weddings",
      location: "Bheemili Beach, Visakhapatnam",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      year: "2024",
      description: "Sunset sacred pheras with the Bay of Bengal ocean breeze."
    },
    {
      id: "port-2",
      title: "Ethereal Sunrise Solitude",
      category: "Pre-Wedding",
      location: "Araku Valley",
      imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      year: "2024",
      description: "Mist-covered rolling hills and soft natural backlighting."
    },
    {
      id: "port-3",
      title: "The Heritage Rings",
      category: "Engagement",
      location: "Novotel Varun Beach",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      year: "2024",
      description: "Intimate exchange of vows under candlelit archways."
    },
    {
      id: "port-4",
      title: "Royal Crimson & Gold",
      category: "Bride & Groom",
      location: "Heritage Pavilion",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      year: "2024",
      description: "Kanjeevaram silk portraits honoring generational heritage."
    },
    {
      id: "port-5",
      title: "The Sacred Vows",
      category: "Candid Moments",
      location: "Visakhapatnam",
      imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      year: "2024",
      description: "Unrehearsed emotion during the sacred rituals."
    },
    {
      id: "port-6",
      title: "Ode to Twilight (Teaser)",
      category: "Cinematic Films",
      location: "Radisson Blu Resort",
      imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      year: "2024",
      description: "A 4K anamorphic wedding film teaser filled with poetry.",
      isVideoTeaser: true
    },
    {
      id: "port-7",
      title: "The Haldi Glow",
      category: "Candid Moments",
      location: "Rushikonda Greens",
      imageUrl: "https://images.unsplash.com/photo-1609154767012-331529e7d73b?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      year: "2024",
      description: "Marigold showers and pure uninhibited laughter."
    },
    {
      id: "port-8",
      title: "Quiet Starlight Portraits",
      category: "Bride & Groom",
      location: "Taj Gateway Hotel",
      imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      year: "2024",
      description: "A peaceful private escape after the evening reception."
    }
  ],

  featuredStory: {
    couple: "Arjun & Priya",
    title: "An Editorial Oceanfront Saga",
    subtitle: "Two days of coastal heritage, midnight pheras, and ocean-facing grandeur.",
    location: "Visakhapatnam Coastline",
    timeline: "3 Days • 4 Ceremonies",
    quote: "“A cinematic chronicle of coastal sacred rites, where family traditions met the quiet intimacy of the sea.”",
    storyParagraphs: [
      "Set against the rugged cliffside and sweeping tides of the Vizag coastline, Arjun & Priya envisioned a celebration that honored classical Telugu traditions while radiating modern understated elegance.",
      "From the intimate dawn Pellikuthuru drenched in jasmine fragrance to a twilight seaside Sangeet under thousands of fairy lights, our lens documented the laughter, the quiet hand squeezes, and the cinematic cadence of their union.",
      "The cinematic film was mastered in an anamorphic aspect ratio, scored with custom acoustic arrangements to encapsulate the eternal resonance of their vows."
    ],
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      {
        // Verified active Unsplash asset replacing former broken URL
        url: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=800&q=80",
        caption: "Golden hour seaside portraiture along Bheemili promenade."
      },
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        caption: "The sacred garland exchange framed by the setting sun."
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
        caption: "Editorial details: handwoven Kanjeevaram and heritage jewelry."
      }
    ],
    details: [
      { label: "Location", value: "Bheemunipatnam Shore, Vizag" },
      { label: "Aesthetic", value: "Minimal Luxury & Coastal Heritage" },
      { label: "Deliverables", value: "4K Feature Film + Curated Editorial Plates" },
      { label: "Lead Visionary", value: "AURA Senior Cinematography Team" }
    ]
  },

  services: [
    {
      id: "srv-wedding-day",
      title: "Wedding Day Photography",
      tagline: "Unobtrusive documentary brilliance meets high-fashion bridal portraiture.",
      description: "Comprehensive coverage of your sacred ceremonies, family blessings, and evening gala with editorial finesse and zero intrusive posing.",
      deliverables: [
        "Curated high-resolution editorial master files",
        "Color-graded master gallery with print rights",
        "Private online client showcase gallery",
        "High-definition slideshow highlights preview"
      ],
      bestFor: "Full ceremony celebrations & traditional rituals",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      ctaText: "Inquire For Your Date"
    },
    {
      id: "srv-pre-wedding",
      title: "Pre-Wedding & Couple Sessions",
      tagline: "A relaxed, bespoke visual editorial before the wedding day whirlwind.",
      description: "Escape to evocative landscapes—from the Araku mist to coastal cliff sides—for a romantic visual story celebrating your true chemistry.",
      deliverables: [
        "Concept development & styling location curation",
        "3 to 4 hours of golden hour & twilight shooting",
        "40+ fully retouched magazine-grade plates",
        "Signature teaser reel for invitations"
      ],
      bestFor: "Save-the-dates & relaxed natural intimacy",
      imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80",
      ctaText: "Plan Your Session"
    },
    {
      id: "srv-wedding-films",
      title: "Cinematic Wedding Films",
      tagline: "Anamorphic motion pictures echoing cinema's timeless masterworks.",
      description: "Our filmmakers capture authentic vows, ambient speeches, and electric celebration rhythms, scored with orchestral precision.",
      deliverables: [
        "3–5 minute cinematic teaser (4K Ultra HD)",
        "15–25 minute documentary narrative film",
        "Multi-camera speech & ceremony full archives",
        "Licensed bespoke cinematic soundtrack scoring"
      ],
      bestFor: "Couples seeking an emotionally captivating movie",
      imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
      ctaText: "Discuss Your Film"
    },
    {
      id: "srv-events",
      title: "Bespoke Celebrations & Sangeet",
      tagline: "High-energy celebrations, cocktail galas, and cultural evenings.",
      description: "Dazzling stage lighting, unrehearsed dance routines, and high-society gatherings captured with vivid dynamic range and crisp clarity.",
      deliverables: [
        "Low-light master sensor coverage",
        "Fast-turnaround party teaser for social sharing",
        "Complete guest cocktail reception albums",
        "Full performance recording archives"
      ],
      bestFor: "Sangeet nights, Haldi celebrations & receptions",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      ctaText: "Plan Your Celebration"
    }
  ],

  packages: [
    {
      id: "pkg-essential",
      name: "Essential Collection",
      subtitle: "Focused single-day ceremony or intimate wedding celebration.",
      priceNote: "Customized quote based on date & venue schedule",
      highlights: [
        "Up to 8 hours of continuous artisan coverage",
        "Lead candid photographer + traditional specialist",
        "Color-graded signature digital photographs",
        "Private digital viewing lounge (1 year access)",
        "Complimentary high-res digital download portal"
      ],
      coverage: "Single Day / Up to 8 Hours",
      teamSize: "2 Visual Artists",
      turnaround: "4 to 6 Weeks Delivery"
    },
    {
      id: "pkg-signature",
      name: "Signature Collection",
      subtitle: "Our most requested multi-day photography & cinematic film package.",
      isPopular: true,
      priceNote: "Customized quote based on date & multi-day itinerary",
      highlights: [
        "Complete 2-day multi-ceremony coverage (Haldi/Sangeet + Wedding)",
        "Dual team: Senior Photographers + Senior Cinematographers",
        "Editorial couple portrait session during golden hour",
        "4K cinematic trailer + comprehensive documentary film",
        "Handcrafted flush-mount Italian linen heirloom photo album",
        "Expedited preview highlights reel for social"
      ],
      coverage: "2 Days / Full Ceremony Coverage",
      teamSize: "Comprehensive Photo & Cinema Team",
      turnaround: "3 to 5 Weeks Delivery"
    },
    {
      id: "pkg-luxury",
      name: "Grand Heirloom Experience",
      subtitle: "The ultimate uncompromised luxury experience for destination weddings.",
      priceNote: "Bespoke commission for discerning celebrations",
      highlights: [
        "Comprehensive multi-day destination celebration coverage",
        "Full creative direction, master lighting & drone cinematography",
        "Complimentary pre-wedding conceptual film shoot",
        "Anamorphic 4K feature documentary film with custom sound mastering",
        "Two duplicate parents' linen albums + 1 Collector's Master Album",
        "Personalized archival USB vault delivered to your residence",
        "Priority turnaround & direct creative director consultation"
      ],
      coverage: "Full Multi-Day Destination Celebration",
      teamSize: "Lead Artists + Aerial & Sound Specialists",
      turnaround: "Priority 2 to 3 Weeks Delivery"
    }
  ],

  contactInfo: {
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "inquiries@aurastories.in",
    instagramHandle: "@aurastories.studio",
    instagramUrl: "https://instagram.com",
    studioLocation: "Beach Road & Pandurangapuram, Visakhapatnam",
    visakhapatnamOffice: "Visakhapatnam, Andhra Pradesh, India",
    businessHours: "Monday – Saturday: 10:00 AM – 7:30 PM (By Appointment)"
  },

  socialLinks: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919876543210?text=Hello%20AURA%20STORIES%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20availability%20for%20our%20celebration.",
    phone: "tel:+919876543210",
    email: "mailto:inquiries@aurastories.in"
  },

  disclaimer: "AURA STORIES is a generic demonstration portfolio created to showcase editorial wedding photography presentation capabilities in Visakhapatnam. All couple names, events, and brand details are curated placeholders for demonstration purposes."
};
