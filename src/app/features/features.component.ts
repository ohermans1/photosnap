import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../shared/features.service';
import { Feature } from './feature.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  featureArray!: Feature[];
  bannerContent: string[] = [
    '../../../../assets/images/features/desktop/hero.jpg',
    'Features',
    'We make sure all of our features are designed to be loved by every aspiring and even professional photographer, who wants to share their stories.',
  ];

  constructor(public featureService: FeatureService) {}

  ngOnInit(): void {
    this.featureArray = this.featureService.featureArray;
  }
}
