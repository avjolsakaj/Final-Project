import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from 'store';
import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async onLogOut() {
    try {
      await this.authService.logoutUser();
      this.router.navigate(['/auth/login']);
    } catch (err) {
      console.log(err);
    }
  }
}
