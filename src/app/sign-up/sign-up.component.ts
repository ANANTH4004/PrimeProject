import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{


  sighUpForm !: FormGroup;
  passwordVisible: boolean = false;

  constructor(private sighUpBuilder : FormBuilder){}
  ngOnInit(): void {
   this.sighUpForm = this.sighUpBuilder.group({
    email : ['',[Validators.required , Validators.email]],
    password : ['',[Validators.required,Validators.minLength(6)]],
    confirmPassword : ['',[Validators.required]]
   })
  }
  //from Getter
  get f() {return this.sighUpForm.controls;}

  //on Submit
  onSubmit(){
    if(this.sighUpForm.invalid){
      return;
    }
    console.log("From Submitted : " + this.f['email'].value)
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
