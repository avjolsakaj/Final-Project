import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  logoutUser() {
    this.logout.emit();
  }
}
