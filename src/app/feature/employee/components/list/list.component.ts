import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeResModel, GeneralResModel } from 'src/app/core/models/response';
import { EmployeeService } from 'src/app/core/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeeData: EmployeeResModel[] = [];

  constructor(
    private _toastrService: ToastrService,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this._employeeService.getEmployeeList().subscribe(
      (res: GeneralResModel<EmployeeResModel[]>) => {
        this.employeeData = res.data;
        if (this.employeeData.length == 0) {
          this._toastrService.warning('No data found! Please try again.', 'Warning', {
            progressBar: true,
            closeButton: true
          });
        }
    });
  }

}
