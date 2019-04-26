import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

//shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'meals',
    canActivate: [AuthGuard],
    loadChildren: './meals/meals.module#MealsModule'
  },
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: './schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'workouts',
    canActivate: [AuthGuard],
    loadChildren: './workouts/workouts.module#WorkoutsModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
  exports: [],
  providers: []
})
export class HealthModule {}
