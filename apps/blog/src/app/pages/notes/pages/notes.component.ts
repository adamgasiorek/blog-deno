import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-notes',
  template: `
    <app-page-layout>

      <ng-container header>
        <app-header></app-header>
      </ng-container>

      <ng-container body>

        <section style="margin-bottom: 32px;">
          <app-button *ngIf="!isProd" [routerLink]="['/', 'notes', 'editor']">
            Editor
          </app-button>
        </section>

        <div class="gallery">
          <app-note-thumb
            *ngFor="let item of list"
            [title]="item.title"
            [link]="item.id"
            [img]="item.thumbnail">
          </app-note-thumb>
        </div>

      </ng-container>

      <ng-container footer>
        <app-footer></app-footer>
      </ng-container>

    </app-page-layout>
  `
})
export class NotesComponent {
  isProd;

  list: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.isProd =environment.production;

    this.list = (this.activatedRoute.data as any).getValue()['data'];
  }

}
