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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

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

  onSubmit(){ // could also use viewchild to gain access to form
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset(); // empties input and also resets the state of all the inputs
    // if you want you could also pass an object like in setValue() to reset() in order to reset the
    // form to specific values
  }
}
