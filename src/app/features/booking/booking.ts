import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { srcset, unsplash } from '../../shared/unsplash';
import { BUSINESS, whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-booking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {
  protected readonly biz = BUSINESS;
  protected readonly wa = whatsappLink();
  protected readonly bgId = 'photo-1599351431202-1e0f0137899a';
  protected readonly bg = unsplash(this.bgId, 1400, { q: 55 });
  protected readonly bgSrcset = srcset(this.bgId, [768, 1200, 1800], { q: 55 });
}
