import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../../shared/shared.module";
import {UiModule} from "@adamgasiorek/ui";
import {RenovatingComponent} from "./renovating.component";
import {RenovatingRoutingModule} from "./renovating-routing.module";
import {PieChartComponent} from "./components/pie-chart/pie-chart.component";
import {NgChartsModule} from "ng2-charts";
import {TableComponent} from "./components/table/table.component";
import {IconsModule} from "@adamgasiorek/icons";



@NgModule({
  declarations: [
    RenovatingComponent,
    TableComponent,
    PieChartComponent
  ],
  imports: [
    RenovatingRoutingModule,
    CommonModule,
    SharedModule,
    NgChartsModule,
    UiModule,
    IconsModule
  ]
})
export class RenovatingModule { }
