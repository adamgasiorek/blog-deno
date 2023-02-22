import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {ImagesService} from "@adamgasiorek/services";

@Component({
  selector: 'app-photo',
  template: `
    <div [class.isOpen]="openedModal" style="height: 100%;">
      <div #modalTemp class="modal" *ngIf="openedModal" (click)="openedModal = false;removeLink()" tabindex="0"
           (keydown.arrowLeft)="prevImageEvent()"
           (keydown.arrowRight)="nextImageEvent()">
        <span class="close" (click)="openedModal = false;removeLink()">&times;</span>
        <video  *ngIf="isVideo;else imgTemp" class="modal-content" controls (click)="$event.stopPropagation()">
          <source [src]="fullImage" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <ng-template #imgTemp>
          <div class="modal-wrapper">
            <span class="arrows arrows--web" style="margin-right: 16px;"  (click)="prevImageEvent()">&#8249;</span>
            <img class="modal-content" [src]="fullImage" (click)="$event.stopPropagation()">
            <span class="arrows arrows--web" style="margin-left: 16px;" (click)="nextImageEvent()">&#8250;</span>
          </div>
        </ng-template>

        <div class="arrows-mobile">
          <span class="arrows" style="margin-right: 16px;"  (click)="prevImageEvent()">&#8249;</span>
          <span class="arrows" style="margin-left: 16px;" (click)="nextImageEvent()">&#8250;</span>
        </div>
        <div class="modal-caption overline">{{(dataImage ? dataImage.description: '')}}</div>
      </div>

      <div (click)="openModal()" style="width: 100%;height: 100%;">
        <img [src]="thumb" style="width:100%;height: 100%;object-fit: cover;"/>
      </div>
    </div>
  `,
  styleUrls: ['photo.component.css']
})
export class PhotoComponent {
  @Output() nextImage = new EventEmitter();
  @Output() prevImage = new EventEmitter();
  @Input() isVideo: boolean = false;
  @Input() thumb: string = '';
  @Input() fullImage: string = '';
  @ViewChild('modalTemp') modalTemp: any;


  openedModal = false;

  dataImage: any;

  constructor(private imagesService: ImagesService, private router: Router, private location: Location) {
  }

  async openModal() {
    this.openedModal = true;
    this.dataImage = await this.imagesService.getImageDescription({id: encodeURIComponent(this.fullImage)});
    console.log(encodeURIComponent(this.fullImage));

    const newId = this.fullImage.split('appspot.com/o/')[1].split('.jpeg')[0].split('.mov')[0];
    this.location.replaceState(this.router.url.split('?')[0]+ "?id="+encodeURIComponent(newId));

    this.modalTemp.nativeElement.focus();

  }

  nextImageEvent() {
    this.openedModal = false;
    this.nextImage.emit();
  }

  prevImageEvent() {
    this.openedModal = false;
    this.prevImage.emit();
  }

  removeLink() {
    this.location.replaceState(this.router.url.split('?')[0]);

  }
}
