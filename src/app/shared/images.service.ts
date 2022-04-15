import { Injectable } from '@angular/core';
import { GalleryImage } from './image-card/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  galleryItems: GalleryImage[] = [
    new GalleryImage(
      'April 16th 2020',
      'The Mountains',
      'by John Appleseed',
      'mountains',
      'stories/mountains'
    ),
    new GalleryImage(
      'April 14th 2020',
      'Sunset Cityscapes',
      'by Benjamin Cruz',
      'cityscapes',
      'stories/cityscapes'
    ),
    new GalleryImage(
      'April 11th 2020',
      '18 Days Voyage',
      'by Alexei Borodin',
      '18-days-voyage',
      'stories/18-days-voyage'
    ),
    new GalleryImage(
      'April 9th 2020',
      'Architecturals',
      'by Samantha Brooke',
      'architecturals',
      'stories/architecturals'
    ),
    new GalleryImage(
      'April 7th 2020',
      'World Tour 2019',
      'by Timothy Wagner',
      'world-tour',
      'stories/world-tour'
    ),
    new GalleryImage(
      'April 3rd 2020',
      'Unforeseen Corners',
      'by William Malcolm',
      'unforeseen-corners',
      'stories/unforeseen-corners'
    ),
    new GalleryImage(
      'March 29th 2020',
      'King on Africa: Part II',
      'by Tim Hillenburg',
      'king-on-africa',
      'stories/king-on-africa'
    ),
    new GalleryImage(
      'March 21st 2020',
      'The Trip to Nowhere',
      'by Felicia Rourke',
      'trip-to-nowhere',
      'stories/trip-to-nowhere'
    ),
    new GalleryImage(
      'March 19th 2020',
      'Rage of The Sea',
      'by Mohammed Abdul',
      'rage-of-the-sea',
      'stories/rage-of-the-sea'
    ),
    new GalleryImage(
      'March 16th 2020',
      'Running Free',
      'by Michelle',
      'running-free',
      'stories/running-free'
    ),
    new GalleryImage(
      'March 11th 2020',
      'Behind the Waves',
      'by Lamarr Wilson',
      'behind-the-waves',
      'stories/behind-the-waves'
    ),
    new GalleryImage(
      'March 9th 2020',
      'Calm Waters',
      'by Samantha Brooke',
      'calm-waters',
      'stories/calm-waters'
    ),
    new GalleryImage(
      'March 5th 2020',
      'The Milky Way',
      'by Benjamin Cruz',
      'milky-way',
      'stories/milky-way'
    ),
    new GalleryImage(
      'March 4th 2020',
      'Night at The Dark Forest',
      'by  Mohammed Abdul',
      'dark-forest',
      'stories/dark-forest'
    ),
    new GalleryImage(
      'March 1st 2020',
      'Somwarpet’s Beauty',
      'by Michelle',
      'somwarpet',
      'stories/somwarpet'
    ),
    new GalleryImage(
      'February 25th 2020',
      'Land of Dreams',
      'by William Malcolm',
      'land-of-dreams',
      'stories/land-of-dreams'
    ),
  ];

  sendGalleryItems() {
    return this.galleryItems.slice();
  }
}
