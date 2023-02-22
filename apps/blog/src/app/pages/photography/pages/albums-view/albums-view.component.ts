import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-albums-view',
  templateUrl: './albums-view.component.html',
  styleUrls: ['albums-view.component.css']
})
export class AlbumsViewComponent {


  showEu = true;
  showAF = true;
  showAS = true;
  showSA = true;
  showNA = true;

  list: Array<any> = [];
  listAF: Array<any> = [];
  listAS: Array<any> = [];
  listNA: Array<any> = [];
  listSA: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.list = [].concat(...(this.activatedRoute.data as any).getValue()['data']).filter((item: any) => item.continent === 'europe').filter((item: any) => item.title !== undefined);
    this.listAF = [].concat(...(this.activatedRoute.data as any).getValue()['data']).filter((item: any) => item.continent === 'africa').filter((item: any) => item.title !== undefined);
    this.listAS = [].concat(...(this.activatedRoute.data as any).getValue()['data']).filter((item: any) => item.continent === 'asia').filter((item: any) => item.title !== undefined);
    this.listSA = [].concat(...(this.activatedRoute.data as any).getValue()['data']).filter((item: any) => item.continent === 'south-america').filter((item: any) => item.title !== undefined);
    this.listNA = [].concat(...(this.activatedRoute.data as any).getValue()['data']).filter((item: any) => item.continent === 'north-america').filter((item: any) => item.title !== undefined);
  }

}
