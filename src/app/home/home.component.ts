import { Component, OnInit } from '@angular/core';
import { Feature } from '../features/feature.model';
import { FeatureService } from '../shared/features.service';
import { GalleryImage } from '../shared/image-card/image.model';
import { ImagesService } from '../shared/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  galleryItems!: GalleryImage[];
  featureArray!: Feature[];
  constructor(
    public imageService: ImagesService,
    public featureService: FeatureService
  ) {}

  ngOnInit(): void {
    this.galleryItems = this.imageService.galleryItems.slice(0, 4);
    this.featureArray = this.featureService.featureArray.slice(0, 3);
  }
}
