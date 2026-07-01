import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from './features/footer/footer';
import { Gallery } from './features/gallery/gallery';
import { Hero } from './features/hero/hero';
import { Services } from './features/services/services';
import { Team } from './features/team/team';
import { SiteHeader } from './shared/site-header/site-header';
import { WhatsappFab } from './shared/whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    Hero,
    Services,
    Gallery,
    Team,
    Footer,
    WhatsappFab,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
