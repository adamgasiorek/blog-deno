import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Firestore} from "@angular/fire/firestore";
import {firstValueFrom, switchMap} from "rxjs";
import {ImagesService} from "@adamgasiorek/services";

@Injectable()
export class AlbumsAllResolver implements Resolve<Array<string>> {

  constructor(private firestore: Firestore, private imagesService: ImagesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<string>  {
    return Promise.all(
      [
        firstValueFrom(this.imagesService.getAllAlbums('', 'europe').pipe(switchMap((item) => {
          return Promise.all(item.map((data: any) => {
            return this.imagesService.getAlbumDescription({id: data})
              .then((res: any) => {
                return {...res, link: data, continent: 'europe'};
              })
          }));
        }))),
        firstValueFrom(this.imagesService.getAllAlbums('', 'africa').pipe(switchMap((item) => {
          return Promise.all(item.map((data: any) => {
            return this.imagesService.getAlbumDescription({id: data})
              .then((res: any) => {
                return {...res, link: data, continent: 'africa'};
              })
          }));
        }))),
        firstValueFrom(this.imagesService.getAllAlbums('', 'asia').pipe(switchMap((item) => {
          return Promise.all(item.map((data: any) => {
            return this.imagesService.getAlbumDescription({id: data})
              .then((res: any) => {
                return {...res, link: data, continent: 'asia'};
              })
          }));
        }))),
        firstValueFrom(this.imagesService.getAllAlbums('', 'south-america').pipe(switchMap((item) => {
          return Promise.all(item.map((data: any) => {
            return this.imagesService.getAlbumDescription({id: data})
              .then((res: any) => {
                return {...res, link: data, continent: 'south-america'};
              })
          }));
        }))),
        firstValueFrom(this.imagesService.getAllAlbums('', 'north-america').pipe(switchMap((item) => {
          return Promise.all(item.map((data: any) => {
            return this.imagesService.getAlbumDescription({id: data})
              .then((res: any) => {
                return {...res, link: data, continent: 'north-america'};
              })
          }));
        })))
      ]
    ) as any;
  }
}
