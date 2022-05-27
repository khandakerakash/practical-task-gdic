import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeService } from '../../services';
import { EmployeeResModel, GeneralResModel } from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<GeneralResModel<EmployeeResModel[]>> {

  constructor(
    private _employeeService: EmployeeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GeneralResModel<EmployeeResModel[]>> {
    return this._employeeService.getEmployeeList().pipe(
      catchError((error) => {
        return of();
      })
    );
  }
}
