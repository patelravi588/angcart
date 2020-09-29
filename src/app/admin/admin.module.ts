import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './adminview/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    ComponentModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [AdminComponent],
  entryComponents: [AdminComponent],
  providers: [ ]
})
export class AdminModule { }
