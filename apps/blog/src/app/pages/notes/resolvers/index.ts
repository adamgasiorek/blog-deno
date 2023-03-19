import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {collection, collectionData, doc, Firestore, getDoc, query, where} from "@angular/fire/firestore";
import {firstValueFrom} from "rxjs";
import {getDownloadURL, listAll, ref, Storage} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class DatabaseAllResolver implements Resolve<any> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<any>  {
    const data = firstValueFrom(collectionData(query(
      collection(this.firestore, 'notes'),  where("private", "!=", true)), { idField: 'id' }));
    return data.then(item => {
      return item.map(v => v);
    }) as any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatabasePrivateResolver implements Resolve<any> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<any>  {
    const data = firstValueFrom(collectionData(query(
      collection(this.firestore, 'notes'),  where("private", "==", true)), { idField: 'id' }));
    return data.then(item => {
      return item.map(v => v);
    }) as any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseResolver implements Resolve<any> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<any>  {
    const data = getDoc(doc(this.firestore, 'notes/' + route.params['id']));
    return data.then(item => {
      return item.data();
    }) as any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FilesResolver implements Resolve<any> {

  constructor(private storage: Storage, private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    return listAll(ref(this.storage, 'notes/'+route.params['id']+'/files')).then((data) => {
      return Promise.all(data.items.map((item) => getDownloadURL(item).then((res) => ({
        name: item.name,
        url:res
      }))));
    });
  }
}
