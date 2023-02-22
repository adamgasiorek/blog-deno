import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {ComponentsModule} from "./shared/components/components.module";
import {AlbumComponent} from "./album/album.component";
import {GalleryModule} from "@adamgasiorek/ui";
import {IconsModule} from "@adamgasiorek/icons";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    ComponentsModule,
    GalleryModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
