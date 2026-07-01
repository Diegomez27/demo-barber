import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
} from '@angular/core';
import { animate, scrambleText, svg, type JSAnimation } from 'animejs';
import { HERO_IMAGE_ID } from '../../shared/barberia.data';
import { srcset, unsplash } from '../../shared/unsplash';
import { whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private scramble?: JSAnimation;
  private razorDraw?: JSAnimation;

  protected readonly wa = whatsappLink();
  protected readonly heroSrc = unsplash(HERO_IMAGE_ID, 1600, { q: 60 });
  protected readonly heroSrcset = srcset(
    HERO_IMAGE_ID,
    [768, 1080, 1440, 1920, 2400],
    { q: 60 },
  );

  constructor() {
    // Corre una sola vez al montar en el navegador (no en SSR ni tests).
    afterNextRender(() => this.scrambleHeadline());
  }

  // El texto real ya pintó (es el LCP y arranca con opacity 1); el scramble
  // solo muta caracteres ya visibles, nunca oculta el titular.
  private scrambleHeadline(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets =
      this.host.nativeElement.querySelectorAll<HTMLElement>('[data-scramble]');
    if (!targets.length) return;

    this.scramble = animate(targets, {
      innerHTML: scrambleText({
        chars: 'A-Z',
        duration: 850,
        // Escalonado: línea 1, luego "es", luego "oficio".
        delay: (_target, index) => 120 + index * 160,
      }),
    });

    // La navaja se dibuja con trazo mientras el texto se resuelve.
    const razorParts = this.host.nativeElement.querySelectorAll<SVGGeometryElement>(
      '.hero__razor path, .hero__razor circle',
    );
    if (razorParts.length) {
      this.razorDraw = animate(svg.createDrawable(razorParts), {
        draw: ['0 0', '0 1'],
        duration: 1100,
        delay: (_target, index) => 200 + (index ?? 0) * 120,
        ease: 'inOutQuad',
      });
    }
  }

  ngOnDestroy(): void {
    this.scramble?.revert();
    this.razorDraw?.revert();
  }
}
