import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginReqModel } from 'src/app/core/models/request';
import { LoginResModel } from 'src/app/core/models/response';
import { AuthService } from 'src/app/core/services';

const tokenData =  'TOKEN_INFO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginReqModel = new LoginReqModel();
  loginResponse: LoginResModel = new LoginResModel();

  constructor(
    private _router: Router,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(myForm: NgForm) {
    if (!myForm.valid) {
      this._toastrService.warning('Please fill out the form correctly!', 'Warning', {
        progressBar: true,
        closeButton: true
      });
      return;
    }
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

}
