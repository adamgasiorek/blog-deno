import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagesService} from "./images.service";

@NgModule({
  imports: [CommonModule],
  providers: [ImagesService]
})
export class ImagesServiceModule {}