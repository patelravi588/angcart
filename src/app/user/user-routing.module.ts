import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserviewComponent } from './userview/userview.component';
import { ItrformComponent } from './itrform/itrform.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "",
    children: [
      { path: "userView", component: UserviewComponent },
      { path: "itrform", component: ItrformComponent },
      { path: "register", component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
