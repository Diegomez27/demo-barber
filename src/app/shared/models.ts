export interface Service {
  name: string;
  description: string;
  price: number;
  durationMin: number;
  featured?: boolean;
}

export interface GalleryShot {
  id: string;
  alt: string;
  w: number;
  h: number;
}

export interface Barber {
  name: string;
  alias: string;
  specialty: string;
  imageId: string;
  instagram: string;
}
