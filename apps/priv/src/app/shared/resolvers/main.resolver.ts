import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {collection, collectionData, Firestore, orderBy, query} from "@angular/fire/firestore";
import {firstValueFrom} from "rxjs";
import {AlbumModel} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class DatabaseMainResolver implements Resolve<Array<any>> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<AlbumModel>  {
    return firstValueFrom(collectionData(query(
      collection(this.firestore, 'albums'), orderBy('date')), { idField: 'id' }))
      .then(item => {
        return item;
      }) as any;
  }
}
