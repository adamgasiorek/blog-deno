import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {MapComponent} from "./map.component";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {CountryModel} from "./components/maps/models/country";

@Injectable({
  providedIn: 'root'
})
class DatabaseResolver implements Resolve<Array<CountryModel>> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<CountryModel>  {
    const data = getDoc(doc(this.firestore, 'countries/f76fjb1v23eFXFy9MMDg'));
    return data.then(item => {
      return (item.data() as any)['countries'];
    }) as any;
  }
}

@Injectable({
  providedIn: 'root'
})
class DatabaseAsiaResolver implements Resolve<Array<CountryModel>> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<CountryModel>  {
    const data = getDoc(doc(this.firestore, 'countries/asia'));
    return data.then(item => {
      return (item.data() as any)['countries'];
    }) as any;
  }
}

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    resolve: {
      data: DatabaseResolver
    }
  },
  {
    path: 'asia',
    component: MapComponent,
    resolve: {
      data: DatabaseAsiaResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
