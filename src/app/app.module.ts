// ...omitted
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthService } from '../service/auth.service';

const config = {
  apiKey: 'AIzaSyD7TiSKdc1xbXr-jWD3GuYki1Pdya4H_8U',
  authDomain: 'app-login-4b92d.firebaseapp.com',
  databaseURL: 'https://app-login-4b92d.firebaseio.com',
  storageBucket: 'app-login-4b92d.appspot.com',
  messagingSenderId: '593233917296',
  projectId: 'app-login-4b92d'
};


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
