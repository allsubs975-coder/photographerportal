export type GalleryCategory =
  | "Weddings"
  | "Pre-Wedding"
  | "Receptions"
  | "Candid"
  | "Traditional";

export const CATEGORIES: ("All" | GalleryCategory)[] = [
  "All",
  "Weddings",
  "Pre-Wedding",
  "Receptions",
  "Candid",
  "Traditional",
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    src: "/indian-2.webp",
    alt: "Indian bride and groom in a warm embrace",
    category: "Weddings",
  },
  {
    id: "g2",
    src: "/indian-5.webp",
    alt: "Traditional wedding couple under floral mandap",
    category: "Weddings",
  },
  {
    id: "g3",
    src: u("photo-1611106211090-8f3c79eb8552"),
    alt: "Bride and groom in traditional wedding attire",
    category: "Weddings",
  },
  {
    id: "g4",
    src: "/indian-1.webp",
    alt: "Full-length portrait of the wedding couple",
    category: "Candid",
  },
  {
    id: "g5",
    src: u("photo-1597157639073-69284dc0fdaf"),
    alt: "Mehendi hands with gold bangles during rituals",
    category: "Traditional",
  },
  {
    id: "g6",
    src: u("photo-1587271407850-8d438ca9fdf2"),
    alt: "Grand mandap stage at an Indian wedding",
    category: "Receptions",
  },
  {
    id: "g7",
    src: "/indian-3.webp",
    alt: "Floral wedding decor and warm lights",
    category: "Receptions",
  },
  {
    id: "g8",
    src: u("photo-1583391733956-3750e0ff4e8b"),
    alt: "Bride in elegant white lehenga portrait",
    category: "Pre-Wedding",
  },
  {
    id: "g9",
    src: "/indian-4.webp",
    alt: "Detailed red lehenga and bridal jewellery",
    category: "Traditional",
  },
  {
    id: "g10",
    src: u("photo-1601482441062-b9f13131f33a"),
    alt: "Mehendi ceremony decor setup",
    category: "Traditional",
  },
  {
    id: "g11",
    src: "/homeimage.webp",
    alt: "Romantic couple portrait with falling rose petals",
    category: "Candid",
  },
  {
    id: "g12",
    src: "/indian-6.webp",
    alt: "Golden lanterns and wedding ambiance",
    category: "Receptions",
  },
  {
    id: "g13",
    src: u("photo-1610030469983-98e550d6193c"),
    alt: "Traditional silk saree bridal portrait",
    category: "Pre-Wedding",
  },
  {
    id: "g14",
    src: u("photo-1594463750939-ebb28c3f7f75"),
    alt: "Artistic wedding portrait in warm light",
    category: "Candid",
  },
  {
    id: "g15",
    src: "/indian-2.webp",
    alt: "Close-up of the couple during the ceremony",
    category: "Weddings",
  },
  {
    id: "g16",
    src: u("photo-1611106211090-8f3c79eb8552"),
    alt: "Newlyweds sharing a quiet moment",
    category: "Pre-Wedding",
  },
  {
    id: "g17",
    src: "/indian-5.webp",
    alt: "Ceremony embrace with falling petals",
    category: "Candid",
  },
  {
    id: "g18",
    src: "/indian-1.webp",
    alt: "Wedding day portrait session",
    category: "Receptions",
  },
];
