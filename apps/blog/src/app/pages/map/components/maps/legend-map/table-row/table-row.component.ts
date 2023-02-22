import {Component, Input, OnInit} from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";


@Component({
  selector: 'app-table-row',
  template: `
    <section>
      <div class="wrapper">
        <h4 style="display: inline-flex;align-items: normal;">
          {{title}}
          <ng-container *ngIf="nestedMap">
            <app-arrow-down-icon [size]="30" (click)="openMap = !openMap" style="height: 52px;" *ngIf="!openMap"></app-arrow-down-icon>
            <app-arrow-up-icon [size]="30" (click)="openMap = !openMap" style="height: 52px;" *ngIf="openMap"></app-arrow-up-icon>
          </ng-container>
        </h4>
        <div class="caption" *ngIf="subTitle">{{subTitle}}</div>
      </div>
      <div class="values">
        <hr/>
        <div class="headers">
          <div>
            <div class="body2" *ngIf="name"><b>{{name}}</b></div>
            <div class="overline" *ngIf="subName">{{subName}}</div>
          </div>
          <div class="overline" *ngIf="date">{{date}}</div>
        </div>
        <div class="overline description">
          {{description}}
        </div>
      </div>
    </section>

    <ng-container *ngIf="openMap">
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['table-row.component.css']
})
export class TableRowComponent {
  @Input() title: any = '';
  @Input() subTitle: any = '';
  @Input() name: any = '';
  @Input() subName: any = '';
  @Input() date: any = '';
  @Input() description: any = '';
  @Input() nestedMap = false;
  openMap = false;

}
