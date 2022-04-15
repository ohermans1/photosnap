import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent implements OnInit {
  @Input() bannerContent!: string[];

  constructor() {}

  ngOnInit(): void {}
}
