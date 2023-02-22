import { Component, OnInit } from '@angular/core';
import {getDownloadURL, listAll, ref, Storage} from "@angular/fire/storage";
import {from, Observable, switchMap, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  images: any;

  constructor(private storage: Storage,
              private activatedRoute: ActivatedRoute) {
    this.images = (this.activatedRoute.data as any).getValue()['data'];
  }
  // constructor(private storage: Storage, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getImage(this.route.snapshot.params['id']).then((data: any) => {
    //   console.log(data);
    //   this.images = data;
    // })
  }

  // getImage(id: string): any {
  //   return listAll(ref(this.storage, 'albums/'+id)).then((data) => {
  //     return Promise.all(data.items.map((item) => getDownloadURL(item)));
  //   })
  // }

}
