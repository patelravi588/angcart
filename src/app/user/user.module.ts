import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserviewComponent } from './userview/userview.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';



@NgModule({
  declarations: [UserviewComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [UserviewComponent],
  entryComponents: [UserviewComponent],
  providers: [ ]
})
export class UserModule { }
