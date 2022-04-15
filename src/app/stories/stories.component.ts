import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../shared/image-card/image.model';
import { ImagesService } from '../shared/images.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  galleryItems!: GalleryImage[];
  constructor(public imageService: ImagesService) {}

  ngOnInit(): void {
    this.galleryItems = this.imageService.sendGalleryItems();
  }
}
