import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Firestore} from "@angular/fire/firestore";
import {firstValueFrom} from "rxjs";
import {ImagesService} from "@adamgasiorek/services";

@Injectable()
export class ReelsViewResolver implements Resolve<Array<string>> {

  constructor(private firestore: Firestore, private imagesService: ImagesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<string>  {
    return firstValueFrom(this.imagesService.getImage({album: 'reels'}))
      .then(item => {
        return item;
      }) as any;
  }
}
