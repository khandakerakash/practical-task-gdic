import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginReqModel } from 'src/app/core/models/request';
import { LoginResModel } from 'src/app/core/models/response';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

const tokenData =  'TOKEN_INFO';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  loginRequest: LoginReqModel = new LoginReqModel();
  loginResponse: LoginResModel = new LoginResModel();

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginFormValidation();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onLoginSubmit(): void {
    this.submitted = true;
    if (!this.form.invalid) {
      this._toastrService.warning('Please fill out the form correctly!', 'Warning', {
        progressBar: true,
        closeButton: true
      });
      return;
    }

    this.loginRequest = this.form.value;

    if(this.loginResponse.username == this.loginRequest.username && this.loginResponse.password == this.loginRequest.password) {
      const resToken = this.loginRequest.username + this.loginRequest.password;
      localStorage.setItem(tokenData, resToken);
      this._router.navigate(['dashboard']);
    } else {
      this._toastrService.error('Something went wrong. Please try again later.', 'Error', {
        progressBar: true,
        closeButton: true
      });
    }
  }

  private loginFormValidation() {
    this.form = this._formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }

}
