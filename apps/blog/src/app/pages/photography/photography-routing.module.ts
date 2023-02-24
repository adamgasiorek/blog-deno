import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {ImagesServiceModule} from "@adamgasiorek/services";
import {FeaturedPhotosComponent} from "./pages/featured-photos/featured-photos.component";
import {FeaturedPhotosResolver} from "./pages/featured-photos/featured-photos.resolver";
import {PhotosByTagViewComponent} from "./pages/photos-by-tag-view/photos-by-tag-view.component";
import {PhotosByTagResolver} from "./pages/photos-by-tag-view/photos-by-tag.resolver";
import {AlbumsViewComponent} from "./pages/albums-view/albums-view.component";
import {AlbumsAllResolver} from "./pages/albums-view/albums-all.resolver";
import {PhotosViewComponent} from "./pages/photos-view/photos-view.component";
import {PhotosDetailsResolver} from "./pages/photos-view/photos-detail.resolver";
import {PhotosDetailsNestedResolver} from "./pages/photos-view/photos-detail-nested.resolver";
import {ReelsViewComponent} from "./pages/reels-view/reels-view.component";
import {ReelsViewResolver} from "./pages/reels-view/reels-view.resolver";

const routes: Routes = [
  {
    path: '',
    component: FeaturedPhotosComponent,
    resolve: {
      data: FeaturedPhotosResolver
    }
  },
  {
    path: 'tags/:tag',
    component: PhotosByTagViewComponent,
    resolve: {
      data: PhotosByTagResolver
    }
  },
  {
    path: 'reels',
    component: ReelsViewComponent,
    resolve: {
      data: ReelsViewResolver
    }
  },
  {
    path: 'albums',
    children: [
      {
        path: '',
        component: AlbumsViewComponent,
        resolve: {
          data: AlbumsAllResolver
        }
      },
      {
        path: ':continent/:parent/:name',
        component: PhotosViewComponent,
        resolve: {
          data: PhotosDetailsNestedResolver
        }
      },
      {
        path: ':continent/:name',
        component: PhotosViewComponent,
        resolve: {
          data: PhotosDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    ImagesServiceModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    FeaturedPhotosResolver,
    PhotosByTagResolver,
    PhotosDetailsResolver,
    PhotosDetailsNestedResolver,
    ReelsViewResolver,
    AlbumsAllResolver
  ],
  exports: [RouterModule]
})
export class PhotographyRoutingModule { }
