export type PortfolioCategory =
  | 'All'
  | 'Weddings'
  | 'Pre-Wedding'
  | 'Engagement'
  | 'Bride & Groom'
  | 'Candid Moments'
  | 'Cinematic Films';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  location: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape';
  year: string;
  description?: string;
  isVideoTeaser?: boolean;
}

export interface FeaturedStory {
  couple: string;
  title: string;
  subtitle: string;
  location: string;
  timeline: string;
  quote: string;
  storyParagraphs: string[];
  coverImage: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
  details: {
    label: string;
    value: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  imageUrl: string;
  ctaText: string;
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  priceNote: string;
  highlights: string[];
  coverage: string;
  teamSize: string;
  turnaround: string;
}

export interface SocialLinks {
  instagram: string;
  youtube?: string;
  whatsapp: string;
  phone: string;
  email: string;
}

export interface HeroHighlight {
  label: string;
  value: string;
  subtext: string;
}

export interface InquiryFormData {
  name: string;
  partnerName?: string;
  phone: string;
  email: string;
  date: string;
  venue: string;
  celebrationType: string;
  guestCount?: string;
  servicesRequired: string[];
  message?: string;
}

export interface BusinessConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  location: string;
  heroHighlights: HeroHighlight[];
  heroBackgroundUrl: string;
  aboutStory: {
    headline: string;
    leadText: string;
    bodyText: string[];
    artistQuote: string;
    experienceBadge: string;
    imagePrimary: string;
    imageSecondary: string;
  };
  portfolioCategories: PortfolioCategory[];
  portfolioItems: PortfolioItem[];
  featuredStory: FeaturedStory;
  services: ServiceItem[];
  packages: PackageTier[];
  contactInfo: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    studioLocation: string;
    visakhapatnamOffice: string;
    businessHours: string;
  };
  socialLinks: SocialLinks;
  disclaimer: string;
}
