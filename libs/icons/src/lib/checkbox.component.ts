import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-checkbox-icon',
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24">
      <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z"/>

<!--      <path d="m21 4.009c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.449 7.882 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero"/>-->
<!--      <g id="arrow_forward_24px">-->
<!--        <path id="icon/navigation/arrow_forward_24px" d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black"/>-->
<!--      </g>-->
<!--      <path fill-rule="nonzero" d="m32.66 5.71 220.49 241.11L479.35 0 512 29.87 253.12 312.36 0 35.58z"/>-->
    </svg>
  `
})
export class CheckboxIconComponent {
  @Input() color: string = '#fff';
  @Input() size: number = 40;

}
