import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponentsModule } from './layout-components/layout-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutComponentsModule
  ]
})
export class CoreModule { }
