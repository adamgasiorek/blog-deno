import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Firestore} from "@angular/fire/firestore";
import {firstValueFrom, switchMap} from "rxjs";
import {ImagesService} from "@adamgasiorek/services";

@Injectable()
export class PhotosDetailsResolver implements Resolve<Array<string>> {

  constructor(private firestore: Firestore, private imagesService: ImagesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<string>  {
    return Promise.all([
      firstValueFrom(this.imagesService.getAllAlbums(route.params['name'], route.params['continent']).pipe(switchMap((item) => {
        return Promise.all(item.map((data: any) => {
          return this.imagesService.getAlbumDescription({id: data}, route.params['name'])
            .then((res: any) => {
              return {...res, link: data, continent: route.params['continent']};
            })
        }));
      }))),
      firstValueFrom(this.imagesService.getImage({album: route.params['name']}, '', route.params['continent'])),
      this.imagesService.getAlbumDescription({id: route.params['name']})
    ])
      .then(item => {
        return {
          nestedAlbums: item[0],
          list: item[1],
          album: item[2]
        };
      }) as any;
  }
}
