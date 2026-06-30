import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GALLERY } from '../../shared/barberia.data';
import { GalleryShot } from '../../shared/models';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { srcset, unsplash } from '../../shared/unsplash';

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly shots = GALLERY;

  protected src(shot: GalleryShot): string {
    return unsplash(shot.id, shot.w, { ar: `${shot.w}:${shot.h}` });
  }

  protected srcsetFor(shot: GalleryShot): string {
    const ar = `${shot.w}:${shot.h}`;
    return srcset(shot.id, [400, 600, 900], { ar });
  }
}
