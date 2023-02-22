import { NgModule } from '@angular/core';
import {MyFilterPipe} from "./my-filter.pipe";

@NgModule({
  declarations: [
    MyFilterPipe
  ],
  exports: [
    MyFilterPipe
  ]
})
export class PipesModule {}
