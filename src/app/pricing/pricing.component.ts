import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  bannerContent: string[] = [
    '../../../../assets/images/pricing/desktop/hero.jpg',
    'Pricing',
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
  ];
  constructor() {}

  ngOnInit(): void {}
}
