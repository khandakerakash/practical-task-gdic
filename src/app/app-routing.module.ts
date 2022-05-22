import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './core/layout-components/view/public';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
