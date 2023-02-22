import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-note',
  template: `
    <app-page-layout>

      <ng-container header>
        <app-header></app-header>
      </ng-container>

      <ng-container body>

        <div class="markdown" #dataContainer></div>

      </ng-container>

      <ng-container footer>
        <app-footer></app-footer>
      </ng-container>

    </app-page-layout>

  `,
  styles: [`
    .markdown ul {
      list-style: none;
      padding-inline-start: 20px;
    }

    .markdown ul div {
      font-weight: 200 !important;
      line-height: 160% !important;
    }

    .markdown ul div input {
      margin-right: 8px;
    }

    .markdown img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 500px;
    }

  `]
})
export class NoteComponent implements AfterViewInit {

  @ViewChild('dataContainer') dataContainer: any;

  data;

  constructor(private activatedRoute: ActivatedRoute) {
    this.data = (this.activatedRoute.data as any).getValue()['data'];
  }

  ngAfterViewInit() {
    this.dataContainer.nativeElement.innerHTML = this.data['content'];
  }


}
