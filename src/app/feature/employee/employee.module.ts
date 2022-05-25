import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
