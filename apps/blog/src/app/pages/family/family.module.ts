import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family.component';
import {FamilyRoutingModule} from "./family-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {UiModule} from "@adamgasiorek/ui";
import {FamilyTreeModule} from "./components/family-tree/family-tree.module";



@NgModule({
  declarations: [
    FamilyComponent,
  ],
  imports: [
    FamilyRoutingModule,
    CommonModule,
    SharedModule,
    UiModule,
    FamilyTreeModule
  ]
})
export class FamilyModule { }
