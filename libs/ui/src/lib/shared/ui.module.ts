import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageLayoutComponent} from "./page-layout/page-layout.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ButtonComponent} from "./button/button.component";
import {IconsModule} from "@adamgasiorek/icons";
import {DarkModeToggleButtonComponent} from "./dark-mode-toggle-button/dark-mode-toggle-button.component";

const components = [
  PageLayoutComponent,
  ButtonComponent,
  DarkModeToggleButtonComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterLink,
    IconsModule,
    RouterLinkActive
  ],
  exports: [
    ...components
  ]
})
export class UiModule {}
