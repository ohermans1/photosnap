import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/features/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  @Input() feature!: Feature;

  constructor() {}

  ngOnInit(): void {}
}
