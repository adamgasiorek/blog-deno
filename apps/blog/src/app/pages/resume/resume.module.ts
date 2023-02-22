import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import {ResumeRoutingModule} from "./resume-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {UiModule} from "@adamgasiorek/ui";
import {CvComponent} from "./components/cv/cv.component";
import {DownloadPdfComponent} from "./components/download-pdf/download-pdf.component";
import {CvTableRowComponent} from "./components/cv/cv-table-row/cv-table-row.component";
import {IconsModule} from "@adamgasiorek/icons";



@NgModule({
  declarations: [
    ResumeComponent,
    CvComponent,
    CvTableRowComponent,
    DownloadPdfComponent
  ],
  imports: [
    ResumeRoutingModule,
    CommonModule,
    SharedModule,
    UiModule,
    IconsModule,
  ]
})
export class ResumeModule { }
