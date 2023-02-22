import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-arrow-left-icon',
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="arrow_forward_24px">
        <path id="icon/navigation/arrow_forward_24px" d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black"/>
      </g>
    </svg>
  `,
  styles: [`
    :host {
      margin-right: 8px;
    }

    @media only screen and (max-width: 1024px) {
      :host {
        margin-right: 0;
      }
    }

    :host svg {
      transform: scale(-1, 1);
    }

  `]
})
export class ArrowLeftIconComponent {
  @Input() color: string = '#fff';
  @Input() size: number = 40;

}
