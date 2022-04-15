import { Injectable } from '@angular/core';
import { Feature } from '../features/feature.model';

@Injectable({ providedIn: 'root' })
export class FeatureService {
  featureArray: Feature[] = [
    new Feature(
      'responsive',
      '100% Responsive',
      "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
    ),
    new Feature(
      'no-limit',
      'No Photo Upload Limit',
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
    ),
    new Feature(
      'embed',
      'Available to Embed',
      ' Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
    ),
    new Feature(
      'custom-domain',
      'Custom Domain',
      'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
    ),
    new Feature(
      'boost-exposure',
      'Boost Your Exposure',
      'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
    ),
    new Feature(
      'drag-drop',
      'Drag & Drop Image',
      'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.'
    ),
  ];
}
