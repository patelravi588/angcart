import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserviewComponent } from './userview/userview.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { ComponentModule } from '../component/component.module';
import { ItrformComponent } from './itrform/itrform.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [UserviewComponent, ItrformComponent, RegisterComponent],
  imports: [
    ComponentModule,
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserviewComponent, ItrformComponent, RegisterComponent],
  entryComponents: [UserviewComponent],
  providers: [ ]
})
export class UserModule { }
