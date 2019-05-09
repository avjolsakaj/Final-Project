import { Injectable } from '@angular/core';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, tap, filter } from 'rxjs/operators';

export interface Workout {
  name: string;
  type: string;
  strength: any;
  endurance: any;
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class WorkoutsService {
  workouts$: Observable<Workout[]> = this.db
    .list(`workouts/${this.uid}`)
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(action => {
          const data = action.payload.val() as Workout;
          const $key = action.payload.key;
          const result = { $key, ...data };
          return result;
        })
      ),
      tap(next => this.store.set('workouts', next))
    );

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  getWorkout(key: string) {
    if (!key) return of({});
    return this.store.select<Workout[]>('workouts').pipe(
      filter(Boolean),
      map(workouts => workouts.find((workout: Workout) => workout.$key === key))
    );
  }

  addWorkout(workout: Workout) {
    return this.db.list(`workouts/${this.uid}`).push(workout);
  }

  updateWorkout(key: string, workout: Workout) {
    return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }
}
