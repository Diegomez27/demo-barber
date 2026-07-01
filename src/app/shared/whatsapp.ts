// Datos de contacto del negocio (ficticios, de prueba).
// El número está en formato internacional sin '+' como exige wa.me:
//   52 = México · 1 = móvil · 10 dígitos
export const BUSINESS = {
  name: 'NAVAJA',
  tagline: 'Barbería de precisión',
  phoneDisplay: '+52 55 1234 5678',
  whatsappNumber: '5215512345678',
  address: 'Av. Álvaro Obregón 145, Roma Norte',
  city: '06700 · Cuauhtémoc, CDMX',
  hours: [
    { day: 'Lun – Vie', time: '11:00 — 21:00' },
    { day: 'Sábado', time: '10:00 — 21:00' },
    { day: 'Domingo', time: '11:00 — 18:00' },
  ],
  instagram: '@navaja.barber',
  mapsQuery: 'Av. Álvaro Obregón 145, Roma Norte, CDMX',
} as const;

/**
 * Construye el enlace de WhatsApp con número y mensaje prellenados.
 * @param message Texto del mensaje (se codifica para la URL).
 */
export function whatsappLink(
  message = 'Hola, quiero agendar una cita',
): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
