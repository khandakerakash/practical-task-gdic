import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, using } from 'rxjs';
import { EmployeeCreateReqModel } from 'src/app/core/models/request';
import { EmployeeResModel, GeneralResModel } from 'src/app/core/models/response';
import { EmployeeFormState } from 'src/app/core/store/models/employee-form-state';

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

  form!: FormGroup;
  user!: Observable<EmployeeFormState>;

  constructor(
    // private store: Store<EmployeeFormState>,
    private formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
    // const form$ = this.store.select(x => x.form);

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
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
