import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registerUser(event: FormGroup) {
    console.log(event.value);
  }
}
