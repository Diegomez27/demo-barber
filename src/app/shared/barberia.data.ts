import { Barber, GalleryShot, Service } from './models';

// IDs de imagen verificados (todos resuelven 200 en images.unsplash.com).

export const HERO_IMAGE_ID = 'photo-1675599193990-33d71150902b';

export const SERVICES: Service[] = [
  {
    name: 'Corte clásico',
    description: 'Tijera y máquina, lavado, perfilado y peinado final.',
    price: 220,
    durationMin: 45,
  },
  {
    name: 'Fade / Degradado',
    description: 'Difuminado a piel con líneas limpias y transición milimétrica.',
    price: 260,
    durationMin: 50,
    featured: true,
  },
  {
    name: 'Barba a navaja',
    description: 'Toalla caliente, perfilado a navaja y aceite acondicionador.',
    price: 180,
    durationMin: 30,
  },
  {
    name: 'Corte + Barba',
    description: 'El servicio completo, sin prisa. Corte, barba y toallas calientes.',
    price: 380,
    durationMin: 75,
    featured: true,
  },
  {
    name: 'Afeitado clásico',
    description: 'Navaja, espuma caliente y bálsamo. El ritual de toda la vida.',
    price: 240,
    durationMin: 40,
  },
  {
    name: 'Corte junior',
    description: 'Para los que empiezan temprano. Menores de 12 años.',
    price: 170,
    durationMin: 35,
  },
];

export const GALLERY: GalleryShot[] = [
  { id: 'photo-1647140655214-e4a2d914971f', alt: 'Barbero perfilando un corte con tijera', w: 600, h: 800 },
  { id: 'photo-1635273051937-a0ddef9573b6', alt: 'Cliente en la silla durante un fade', w: 600, h: 750 },
  { id: 'photo-1517832606299-7ae9b720a186', alt: 'Perfilado de barba a tijera en blanco y negro', w: 600, h: 600 },
  { id: 'photo-1657105052497-f996284ffff8', alt: 'Difuminado con máquina sobre la nuca', w: 600, h: 800 },
  { id: 'photo-1635273051839-003bf06a8751', alt: 'Detalle de un degradado recién terminado', w: 600, h: 750 },
  { id: 'photo-1621645582931-d1d3e6564943', alt: 'Silla de barbero clásica en piel negra', w: 600, h: 600 },
  { id: 'photo-1536520002442-39764a41e987', alt: 'Interior de la barbería con luz cálida', w: 600, h: 800 },
  { id: 'photo-1621607512022-6aecc4fed814', alt: 'Tijeras y navaja sobre la barra', w: 600, h: 750 },
];

export const TEAM: Barber[] = [
  {
    name: 'Iván Mendoza',
    alias: 'El Filo',
    specialty: 'Fundador · Fades de precisión',
    imageId: 'photo-1553521041-d168abd31de3',
    instagram: '@elfilo',
  },
  {
    name: 'Bruno Salas',
    alias: 'La Navaja',
    specialty: 'Barba y afeitado clásico',
    imageId: 'photo-1541533848490-bc8115cd6522',
    instagram: '@bruno.navaja',
  },
  {
    name: 'Tavo Reyes',
    alias: 'Tijera',
    specialty: 'Corte clásico y texturizado',
    imageId: 'photo-1573586927918-3e6476da8395',
    instagram: '@tavo.reyes',
  },
  {
    name: 'Marco Vidal',
    alias: 'El Trazo',
    specialty: 'Diseño y líneas',
    imageId: 'photo-1513872900980-460ea4c87668',
    instagram: '@marco.trazo',
  },
];
