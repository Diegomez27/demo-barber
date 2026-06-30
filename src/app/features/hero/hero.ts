import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO_IMAGE_ID } from '../../shared/barberia.data';
import { srcset, unsplash } from '../../shared/unsplash';
import { whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly wa = whatsappLink();
  protected readonly heroSrc = unsplash(HERO_IMAGE_ID, 1600, { q: 60 });
  protected readonly heroSrcset = srcset(
    HERO_IMAGE_ID,
    [768, 1080, 1440, 1920, 2400],
    { q: 60 },
  );
}
