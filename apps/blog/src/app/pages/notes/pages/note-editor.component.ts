import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-note-editor',
  template: `
    <app-page-layout>

      <ng-container header>
        <app-header></app-header>
      </ng-container>

      <ng-container body>

        <section>

          <textarea [(ngModel)]="text"></textarea>
          <markdown class="markdown" ngPreserveWhitespaces [data]="text">
          </markdown>
        </section>

      </ng-container>

      <ng-container footer>
        <app-footer></app-footer>
      </ng-container>

    </app-page-layout>
  `,
  styles: [`
    section {
      display: flex;
      min-height: 500px;
    }

    textarea {
      flex: 1;
      margin-right: 50px;
      max-width: 50%;
      overflow: hidden;
    }

    markdown {
      flex: 1;
      max-width: 50%;
      overflow: hidden;
    }
  `]
})
export class NoteEditorComponent {

  text = '### Edit';


}

