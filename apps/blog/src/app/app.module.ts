import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivComponent } from './priv.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, PrivComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'serverApp',
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
