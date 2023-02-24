import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotographyRoutingModule} from "./photography-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {AlbumsViewComponent} from "./pages/albums-view/albums-view.component";
import {FeaturedPhotosComponent} from "./pages/featured-photos/featured-photos.component";
import {PhotosByTagViewComponent} from "./pages/photos-by-tag-view/photos-by-tag-view.component";
import {PhotosViewComponent} from "./pages/photos-view/photos-view.component";
import {GalleryModule, UiModule} from "@adamgasiorek/ui";
import {IconsModule} from "@adamgasiorek/icons";
import {AlbumComponent} from "./components/album/album.component";
import {PipesModule} from "@adamgasiorek/pipes";
import {ReelsViewComponent} from "./pages/reels-view/reels-view.component";

const components = [
  AlbumComponent
]

const pages = [
  AlbumsViewComponent,
  FeaturedPhotosComponent,
  PhotosByTagViewComponent,
  ReelsViewComponent,
  PhotosViewComponent
]

@NgModule({
  declarations: [
    ...components,
    ...pages
  ],
  imports: [
    PhotographyRoutingModule,
    CommonModule,
    SharedModule,
    UiModule,
    IconsModule,
    GalleryModule,
    PipesModule
  ]
})
export class PhotographyModule { }
