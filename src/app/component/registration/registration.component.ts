import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) { }
  

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe( data => {
                this.router.navigate(['/login'], { queryParams: { registered: true }});
            },
            error => {
                this.error = error;
                this.loading = false;
            });
    }

  
}
