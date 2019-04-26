import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEzsHxIteaQKWnmC1ESAcABqOsn3L06Zg",
    authDomain: "fitness-app-angular.firebaseapp.com",
    databaseURL: "https://fitness-app-angular.firebaseio.com",
    projectId: "fitness-app-angular",
    storageBucket: "fitness-app-angular.appspot.com",
    messagingSenderId: "215065284835"
  };
*/
