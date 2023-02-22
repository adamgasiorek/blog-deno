import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkIconComponent} from "./link-icon.component";
import {MenuIconComponent} from "./menu-icon.component";
import {CloseIconComponent} from "./close-icon.component";
import {ArrowRightIconComponent} from "./arrow-right.component";
import {ArrowLeftIconComponent} from "./arrow-left.component";
import {ArrowDownIconComponent} from "./arrow-down.component";
import {ArrowUpIconComponent} from "./arrow-up.component";
import {CheckboxIconComponent} from "./checkbox.component";
import {CheckboxFilledIconComponent} from "./checkbox-filled.component";
import {SunIconComponent} from "./sun.component";
import {MoonIconComponent} from "./moon.component";

const icons = [
  LinkIconComponent,
  MenuIconComponent,
  CloseIconComponent,
  ArrowRightIconComponent,
  ArrowLeftIconComponent,
  ArrowDownIconComponent,
  ArrowUpIconComponent,
  CheckboxIconComponent,
  SunIconComponent,
  MoonIconComponent,
  CheckboxFilledIconComponent
];


@NgModule({
  declarations: [
    ...icons
  ],
  exports: [
    ...icons
  ],
    imports: [
        CommonModule,
    ]
})
export class IconsModule { }
