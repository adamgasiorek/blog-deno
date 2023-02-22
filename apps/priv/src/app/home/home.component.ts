import { Component, OnInit } from '@angular/core';
import {Auth} from "@angular/fire/auth";
import {signOut} from "@angular/fire/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {collection, collectionData, Firestore, orderBy, query, where} from "@angular/fire/firestore";
import {AlbumModel} from "../shared/models/album.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  albums: Observable<any> = of([]);

  tag = 0;

  constructor(private auth: Auth,
              private firestore: Firestore,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.setTag1();
  }


  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['']);
    })
  }

  setTag1() {
    this.tag = 1;
    this.albums = collectionData(query(
      collection(this.firestore, 'albums'),  orderBy('date'),  where("tags", "array-contains", "important")), { idField: 'id' });
  }

  setTag0() {
    this.tag = 0;
    this.albums = collectionData(query(
      collection(this.firestore, 'albums'), orderBy('date')), { idField: 'id' });
  }
}
