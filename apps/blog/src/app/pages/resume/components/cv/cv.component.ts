import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
const vfs_fonts = require("./vfs_fonts");
const htmlToPdfmake = require("html-to-pdfmake");

(pdfMake as any).vfs = vfs_fonts.pdfMake.vfs;

(pdfMake as any).fonts = {
  Poppins: {
    normal: 'Poppins-Regular.ttf',
    bold: 'Poppins-Bold.ttf',
    italics: 'Poppins-Italic.ttf',
    bolditalics: 'Poppins-MediumItalic.ttf'
  }
};

@Component({
  selector: 'app-cv',
  template: `
    <div class="headers">
      <h1 class="web">Resume</h1>
      <h3 class="mobile">Resume</h3>
      <div class="buttons">
<!--        <app-download-pdf [data]="pdfTable"></app-download-pdf>-->
        <app-button (click)="downloadAsPDF()" [showLink]="true" >
          Download
        </app-button>
      </div>
    </div>

    <div #pdfTable>
      <div style="display: none;">
        <h4>About me</h4>
        <hr data-pdfmake="{&quot;margin&quot;:[0,0,0,12]}"/>
        <img src="assets/me.jpeg" style="width:100px;height:142px;" />
        <br/>
        <br/>
      </div>
      <app-cv-table-row
        *ngFor="let cv of myCV"
        [title]="cv?.title"
        [subTitle]="cv?.subTitle"
        [name]="cv?.name"
        [subName]="cv?.subName"
        [description]="cv?.description"
        [date]="cv?.date">
      </app-cv-table-row>
    </div>
  `,
  styleUrls: ['cv.component.css']
})
export class CvComponent implements OnInit {
  @ViewChild('pdfTable') pdfTable: any;

  myCV = [
    {
      title: 'Experience',
      subTitle: '',
      name: 'Silent Eight',
      subName: 'Frontend Developer',
      description: 'Contributing at creating a technology leveraging AI to create compliance platforms for the world\'s leading financial institutions. Mission of the company is to empower our clients in their fight to eliminate financial crime. \n' +
        'Technologies: Angular 9-14, Ngrx, SASS, Typescript, Cypress, NX',
      date: 'Jan 2021 - Present'
    },
    {
      title: '',
      name: 'Alphta Digital Lab',
      subName: 'Frontend Developer',
      description: 'Working with short time projects dedicated to end users and ecommerce. Planning and manage projects.\n' +
        'Prepared  international website with cooperation with frontend and graphics team.\n' +
        'Technologies: Angular 9-10,  Ngxs, Ngrx, SASS, Typescript, Jasmine & Karma',
      date: 'Sep 2020 - Jan 2021'
    },
    {
      title: '',
      name: 'appsgarden',
      subName: 'Frontend Developer',
      description: 'Delivering IT projects for enterprise clients. Creating dedicated software for oil companies, internet applications which helps manage industry tools . Conducting frontend side of projects.\n' +
        'Accomplishments:\n' +
        'Prepared  international website with cooperation with frontend and graphics team\n' +
        'Created applications from scratch, and extending with new features.\n' +
        'Technologies: Angular 9-10,  Ngxs, Ngrx, SASS, Typescript, Jasmine & Karma',
      date: 'Apr 2020 - Sep 2020'
    },
    {
      title: '',
      name: 'Accesto',
      subName: 'Frontend Developer',
      description: 'Providing modern IT solutions for business and start-ups. Creating dedicated software for companies, internet applications, IT systems and management panels as well as dynamic websites. Helping  large enterprises to optimize their work and newly emerging start-ups in the implementation of their plans.\n' +
        'Accomplishments:\n' +
        'Leading frontend team in creating international website, which helps user to find proper laptop\n' +
        'Refactoring old applications to newest technologies, rewriting components\n' +
        'Developing applications, creating new features to existing solutions\n' +
        'Technologies: Angular 7-8,  PHP + Twig, React, Vue, Ngrx, SASS, Typescript, Jasmine & Karma, JQuery',
      date: 'May 2019 - Apr 2020'
    },
    {
      title: '',
      name: 'TVT Media',
      subName: 'Junior Frontend Developer',
      description: 'Managing content around the world , between programme planning and playout, TVT provide all the components to build channels: sourcing tapes and scripts, ingesting and transcoding, complying, editing, subtitling, translating and then sending off by fibre optic\n' +
        'Accomplishments:\n' +
        'Designing the application architecture in Angular 4\n' +
        'The development of business application logic\n' +
        'Visual design of the created applications\n' +
        'Technologies: Angular 2-6, Ngrx, SASS, Typescript, Jasmine & Karma, JQuery, PHP + Twig, React, Vue',
      date: 'May 2019 - Apr 2020'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML, {
      imagesByReference:true,
      defaultStyles: {
        h4: {
          fontSize: 28
        }
      }
    });
    const documentDefinition = {
      images:html.images,
      content: html.content,
      styles:{
        body2:{
          fontSize: 20,
          fontWeight: 400
        },
        overline:{
          fontSize: 12,
          fontWeight: 400
        }
      }, defaultStyle: {
        font: 'Poppins'
      }};


    pdfMake.createPdf(documentDefinition).download();
  }
}
