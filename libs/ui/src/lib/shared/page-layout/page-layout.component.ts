import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-page-layout',
  template: `
    <header>
      <ng-content select="[header]"></ng-content>
    </header>

    <main [ngClass]="{'fullSize': fullSize}">
      <section>
        <ng-content select="[body]"></ng-content>
      </section>
    </main>

    <footer>
      <ng-content select="[footer]"></ng-content>
    </footer>
  `,
  styleUrls: ['page-layout.component.css']
})
export class PageLayoutComponent {
  @Input() fullSize = false;
}
