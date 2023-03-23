import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {take} from "rxjs";

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styles: [`
    .header {
      display: flex;
    }
    tr:nth-child(even) {
      background-color: #efefef;
    }
  `]
})
export class MoneyComponent {
  ethRate: any;
  silverRate: any;
  owned = {
    eth: 1.24,
    silver: 1028
  };

  constructor(private http: HttpClient) {
    this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&ids=ethereum')
      .pipe(take(1))
      .subscribe((data) => {
        this.ethRate = data[0].current_price;
      })

    this.http.get<any>(`https://api.metalpriceapi.com/v1/latest?api_key=811b85be57837ebf5c19580eb40ca093&base=PLN&currencies=XAG`)
      .pipe(take(1))
      .subscribe((data) => {
        this.silverRate = 1/data.rates['XAG'] /28.3;
      })
  }

}
