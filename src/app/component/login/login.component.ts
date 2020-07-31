import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginModel: LoginModel = new LoginModel();
loginError: boolean = true;
loginIssue: string= "";
  constructor(private router : Router) { }
  users = [
    { 
      fname:"Ravi",
      lname:"Patel",
      email:"patelravi588@gmail.com",
      pass:"emp@123",
      role:"Emp"
    },
    { 
      fname:"Anuj",
      lname:"Verma",
      email:"anujverma@gmail.com",
      pass:"admin@123",
      role:"Admin"
    }
  ];

  ngOnInit() {
  }
  login(){ 
    if(this.loginModel.User==undefined || this.loginModel.Password == undefined){
      alert("Please fill the correct login detail then click Submit");
      return false;
    }
    else{
      let loggedUserInfo = this.users.filter((user)=>{
        return user.email == this.loginModel.User && user.pass == this.loginModel.Password;
      });
      if(loggedUserInfo){
        sessionStorage.clear();
        sessionStorage.setItem("userMail", loggedUserInfo[0].email);
        sessionStorage.setItem("userPassword", loggedUserInfo[0].role);
        sessionStorage.setItem("userName", loggedUserInfo[0].fname);
        if(loggedUserInfo[0].role == "Admin"){
          this.router.navigate(["/admin", "adminView"]);
        } else {
          this.router.navigate(["/user", "userView"]);
        }
      } else {
        alert("Please fill the correct login detail then click Submit");
        return false;
      }
    }
  }
}
