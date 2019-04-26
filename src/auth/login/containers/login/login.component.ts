import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginUser(event: FormGroup) {
    console.log(event.value);
  }
}
