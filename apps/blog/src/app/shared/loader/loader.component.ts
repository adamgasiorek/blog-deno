import { Component, OnInit } from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-loader',
  template: `
    <div class="progress-bar" *ngIf="loading">
      <div class="indeterminate-progress-bar">
        <div class="indeterminate-progress-bar__progress"></div>
      </div>
    </div>
  `
})
export class LoaderComponent {


  loading: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: any) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
