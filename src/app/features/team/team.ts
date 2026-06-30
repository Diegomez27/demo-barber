import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TEAM } from '../../shared/barberia.data';
import { Barber } from '../../shared/models';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { srcset, unsplash } from '../../shared/unsplash';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly team = TEAM;

  protected src(b: Barber): string {
    return unsplash(b.imageId, 600, { ar: '3:4', faces: true });
  }

  protected srcsetFor(b: Barber): string {
    return srcset(b.imageId, [400, 600, 800], { ar: '3:4', faces: true });
  }
}
