import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-menu-icon',
  template: `
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13.3333V10H35V13.3333H5ZM5 21.6667H35V18.3333H5V21.6667ZM5 30H35V26.6667H5V30Z" fill="black" fill-opacity="0.54"/>
    </svg>
  `
})
export class MenuIconComponent {
  @Input() color: string = '#fff';

}
