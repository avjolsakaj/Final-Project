import { Component, OnInit, OnDestroy } from '@angular/core';

//service
import {
  MealsService,
  Meal
} from '../../../shared/services/meals/meals.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(private mealsService: MealsService, private store: Store) {}

  ngOnInit(): void {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal) {
    this.mealsService.removeMeal(event.$key);
  }
}
