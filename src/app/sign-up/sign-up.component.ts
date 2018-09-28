import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(sgForm: NgForm) {
    console.log(sgForm.form);
    console.log(`Saved ${JSON.stringify(sgForm.value)}`);
  }

}
