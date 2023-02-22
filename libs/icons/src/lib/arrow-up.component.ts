import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-arrow-up-icon',
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 48 48">
      <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/>
<!--      <g id="arrow_forward_24px">-->
<!--        <path id="icon/navigation/arrow_forward_24px" d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black"/>-->
<!--      </g>-->
<!--      <path fill-rule="nonzero" d="m32.66 5.71 220.49 241.11L479.35 0 512 29.87 253.12 312.36 0 35.58z"/>-->
    </svg>
  `
})
export class ArrowUpIconComponent {
  @Input() color: string = '#fff';
  @Input() size: number = 40;

}
