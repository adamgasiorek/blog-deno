import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-link-icon',
  template: `
    <svg [ngClass]="{'left': left}" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" [attr.fill]="color" xmlns="http://www.w3.org/2000/svg">
      <g id="call_made_24px">
        <path id="icon/communication/call_made_24px" d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z"/>
      </g>
    </svg>
  `,
  styles: [`

    .left {
      margin-left: 8px;
    }
  `]
})
export class LinkIconComponent {
  @Input() color: string = '#fff';
  @Input() size: number = 34;
  @Input() left: boolean = true;

}
