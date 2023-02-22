import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Firestore} from "@angular/fire/firestore";
import {firstValueFrom} from "rxjs";
import {ImagesService} from "@adamgasiorek/services";

@Injectable({
  providedIn: 'root'
})
export class ImagesMainResolver implements Resolve<Array<string>> {

  constructor(private firestore: Firestore, private imagesService: ImagesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<string>  {
    return firstValueFrom(this.imagesService.getImage({album: route.params['id']}, '', 'albums' ))
      .then(item => {
        return item;
      }) as any;
  }
}
