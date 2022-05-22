import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './view/public/public.component';
import { SecureComponent } from './view/secure/secure.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

const components = [
  PublicComponent,
  SecureComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: components,
  exports: components
})
export class LayoutComponentsModule { }
