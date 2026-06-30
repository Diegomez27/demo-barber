import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { whatsappLink } from '../whatsapp';

@Component({
  selector: 'app-whatsapp-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whatsapp-fab.html',
  styleUrl: './whatsapp-fab.scss',
})
export class WhatsappFab {
  protected readonly visible = signal(false);
  protected readonly wa = whatsappLink();

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 520);
  }
}
