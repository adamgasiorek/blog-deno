import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {redirectUnauthorizedTo, redirectLoggedInTo, AuthGuard} from "@angular/fire/auth-guard";
import {ImagesMainResolver} from "./shared/resolvers/album.resolver";
import {AlbumComponent} from "./album/album.component";
import {ImagesServiceModule} from "@adamgasiorek/services";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'albums/:id',
    component: AlbumComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ImagesMainResolver
    },
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [ImagesServiceModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
