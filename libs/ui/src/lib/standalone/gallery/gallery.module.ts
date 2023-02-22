import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from "./gallery.component";
import {PhotoComponent} from "./photo/photo.component";

const components = [
  GalleryComponent,
  PhotoComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class GalleryModule {}
