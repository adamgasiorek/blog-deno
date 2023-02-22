import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-download-pdf',
  template: `
    <app-button (click)="downloadAsPDF()" >
      PDF
    </app-button>
  `
})
export class DownloadPdfComponent {
  @Input() data: any;

  constructor() {
    // (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  public downloadAsPDF() {
    // const pdfTable = this.data;
    //
    // var html = htmlToPdfmake(pdfTable.innerHTML);
    //
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).open();
  }

}
