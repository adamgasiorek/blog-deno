import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {MapRoutingModule} from "./map-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {UiModule} from "@adamgasiorek/ui";
import {MapsModule} from "./components/maps/maps.module";



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    MapRoutingModule,
    CommonModule,
    MapsModule,
    SharedModule,
    UiModule
  ]
})
export class MapModule { }
