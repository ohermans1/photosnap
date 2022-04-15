import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/features/feature.model';
import { FeatureService } from '../features.service';

@Component({
  selector: 'app-features-group',
  templateUrl: './features-group.component.html',
  styleUrls: ['./features-group.component.scss'],
})
export class FeaturesGroupComponent implements OnInit {
  featureArray!: Feature[];

  constructor(public featureService: FeatureService) {}

  ngOnInit(): void {
    this.featureArray = this.featureService.featureArray;
  }
}
