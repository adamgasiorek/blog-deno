import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {IconsModule} from "@adamgasiorek/icons";
import {LoaderComponent} from "./loader/loader.component";
import {UiModule} from "@adamgasiorek/ui";

const components = [
  HeaderComponent,
  FooterComponent,
  LoaderComponent,
]

@NgModule({
  declarations: [...components],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        IconsModule,
        UiModule
    ],
  exports: [
    ...components
  ]
})
export class SharedModule {}
