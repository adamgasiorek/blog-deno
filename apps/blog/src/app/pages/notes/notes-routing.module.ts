import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {NoteComponent} from "./pages/note.component";
import {collection, collectionData, doc, Firestore, getDoc, getDocs, query, where} from "@angular/fire/firestore";
import {NotesComponent} from "./pages/notes.component";
import {firstValueFrom} from "rxjs";
import {NoteEditorComponent} from "./pages/note-editor.component";
import {PrivateNotesComponent} from "./pages/notes-private.component";
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {getDownloadURL, listAll, ref, Storage} from "@angular/fire/storage";
import {DatabaseAllResolver, DatabasePrivateResolver, DatabaseResolver, FilesResolver} from "./resolvers";

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
    path: 'renovating',
    loadChildren: () => import('./custom-pages/renovating/renovating.module').then((s) => s.RenovatingModule),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: ':id',
    component: NoteComponent,
    resolve: {
      data: DatabaseResolver,
      files: FilesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
