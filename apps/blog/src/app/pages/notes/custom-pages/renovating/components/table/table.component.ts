import { isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-table-renovating',
  templateUrl: './table.component.html',
  styles: [`
    .header {
      display: flex;
    }
    tr:nth-child(even) {
      background-color: #efefef;
    }
  `]
})
export class TableComponent {
  @Input() show = false;
  @Input() noArrow = false;

  @Input() data: Array<any> = [];
  @Input() label: string = '';

  sumTable(arr: Array<any>, param: string) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseFloat(arr[i][param]);
    }
    return Math.floor(sum);
  }

  parseFloat(s: string) {
    return parseFloat(s);
  }
}
