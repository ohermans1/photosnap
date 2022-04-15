import { Injectable, OnChanges } from '@angular/core';
import { GalleryImage } from './image-card/image.model';

@Injectable({ providedIn: 'root' })

export class SelectedImageService implements OnChanges {
  selectedImage!: GalleryImage;

  ngOnChanges(): void {
    console.log(this.selectedImage);
  }
}
