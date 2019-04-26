import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//shared module
import { SharedModule } from './shared/shared.module';

// Initialize Firebase
import { environment } from 'src/environments/environment';

//Routes
export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(environment.firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}
