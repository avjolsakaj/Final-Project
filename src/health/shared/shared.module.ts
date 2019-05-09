import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules
import { AngularFireDatabaseModule } from '@angular/fire/database';

//Services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';
import { ScheduleService } from './services/schedule/schedule.service';

//Components
import { ListItemComponent } from './components/list-item/list-item.component';

// Pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
  declarations: [ListItemComponent, JoinPipe, WorkoutPipe],
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  exports: [ListItemComponent, JoinPipe, WorkoutPipe],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService, WorkoutsService, ScheduleService]
    };
  }
}
