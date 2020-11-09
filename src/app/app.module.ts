import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhXa2_7y0D2tGSnEZfsFT3Fd3cmZ7oU5w',
  authDomain: 'book-my-apartment.firebaseapp.com',
  databaseURL: 'https://book-my-apartment.firebaseio.com',
  projectId: 'book-my-apartment',
  storageBucket: 'book-my-apartment.appspot.com',
  messagingSenderId: '83795353286',
  appId: '1:83795353286:web:023a63c5a7deceb7dc41c7',
  measurementId: 'G-XKJ3KRP3CV'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
