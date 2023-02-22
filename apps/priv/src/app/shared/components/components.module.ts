import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';



@NgModule({
    declarations: [
        BackgroundComponent
    ],
    exports: [
        BackgroundComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
