import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  meals$: Observable<Meal[]> = this.db
    .list(`meals/${this.uid}`)
    .valueChanges()
    .pipe(tap((next: Meal[]) => this.store.set('meals', next)));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  public addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  public updateMeal(key: string, meal: Meal) {
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }

  public removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }

  public getMeal(key: string) {
    console.log('getMeal', key);
    if (!key) {
      return of({});
    }

    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean),
      map(meals => meals.find((meal: Meal) => meal.$key === key))
    );
  }
}
