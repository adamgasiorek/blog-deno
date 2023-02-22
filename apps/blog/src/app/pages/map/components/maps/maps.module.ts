import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorldMapComponent} from "./world-map/world-map.component";
import {EuropeMapComponent} from "./europe-map/europe-map.component";
import {UiModule} from "@adamgasiorek/ui";
import {LegendMapComponent} from "./legend-map/legend-map.component";
import {MapSvgComponent} from "./world-map/world-svg/map-svg.component";
import {EuropeSvgComponent} from "./europe-map/europe-svg/europe-svg.component";
import {TableRowComponent} from "./legend-map/table-row/table-row.component";
import {IconsModule} from "@adamgasiorek/icons";

@NgModule({
  declarations: [
    WorldMapComponent,
    EuropeMapComponent,
    LegendMapComponent,
    MapSvgComponent,
    EuropeSvgComponent,
    TableRowComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    IconsModule
  ],
  exports: [
    WorldMapComponent,
    LegendMapComponent,
    EuropeMapComponent
  ]
})
export class MapsModule { }
