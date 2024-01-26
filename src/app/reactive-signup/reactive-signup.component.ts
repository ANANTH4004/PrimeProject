import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.scss']
})
export class ReactiveSignupComponent {
  signupForm: FormGroup;
  passwordRequirements: string = '';
  visible: boolean = false;
  signclicked:boolean=false;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.pattern('^[0-9]*$')],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  resetform() {
    this.signupForm.reset();
  }

  signup() {
    const date = Date.now();
    const id = new Date(date);

    // if (this.signupForm.valid) {
    //   this.loginservice
    //     .postsignup(
    //       id,
    //       this.signupForm.value.firstname,
    //       this.signupForm.value.lastname,
    //       this.signupForm.value.email,
    //       this.signupForm.value.phoneNumber,
    //       this.signupForm.value.password,
    //       this.signupForm.value.confirmPassword
    //     )
    //     .subscribe((data) => {
    //       if (data.status == 404) {
    //         this.messageService.add({
    //           severity: 'error',
    //           summary: 'Check password and confirm-password',
    //           detail: '',
    //         });
    //       } else {
    //         this.messageService.add({
    //           severity: 'success',
    //           summary: 'Success',
    //           detail: 'Message Content',
    //         });
    //         this.resetform();
    //         this.router.navigate(['login']);
    //       }
    //     });
    // } else {
    //   // Handle form validation errors
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Form validation failed',
    //     detail: 'Please check the form for errors.',
    //   });
    // }
  }

  showDialog() {
    this.visible = true;
  }
}
