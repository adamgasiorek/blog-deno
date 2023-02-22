import { Injectable } from '@angular/core';
import {from, Observable, switchMap} from "rxjs";
import {ListResult} from "@firebase/storage";
import {getDownloadURL, getMetadata, listAll, ref, Storage} from "@angular/fire/storage";
import {collection, collectionData, doc, Firestore, getDoc, query, where} from "@angular/fire/firestore";
import {ImageModel} from "./image";

const getMeta = (url: any) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  });

@Injectable()
export class ImagesService {

  constructor(private storage: Storage, private firestore: Firestore) { }

  getAllAlbums(nested = '', folder = 'europe') {
    return from(listAll(ref(this.storage, folder + '/'+nested))).pipe(switchMap( (res) => {
      return Promise.all(res.prefixes.map((item) => item.name));
    }));
  }



  getImage(data: {album: string}, nestedPath = '', folder = ''): Observable<Array<ImageModel>> {
    return from(listAll(ref(this.storage, folder + '/'+nestedPath+data.album))).pipe(switchMap( (res) => {
      return Promise.all(res.items.filter((item) => item.name.startsWith('thumb-')).map((item) => {
        const fullName = ('' + item.name.split('thumb-')[1]).split('.jpeg')[0];
        const isVideo = (res.items.find(item => item.name.includes(fullName)) as any).name.endsWith('.mov') ||
          (res.items.find(item => item.name.includes(fullName)) as any).name.endsWith('.mp4') ;
        return Promise.all([
          getDownloadURL(res.items.find(item => item.name.includes(fullName)) as any),
          getDownloadURL(item),
        ])
          .then(data => getMeta(data[1]).then((res: any) => ({...data, wide: (res.naturalHeight / res.naturalWidth) < 1})))
          .then((values) => {
            return {
            isVideo: isVideo,
            fullImage: values[0],
            thumb: values[1],
            wide: values.wide
          }
        })
      }));
    }));
  }

  getImagesByTag(tag: string): Observable<any> {
    return collectionData(query(
      collection(this.firestore, 'images'),
      where(tag, '==', true)), { idField: 'id' })
  }

  getImageDescription(data: {id: string}): any {
    return getDoc(doc(this.firestore, 'images/' + data.id))
      .then(data => {
        return data.data();
      });
  }

  getAlbumDescription(data: {id: string}, nestedPath = ''): any {
    const nested = nestedPath ? nestedPath + '/albums/' + data.id : data.id;
    return getDoc(doc(this.firestore, 'albums/' + nested))
      .then(data => {
        return data.data();
      });
  }

}

