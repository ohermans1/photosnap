import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-modal',
  templateUrl: './price-modal.component.html',
  styleUrls: ['./price-modal.component.scss'],
})
export class PriceModalComponent implements OnInit {
  prices: number[] = [19, 39, 99];
  payPeriod: string = 'Month';
  perMonth: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  changePrices() {
    if (this.payPeriod === 'Month') {
      this.perMonth = false;
      this.payPeriod = 'Year';
      this.prices = [190, 390, 990];
    } else {
      this.perMonth = true;
      this.payPeriod = 'Month';
      this.prices = [19, 39, 99];
    }
  }
}
