import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos-by-tag-view',
  templateUrl: './photos-by-tag-view.component.html'
})
export class PhotosByTagViewComponent {

  tag = '';
  list: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.list = (this.activatedRoute.data as any).getValue()['data']['list'];
    this.tag = (this.activatedRoute.data as any).getValue()['data']['tag'];
  }

}
