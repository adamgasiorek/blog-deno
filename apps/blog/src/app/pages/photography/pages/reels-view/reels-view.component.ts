import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reels-view',
  templateUrl: './reels-view.component.html',
  styleUrls: ['reels-view.component.css']
})
export class ReelsViewComponent {

  list: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.list = (this.activatedRoute.data as any).getValue()['data'];
  }

}
