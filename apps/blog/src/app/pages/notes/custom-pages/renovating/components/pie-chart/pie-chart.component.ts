import { isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import {set} from "@angular/fire/database";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [`
    .chart--container {
      width: 450px;
      margin-top: 32px;
    }
  `]
})
export class PieChartComponent implements AfterViewInit {
  @Input() data: any;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: []
  };
  public pieChartPlugins = [ DatalabelsPlugin ];

  constructor() {
  }

  ngAfterViewInit() {
    this.pieChartData = this.data;
    setTimeout(() => {
      this.chart?.update();
      this.chart?.chart?.update();
      this.chart?.render();

    }, 100)

  }
}
