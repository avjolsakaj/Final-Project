import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: number;
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
}
