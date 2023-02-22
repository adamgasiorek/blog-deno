import { Component, OnInit } from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-header',
  template: `

    <section>

      <img class="cursor isLight" [routerLink]="['/']" src="assets/logo.png" />
      <img class="cursor isDark" [routerLink]="['/']" src="assets/logo_white.png" />
      <div style="display: flex;">

        <ul class="list web">
          <li class="action">
            <a [routerLink]="['/', 'photos']" [routerLinkActive]="'isActive'">
              Photography
            </a>
          </li>
          <li class="action">
            <a [routerLink]="['/', 'resume']" [routerLinkActive]="'isActive'">
              Resume
            </a>
          </li>
          <li class="action">
            <a [routerLink]="['/', 'notes']" [routerLinkActive]="'isActive'">
              Notes
            </a>
          </li>
          <li class="action last-text">
            <a [routerLink]="['/', 'about']" [routerLinkActive]="'isActive'">
              About
            </a>
          </li>
          <li class="action">
          </li>
        </ul>

        <app-dark-mode-toggle-button></app-dark-mode-toggle-button>
        <app-close-icon *ngIf="mobileMenuOpen" (click)="mobileMenuOpen = false"></app-close-icon>
        <app-menu-icon *ngIf="!mobileMenuOpen" (click)="mobileMenuOpen = true"></app-menu-icon>
        <div class="mobileSection" *ngIf="mobileMenuOpen">
          <ul class="list">
            <li class="action" (click)="mobileMenuOpen = false">
              <a [routerLink]="['/', 'photos']" [routerLinkActive]="'isActive'">
                Photography
              </a>
            </li>
            <li class="action" (click)="mobileMenuOpen = false">
              <a [routerLink]="['/', 'resume']" [routerLinkActive]="'isActive'">
                Resume
              </a>
            </li>
            <li class="action" (click)="mobileMenuOpen = false">
              <a [routerLink]="['/', 'about']" [routerLinkActive]="'isActive'">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  mobileMenuOpen: boolean = false;
}


