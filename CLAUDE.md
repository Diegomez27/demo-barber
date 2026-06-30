# demo-barberia

## Qué es
Landing page para una barbería — estética oscura, urbana y premium.

## Fase en el roadmap
Fase 4 del DEMOS_ROADMAP.md — leer antes de continuar.

## Stack
- Frontend: Angular 20 · SCSS
- Deploy: Vercel
- Sin backend

## Secciones a construir
1. **Hero** — imagen o video full-screen, texto grande, CTA directo
2. **Servicios** — cards horizontales con nombre y precio
3. **Galería** — grid tipo masonry con CSS puro (sin librería)
4. **Equipo** — foto, nombre y especialidad de cada barbero
5. **Reserva por WhatsApp** — botón que abre WhatsApp con número y mensaje prellenados
6. **Footer** — dirección y mapa embebido (Google Maps iframe)

## Diseño
- Paleta: negro carbón, blanco roto, dorado como acento
- Tipografía display bold para títulos (Bebas Neue o similar desde Google Fonts)
- Sensación premium urbana — completamente diferente a demo-cafe
- Mobile-first desde 375px

## Criterios de terminado
- Lighthouse mobile ≥ 90 en Performance y Accessibility
- Se ve bien en 375px, 768px y 1280px
- El botón de WhatsApp abre con número y mensaje de prueba prellenados
- Galería sin overflow en móvil

## Convenciones
- Sin librerías de UI (no Angular Material, no PrimeNG) — CSS propio con variables
- Angular 20: Signals, standalone components, `@if`/`@for` en lugar de `*ngIf`/`*ngFor`
- Sin `any` en TypeScript
- Commits en español: `feat: agregar sección de servicios con precios`
- Variables de entorno en `.env`, nunca hardcodeadas
