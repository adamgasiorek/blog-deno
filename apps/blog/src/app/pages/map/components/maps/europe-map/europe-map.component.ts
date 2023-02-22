import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, Inject,
  Input,
  OnDestroy,
  OnInit, PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Firestore} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";
import {CountryModel} from "../models/country";

@Component({
  selector: 'app-europe-map',
  template: `
    <app-europe-svg
      *ngIf="isPlatformBrowser"
      [list]="list">
    </app-europe-svg>
  `
})
export class EuropeMapComponent {
  @Input() list: Array<CountryModel> = [];
  isPlatformBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

}
