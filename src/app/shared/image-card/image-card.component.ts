import { Component, Input, OnInit } from '@angular/core';
import { SelectedImageService } from '../selected-image.service';
import { GalleryImage } from './image.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() image!: GalleryImage;

  constructor(public selectedImageService: SelectedImageService) {}

  ngOnInit(): void {}

  selectedImage() {
    this.selectedImageService.selectedImage = this.image;
  }
}
