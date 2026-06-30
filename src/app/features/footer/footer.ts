import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { BUSINESS, mapsEmbed, whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly biz = BUSINESS;
  protected readonly wa = whatsappLink();
  protected readonly year = new Date().getFullYear();
  protected readonly mapQuery = encodeURIComponent(BUSINESS.mapsQuery);
  protected readonly map: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(mapsEmbed());
}
