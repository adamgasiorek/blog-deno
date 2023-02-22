import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {AboutRoutingModule} from "./about-routing.module";
import {ProfileComponent} from "./components/profile/profile.component";
import {SharedModule} from "../../shared/shared.module";
import {UiModule} from "@adamgasiorek/ui";



@NgModule({
  declarations: [
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    AboutRoutingModule,
    CommonModule,
    SharedModule,
    UiModule
  ]
})
export class AboutModule { }
