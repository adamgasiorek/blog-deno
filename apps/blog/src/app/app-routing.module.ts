import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivComponent} from "./priv.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landpage/landpage.module').then((s) => s.LandpageModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then((s) => s.MapModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then((s) => s.ResumeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((s) => s.AboutModule),
  },
  {
    path: 'photos',
    loadChildren: () => import('./pages/photography/photography.module').then((s) => s.PhotographyModule),
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then((s) => s.NotesModule),
  },
  {
    path: 'family',
    loadChildren: () => import('./pages/family/family.module').then((s) => s.FamilyModule),
  },
  {
    path: 'priv',
    component: PrivComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
