export interface ServicePackage {
  name: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}

export const PACKAGES: ServicePackage[] = [
  {
    name: "Essential",
    tagline: "Intimate ceremonies and registry weddings",
    features: [
      "6 hours of coverage",
      "One lead photographer",
      "200+ edited images",
      "Online private gallery",
      "Personal usage licence",
    ],
  },
  {
    name: "Signature",
    tagline: "Full wedding day storytelling",
    featured: true,
    features: [
      "10–12 hours of coverage",
      "Lead + second photographer",
      "Pre-wedding or bridal session",
      "500+ edited images",
      "Cinematic highlight film",
      "Online private gallery",
      "Personal usage licence",
    ],
  },
  {
    name: "Couture",
    tagline: "Multi-day celebrations, fully bespoke",
    features: [
      "Multi-day coverage",
      "Full creative team",
      "Pre-wedding + haldi + reception",
      "1000+ edited images",
      "Highlight film + full film",
      "Fine-art album design",
      "Priority delivery",
    ],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  event: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They didn't just photograph our wedding — they preserved every feeling. The candids still make us cry, in the best way.",
    name: "Aarav & Meera",
    event: "Wedding, Jamnagar",
  },
  {
    quote:
      "Calm, invisible, and everywhere at once. The gallery felt like reliving the day frame by frame.",
    name: "Rohan & Simran",
    event: "Destination Wedding",
  },
  {
    quote:
      "The pre-wedding film and photos exceeded everything we imagined. Genuinely cinematic work.",
    name: "Karthik & Ananya",
    event: "Pre-Wedding Session",
  },
  {
    quote:
      "They understood our rituals so respectfully. Every traditional moment was captured with so much grace.",
    name: "Jay & Priya",
    event: "Traditional Ceremony",
  },
  {
    quote:
      "From haldi to vidaai, nothing was missed. The album feels like a film we can hold in our hands.",
    name: "Dev & Riya",
    event: "Wedding, Rajkot",
  },
  {
    quote:
      "We barely noticed the camera, yet every important moment is in the gallery. That is real talent.",
    name: "Neel & Kavya",
    event: "Reception",
  },
  {
    quote:
      "Jay and the team were so patient with our large family. Every portrait came out warm and natural.",
    name: "Mehul & Drashti",
    event: "Wedding, Jamnagar",
  },
  {
    quote:
      "The highlight film gave us goosebumps. Our parents watched it three times in one evening.",
    name: "Sahil & Pooja",
    event: "Wedding Film",
  },
  {
    quote:
      "Beautiful colours, honest emotions, zero awkward posing. Exactly what we hoped for.",
    name: "Harsh & Mittal",
    event: "Pre-Wedding",
  },
  {
    quote:
      "They captured the small glances no one else would have noticed. That is what makes the album special.",
    name: "Anand & Sneha",
    event: "Ceremony",
  },
  {
    quote:
      "Professional, on time, and so kind with our grandparents. The whole family loved working with them.",
    name: "Krish & Aisha",
    event: "Wedding, Gujarat",
  },
  {
    quote:
      "Our reception photos look like magazine editorials. We could not stop sharing them.",
    name: "Fenil & Aarohi",
    event: "Reception",
  },
  {
    quote:
      "They knew exactly when to step in and when to disappear. The candids are pure gold.",
    name: "Yash & Hetal",
    event: "Wedding",
  },
  {
    quote:
      "The traditional ceremony coverage was so respectful and beautiful. We are forever grateful.",
    name: "Ramesh & Nirali",
    event: "Traditional Wedding",
  },
  {
    quote:
      "Booking them was the best decision for our wedding. Every single frame tells our story.",
    name: "Om & Ishita",
    event: "Full Wedding",
  },
];

export const DESIGNER_NAME = "Bhushan Ahuja";
export const DESIGNER_ROLE = "Designed & Developed by";
export const DESIGNER_URL = "https://www.instagram.com/bhushanahuja";

export interface Album {
  name: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}

export const ALBUMS: Album[] = [
  {
    name: "Linen Wedding Album",
    tagline: "Heirloom cover, layflat pages",
    features: [
      "30 × 30 cm, 30 pages",
      "Premium linen cover",
      "Layflat fine-art pages",
      "Foil-stamped names & date",
      "Custom design included",
    ],
  },
  {
    name: "Leather Wedding Album",
    tagline: "Full-grain leather, deep impression",
    featured: true,
    features: [
      "35 × 35 cm, 40 pages",
      "Full-grain leather cover",
      "Layflat museum pages",
      "Debossed monogram",
      "Custom design included",
    ],
  },
  {
    name: "Parent Albums",
    tagline: "Matching mini copies for families",
    features: [
      "20 × 20 cm, 20 pages",
      "Linen or leather cover",
      "Same design as main album",
      "Order in sets of 2, 4 or more",
      "Custom quote per set",
    ],
  },
];

export const WHATSAPP_NUMBER = "918128036019";
export const WHATSAPP_DISPLAY = "+91 81280 36019";
export const INSTAGRAM_HANDLE = "@pictureritual";
export const INSTAGRAM_URL = "https://www.instagram.com/pictureritual";
export const JAY_INSTAGRAM_HANDLE = "@jayrathod_artistry";
export const JAY_INSTAGRAM_URL = "https://www.instagram.com/jayrathod_artistry";
export const YOUTUBE_URL = "https://youtube.com/@picturerituals";
export const CITY = "Jamnagar, Gujarat";
export const SERVICE_AREA = "Jamnagar, Rajkot & Across Gujarat";
export const OWNER_NAME = "Jay Rathod";
export const OWNER_ROLE = "Founder & Lead Photographer";
export const HOME_IMAGE = "/homeimage.webp";
export const OWNER_IMAGE = "/jayrathod.webp";
export const LOGO_IMAGE = "/logo.webp";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
