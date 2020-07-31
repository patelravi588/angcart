import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './adminview/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from '../component/footer/footer.component';
import { HeaderComponent } from '../component/header/header.component';



@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [AdminComponent],
  entryComponents: [AdminComponent],
  providers: [ ]
})
export class AdminModule { }
