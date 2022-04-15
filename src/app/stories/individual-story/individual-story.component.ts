import { Component, OnInit } from '@angular/core';
import { GalleryImage } from 'src/app/shared/image-card/image.model';
import { SelectedImageService } from 'src/app/shared/selected-image.service';

@Component({
  selector: 'app-individual-story',
  templateUrl: './individual-story.component.html',
  styleUrls: ['./individual-story.component.scss'],
})
export class IndividualStoryComponent implements OnInit {
  story!: GalleryImage;

  constructor(public selectedImageService: SelectedImageService) {}

  ngOnInit(): void {
    this.story = this.selectedImageService.selectedImage;
  }
}
