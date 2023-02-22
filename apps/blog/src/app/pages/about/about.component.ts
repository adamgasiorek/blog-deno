import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  data: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.data = (this.activatedRoute.data as any).getValue()['data'];
  }

}
