import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {NoteComponent} from "./pages/note.component";
import {collection, collectionData, doc, Firestore, getDoc, getDocs, query, where} from "@angular/fire/firestore";
import {NotesComponent} from "./pages/notes.component";
import {firstValueFrom} from "rxjs";
import {NoteEditorComponent} from "./pages/note-editor.component";
import {PrivateNotesComponent} from "./pages/notes-private.component";
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

@Injectable({
  providedIn: 'root'
})
class DatabaseAllResolver implements Resolve<any> {

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
class DatabasePrivateResolver implements Resolve<any> {

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
class DatabaseResolver implements Resolve<any> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<any>  {
    const data = getDoc(doc(this.firestore, 'notes/' + route.params['id']));
    return data.then(item => {
      return item.data();
    }) as any;
  }
}

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotesComponent,
    resolve: {
      data: DatabaseAllResolver
    }
  },
  {
    path: 'private',
    pathMatch: 'full',
    component: PrivateNotesComponent,
    resolve: {
      data: DatabasePrivateResolver
    },
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'private/editor',
    component: NoteEditorComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'family',
    loadChildren: () => import('./custom-pages/family/family.module').then((s) => s.FamilyModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: ':id',
    component: NoteComponent,
    resolve: {
      data: DatabaseResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
