import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SERVICES } from '../../shared/barberia.data';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { whatsappLink } from '../../shared/whatsapp';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services = SERVICES;

  protected wa(serviceName: string): string {
    return whatsappLink(`Hola, quiero agendar: ${serviceName}`);
  }
}
