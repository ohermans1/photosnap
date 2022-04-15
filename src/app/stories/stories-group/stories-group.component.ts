import { Component, OnInit } from '@angular/core';
import { GalleryImage } from 'src/app/shared/image-card/image.model';
import { ImagesService } from 'src/app/shared/images.service';

@Component({
  selector: 'app-stories-group',
  templateUrl: './stories-group.component.html',
  styleUrls: ['./stories-group.component.scss'],
})
export class StoriesGroupComponent implements OnInit {
  galleryItems!: GalleryImage[];
  constructor(public imageService: ImagesService) {}

  ngOnInit(): void {
    this.galleryItems = this.imageService.sendGalleryItems();
  }
}
