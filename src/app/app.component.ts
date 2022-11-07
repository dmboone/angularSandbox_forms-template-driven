import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; // could also use viewchild to gain access to form
  // signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.form.setValue({ // would have to decide all input fields; not best approach
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({ // this would be a better approach because we can change specific inputs individually without having to overwrite every input field
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(signupForm: NgForm){
  //   console.log(signupForm);
  // }

  onSubmit(signupForm: NgForm){ // could also use viewchild to gain access to form
    console.log(signupForm);
  }
}
