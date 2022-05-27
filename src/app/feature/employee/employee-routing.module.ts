import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { EmployeeResolver } from 'src/app/core/resolver-services/employee';

const routes: Routes = [
  { path: '', component: ListComponent, resolve: { employeeData: EmployeeResolver}, data: {title: 'List'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
