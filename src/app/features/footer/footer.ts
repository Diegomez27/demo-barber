import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { BUSINESS, whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly biz = BUSINESS;
  protected readonly wa = whatsappLink();
  protected readonly year = new Date().getFullYear();
  protected readonly mapQuery = encodeURIComponent(BUSINESS.mapsQuery);
}
