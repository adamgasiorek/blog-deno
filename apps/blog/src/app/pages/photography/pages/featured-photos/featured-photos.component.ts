import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-featured-photos',
  templateUrl: './featured-photos.component.html',
  styleUrls: ['featured-photos.component.css']
})
export class FeaturedPhotosComponent {

  // @ViewChildren(PhotoComponent) photos: QueryList<PhotoComponent> | any;
  showTags = false;
  list: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.list = (this.activatedRoute.data as any).getValue()['data'];
  }

}
