import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-section-image',
  template: `
    <section>
      <div class="labels">
        <div>
          <h4>{{title}}</h4>
          <div class="body1">{{description}}</div>
        </div>
        <app-arrow-right-icon class="web"></app-arrow-right-icon>
        <app-arrow-right-icon [size]="24" class="mobile"></app-arrow-right-icon>
      </div>
      <div class="img">
        <img [src]="image" />
      </div>
    </section>
  `,
  styleUrls: ['section-image.component.css']
})
export class SectionImageComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: Array<string> = [''];
}
