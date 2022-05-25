import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeCreateReqModel } from 'src/app/core/models/request';
import { EmployeeResModel, GeneralResModel } from 'src/app/core/models/response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  selectedName!: number;

  infoLable: string = 'List Of';
  listBtn: boolean = false;
  createBtn: boolean = true;
  listElement: boolean = true;
  showHideCreateElement: boolean = false;
  employeeData: EmployeeResModel[] = [];
  createRequest: EmployeeCreateReqModel = new EmployeeCreateReqModel();

  constructor(
    private _toastrService: ToastrService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this._activatedRoute.data.subscribe((res: any) => {
      this.employeeData = res.employeeData.data;
      if (this.employeeData.length == 0) {
        this._toastrService.warning('No data found! Please try again.', 'Warning', {
          progressBar: true,
          closeButton: true
        });
      }
    });
  }

  elementShowHide(x: string) {
    if (x == 'create') {
      this.infoLable = 'Create';
      this.createBtn = false;
      this.listBtn = true;
      this.listElement = false;
      this.showHideCreateElement = true;
      this.createRequest = new EmployeeCreateReqModel();
    }

    if (x == 'list') {
      this.infoLable = 'List Of';
      this.listBtn = false;
      this.createBtn = true;
      this.listElement = true;
      this.showHideCreateElement = false;
    }
  }

  private elementVisibility() {
    this.infoLable = 'List Of';
    this.listBtn = false;
    this.createBtn = true;
    this.listElement = true;
    this.showHideCreateElement = false;
  }

  highlightedRow(x: number) {
    this.selectedName = x;
  }
}
