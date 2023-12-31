import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm !: FormGroup;
  submitted : boolean=false;
  
  get f(){return this.loginForm.controls;};
  passwordVisible: boolean = false;
  constructor(private formBuilder : FormBuilder){
  }
  ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
    'email' : ['' , [Validators.required , Validators.email]],
    'password' : ['',[Validators.required,Validators.minLength(6)]]
   })
  }
  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      console.log("Invalid Form")
      return;
    }
    alert(JSON.stringify(this.loginForm.value));
}
togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}



}
