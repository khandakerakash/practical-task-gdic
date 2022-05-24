import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { PublicComponent } from '../core/layout-components/view/public';
import { SecureComponent } from '../core/layout-components/view/secure';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: PublicComponent,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    data: { title: 'Auth' }
  },
  {
    path: 'dashboard',
    component: SecureComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { title: 'Dashboard' },
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: SecureComponent,
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    data: { title: 'Employee' },
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
