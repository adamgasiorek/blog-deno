import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  Input,
  OnInit,
  Pipe,
  PipeTransform, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoComponent} from "./photo/photo.component";
import {ImageModel} from "./models/image";


@Component({
  selector: 'app-gallery',
  styleUrls: ['./gallery.component.css'],
  template: `
    <section class="masonry">
      <app-photo
        *ngFor="let image of list; let i = index"
        [ngClass]="{'short': image.wide || image.isVideo, 'tall': !image.wide && !image.isVideo }"
        (nextImage)="openImage(i+1)"
        (prevImage)="openImage(i-1)"
        [isVideo]="image.isVideo"
        [thumb]="image.thumb"
        [fullImage]="image.fullImage">
      </app-photo>
    </section>
  `
})
export class GalleryComponent implements AfterViewInit {
  @ViewChildren(PhotoComponent) photos: QueryList<PhotoComponent> | any;

  @Input() list: Array<ImageModel> = [];
  @Input() set nbColumns(v: number) {
    this.nbCols = v;
    this.cols = new Array(v).fill(1);
  };
  nbCols = 0;
  cols: Array<number> = [];

  openImage(index: number) {
    if(index >= 0 && index < this.photos.toArray().length) {
      this.photos.toArray()[index].openModal();
    }
  }


  rootUrlForNestedAlbums = '';
  isRootUrlForNestedAlbums = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private cdRef:ChangeDetectorRef) {
    this.rootUrlForNestedAlbums = router.url.split('/').slice(4).join('-');
    this.isRootUrlForNestedAlbums = this.rootUrlForNestedAlbums.includes('-');
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];

      const finded = this.photos.find((item: any) => {
        return item.fullImage.split('appspot.com/o/')[1].split('.jpeg')[0].split('.mov')[0] === id;
      })

      if(finded) {
        finded.openModal();
      }
      this.cdRef.detectChanges();
    });
  }

}
