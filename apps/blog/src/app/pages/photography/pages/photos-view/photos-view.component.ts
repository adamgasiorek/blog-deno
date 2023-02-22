import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photos-view',
  templateUrl: './photos-view.component.html',
  styleUrls: ['photos-view.component.css']
})
export class PhotosViewComponent {

  nestedAlbums: Array<any> = [];
  list: Array<any> = [];
  album: any;
  rootUrlForNestedAlbums = '';
  isRootUrlForNestedAlbums = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.nestedAlbums = (this.activatedRoute.data as any).getValue()['data']['nestedAlbums'];
    this.list = (this.activatedRoute.data as any).getValue()['data']['list'];
    this.album = (this.activatedRoute.data as any).getValue()['data']['album'];
    this.rootUrlForNestedAlbums = router.url.split('/').slice(4).join('-');
    this.isRootUrlForNestedAlbums = this.rootUrlForNestedAlbums.includes('-');
  }

}
