import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {NoteComponent} from "./pages/note.component";
import {collection, collectionData, doc, Firestore, getDoc, getDocs, query} from "@angular/fire/firestore";
import {NotesComponent} from "./pages/notes.component";
import {firstValueFrom} from "rxjs";
import {NoteEditorComponent} from "./pages/note-editor.component";

@Injectable({
  providedIn: 'root'
})
class DatabaseAllResolver implements Resolve<any> {

  constructor(private firestore: Firestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<any>  {
    const data = firstValueFrom(collectionData(query(
      collection(this.firestore, 'notes')), { idField: 'id' }));
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
    path: 'editor',
    component: NoteEditorComponent
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
