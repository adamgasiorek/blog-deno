import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {doc, docData, Firestore} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";
import {CountryModel} from "./components/maps/models/country";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent {

  list: Array<CountryModel> = [];

  constructor(private firestore: Firestore,
              private activatedRoute: ActivatedRoute) {
    this.list = (this.activatedRoute.data as any).getValue()['data'];
  }

}
