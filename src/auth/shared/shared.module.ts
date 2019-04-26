import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Component
import { AuthFormComponent } from './containers/auth-form/auth-form.component';

//Services
import { AuthService } from './services/auth/auth.service';

//Guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  providers: []
})
export class SharedModule {
  //is created like this to be initialized only once at auth.module as SharedModule.forRoot()
  //every other model that is using this sharedModule is going to import only the SharedModule
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, AuthGuard]
    };
  }
}
