import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules
import { AngularFireDatabaseModule } from '@angular/fire/database';

//Service
import { MealsService } from './services/meals/meals.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  exports: [],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService]
    };
  }
}
