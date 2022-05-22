import { Injectable } from '@angular/core';
import { LoginResModel } from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // public get currentUserLoggedIn(): boolean {
  //   let tokenData: LoginResModel = JSON.parse(localStorage.getItem('tokenInfo'));

  //   if (tokenData == null) {
  //     return false;
  //   }
  //   return true;
  // }
}
