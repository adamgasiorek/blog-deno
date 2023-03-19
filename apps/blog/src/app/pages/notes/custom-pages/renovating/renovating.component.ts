import { Component, OnInit } from '@angular/core';
import {zakup} from "./data/zakup";
import {remont} from "./data/remont";
import {wykonczenieSalon} from "./data/wykonczenie-salon";
import { wykonczenieSypialnia } from './data/wykonczenie-sypialnia';
import { wykonczenieAntresola } from './data/wykonczenie-antresola';
import { wykonczenieKuchnia } from './data/wykonczenie-kuchnia';
import { wykonczenieLazienka } from './data/wykonczenie-lazienka';

@Component({
  selector: 'app-renovating',
  templateUrl: './renovating.component.html',
  styles: [`
    .header {
      display: flex;
    }
  `]
})
export class RenovatingComponent {
  showNested = false;
  showNested2 = true;
  showNested3 = true;

  zakup = zakup;
  remont = remont;
  wykonczenieSalon: any = wykonczenieSalon;
  wykonczenieSypialnia: any = wykonczenieSypialnia;
  wykonczenieAntresola: any= wykonczenieAntresola;
  wykonczenieKuchnia: any= wykonczenieKuchnia;
  wykonczenieLazienka: any = wykonczenieLazienka;

  sumTable(arr: Array<any>, param: string) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseFloat(arr[i][param]);
    }
    return Math.floor(sum);
  }

  sumAll(data: Array<any>, data1: Array<any>, data2: Array<any>) {
    return Math.floor((this.sumTable(data, 'price')/(this.sumTable(data1, 'price')+this.sumTable(data2, 'price')))*100)+'%';
  }
}
