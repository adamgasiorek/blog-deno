import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../../shared/shared.module";
import {UiModule} from "@adamgasiorek/ui";
import {MoneyComponent} from "./money.component";
import {MoneyRoutingModule} from "./money-routing.module";
import {IconsModule} from "@adamgasiorek/icons";



@NgModule({
  declarations: [
    MoneyComponent,
  ],
  imports: [
    MoneyRoutingModule,
    CommonModule,
    SharedModule,
    UiModule,
    IconsModule
  ]
})
export class MoneyModule { }
