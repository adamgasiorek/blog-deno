import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-album',
  template: `
    <div class="cursor container" [routerLink]="nestedLink ? ['/', 'photos', 'albums', continent, link, nestedLink] : ['/', 'photos', 'albums', continent, link]">
      <h3 *ngIf="title !== ''">{{title}}</h3>
      <div class="image" [ngStyle]="{'background-image': 'url(' + img + ')'}"></div>
    </div>
  `,
  styleUrls: ['album.component.css']
})
export class AlbumComponent {
  @Input() title: string = '';
  @Input() nestedLink: string = '';
  @Input() link: string = '';
  @Input() img: string = '';
  @Input() continent: string = '';

  constructor() {
  }
}
