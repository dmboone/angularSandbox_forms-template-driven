import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('f') signupForm: NgForm; // could also use viewchild to gain access to form
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  // onSubmit(signupForm){ // could also use viewchild to gain access to form
  //   console.log()
  // }
}
