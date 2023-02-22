import { Component, OnInit } from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-footer',
  template: `
      <section>
        <h3>Looking for some one to join an awesome venture</h3>
        <h1 class="middle">
          Let’s Connect <app-link-icon></app-link-icon>
        </h1>
        <h4 class="middle">
          Let’s Connect <app-link-icon [size]="20"></app-link-icon>
        </h4>
        <ul class="list">
          <li class="action"><a href="https://linkedin.com/in/adam-gasiorek" target="_blank">Linkedin</a></li>
          <li class="action"><a href="https://github.com/adamgasiorek" target="_blank">Github</a></li>
          <li class="action"><a href="https://www.instagram.com/adam.on.trip" target="_blank">Instagram</a></li>
        </ul>
      </section>
  `,
  styleUrls: ['footer.component.css']
})
export class FooterComponent {
}
