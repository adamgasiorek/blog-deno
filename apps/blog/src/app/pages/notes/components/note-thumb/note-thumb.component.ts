import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-note-thumb',
  template: `
    <div class="cursor container" [routerLink]="['/', 'notes', link]">
      <h3 *ngIf="title !== ''">{{title}}</h3>
      <div class="image" [ngStyle]="{'background-image': 'url(' + img + ')'}"></div>
    </div>
  `,
  styleUrls: ['note-thumb.component.css']
})
export class NoteThumbComponent {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() img: string = '';

  constructor() {
  }
}
