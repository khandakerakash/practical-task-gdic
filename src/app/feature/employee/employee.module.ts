import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';


@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
