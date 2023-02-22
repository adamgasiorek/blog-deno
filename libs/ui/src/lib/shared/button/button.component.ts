import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-button',
  template: `
    <button>
      <span class="overline"><ng-content></ng-content></span>
      <app-link-icon *ngIf="showLink" [left]="true" [size]="20"></app-link-icon>
    </button>
  `,
  styleUrls: ['button.component.css']
})
export class ButtonComponent {
  @Input() showLink = true;
}
