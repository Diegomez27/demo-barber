# ✂️ Barbería Urbana — Landing Premium

Demo de **presencia web** del [portafolio de Diego Gómez](https://github.com/Diegomez27/portfolio-web).
Landing page de una barbería de especialidad ficticia, mobile-first, con identidad visual oscura y premium,
sin dependencias de UI.

> Parte del catálogo de demos del portafolio. El objetivo es mostrar capacidad de diseño y
> frontend moderno: cada demo se ve y se siente como un producto terminado, no como un ejercicio.

🔗 **Demo en vivo:** _(pendiente de deploy en Vercel)_

---

## Qué demuestra

- Diseño **mobile-first** con identidad visual oscura, urbana y premium. Paleta: negro carbón, blanco roto, dorado como acento.
- **Angular moderno**: standalone components, Signals y control flow (`@if` / `@for`).
- CSS propio con **variables de tema**, sin librerías de UI (Angular Material, PrimeNG, etc.).
- Galería **masonry sin librerías** — CSS puro y responsive.
- Integración de **WhatsApp API** con número y mensaje prellenados.
- Animaciones de entrada con una **directiva `appReveal`** propia (IntersectionObserver).

---

## Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Video o imagen full-screen con headline de impacto. |
| **Servicios** | Cards horizontales con nombre, descripción y precio. |
| **Galería** | Grid masonry CSS con fotos del negocio. |
| **Equipo** | Perfiles de barberos: foto, nombre y especialidad. |
| **Reserva** | Botón que abre WhatsApp con número y mensaje de prueba. |
| **Footer** | Ubicación, horarios, redes y mapa embebido. |

---

## Stack

- **Framework:** Angular 20 (standalone + Signals)
- **Lenguaje:** TypeScript
- **Estilos:** SCSS con variables CSS personalizadas
- **Tipografía:** Bebas Neue (títulos display) · [Google Fonts](https://fonts.google.com)
- **Imágenes:** Unsplash
- **Datos:** JSON local (sin backend)
- **Deploy:** Vercel

---

## Desarrollo local

```bash
npm install
npm start
```

Abrir `http://localhost:4200/`.

### Build de producción

```bash
npm run build
```

Genera los artefactos en `dist/demo-barberia/browser/`.

---

## ▲ Deploy en Vercel

El repositorio incluye [`vercel.json`](./vercel.json) con la configuración lista:

- **Framework:** Angular
- **Build command:** `npm run build`
- **Output directory:** `dist/demo-barberia/browser`
- **Rewrites:** todas las rutas a `index.html` (SPA)

Para desplegar, importar el proyecto en Vercel apuntando el **Root Directory** a esta carpeta
(`Demos/landings/demo-barberia`). Vercel detecta el `vercel.json` automáticamente; no requiere
variables de entorno.

---

## Criterios de calidad

- ✓ Lighthouse mobile ≥ 90 en Performance y Accessibility
- ✓ Responsive desde 375px (móvil) hasta 1280px (desktop)
- ✓ Botón WhatsApp con número y mensaje prellenados
- ✓ Galería sin overflow en móvil
- ✓ Sin dependencias de UI externas

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
