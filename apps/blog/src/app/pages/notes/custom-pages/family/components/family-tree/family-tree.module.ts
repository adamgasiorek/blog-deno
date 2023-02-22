import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FamilyTreeComponent} from "./family-tree.component";
import {LazyLoadScriptService} from "./lazy-load-script.service";



@NgModule({
  declarations: [
    FamilyTreeComponent
  ],
  exports: [
    FamilyTreeComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    LazyLoadScriptService
  ]
})
export class FamilyTreeModule { }
