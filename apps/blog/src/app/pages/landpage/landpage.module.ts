import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from './landpage.component';
import {LandpageRoutingModule} from "./landpage-routing.module";
import {UiModule} from "@adamgasiorek/ui";
import {SharedModule} from "../../shared";
import {HeroComponent} from "./components/hero/hero.component";
import {SectionImageComponent} from "./components/section-image/section-image.component";
import {IconsModule} from "@adamgasiorek/icons";

@NgModule({
  declarations: [
    HeroComponent,
    SectionImageComponent,
    LandpageComponent
  ],
  imports: [
    LandpageRoutingModule,
    UiModule,
    IconsModule,
    SharedModule,
    CommonModule
  ]
})
export class LandpageModule { }
