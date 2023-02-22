import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Firestore} from "@angular/fire/firestore";
import {firstValueFrom} from "rxjs";
import {ImagesService} from "@adamgasiorek/services";

const getMeta = (url: any) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  });

@Injectable()
export class PhotosByTagResolver implements Resolve<Array<string>> {

  constructor(private firestore: Firestore, private imagesService: ImagesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<string>  {
    return firstValueFrom(this.imagesService.getImagesByTag(route.params['tag']))
      .then(item => {
        return Promise.all(item.map((data: any) =>
          getMeta(data.thumb).then((res: any) => ({...data, fullImage: decodeURIComponent(data.id), wide: (res.naturalHeight / res.naturalWidth) < 1}))
        )).then((d) => {
          return {
            list: d,
            tag: route.params['tag']
          }
        })
      }) as any;
  }
}
