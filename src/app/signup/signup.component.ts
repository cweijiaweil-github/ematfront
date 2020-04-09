import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fber: FormBuilder, public router: Router) { }

  person = {
    name: "hi",
    color: "red"
  };
  abc = "dssdwewe";

  ngOnInit(): void {

    $(function () {
      $("#a-seller").click(function(){
        $(".w-content").css("height","1030px");
        $(".w-box").css("height","930px");
      });
      $("#a-buyer").click(function(){
        $(".w-content").css("height","660px");
        $(".w-box").css("height","560px");
      });
    });

    this.signupForm = this.fber.group(
      {
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
        rePassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]]
      });
  }
  get username(): AbstractControl {
    return this.signupForm.get('username');
  }
  get email(): AbstractControl {
    return this.signupForm.get('email');
  }
  get mobile(): AbstractControl {
    return this.signupForm.get('mobile');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }
  get rePassword(): AbstractControl {
    return this.signupForm.get('rePassword');
  }

}
