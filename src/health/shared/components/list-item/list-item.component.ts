import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { Meal } from '../../services/meals/meals.service';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Output() remove = new EventEmitter<Meal>();
  toggled = false;
  @Input() item: Meal;

  constructor() {}

  ngOnInit(): void {}

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}
