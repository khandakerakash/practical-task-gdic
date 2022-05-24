import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeResModel, GeneralResModel } from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = `${environment.rootURL}`;

  constructor(
    private _httpClient: HttpClient
  ) { }

  getEmployeeList() {
    return this._httpClient.get<GeneralResModel<EmployeeResModel[]>>(this.baseURL + `employees`);
  }
}
