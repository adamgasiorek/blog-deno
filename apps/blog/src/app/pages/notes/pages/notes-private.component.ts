import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {Auth, signOut} from "@angular/fire/auth";
import {Firestore} from "@angular/fire/firestore";
@Component({
  selector: 'app-notes-private',
  template: `
    <app-page-layout>

      <ng-container header>
        <app-header></app-header>
      </ng-container>

      <ng-container body>

        <div class="headers">
          <h1 class="web">Private notes</h1>
          <h3 class="mobile">Private notes</h3>
          <div class="buttons">
            <app-button *ngIf="!isProd" [routerLink]="['/', 'notes', 'private', 'editor']" style="margin-right: 8px;">
              Editor
            </app-button>
            <app-button (click)="logout()">
              Logout
            </app-button>
          </div>
        </div>


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
  `,
  styles: [`
    .headers {
      padding: 0 0 40px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
    }
  `]
})
export class PrivateNotesComponent {
  isProd;

  list: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private auth: Auth,
              private firestore: Firestore,
              private router: Router) {
    this.isProd =environment.production;

    this.list = (this.activatedRoute.data as any).getValue()['data'];
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['']);
    })
  }

}
