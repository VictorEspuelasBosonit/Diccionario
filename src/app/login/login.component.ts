import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/login';
import { AuthService } from '../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //TODO Implementar un register would be great!
  model: ILogin[] = [{ userid: "victor", password: "123" },{ userid: "user", password: "user" }] 

  loginForm: any;
  message: string = '';
  returnUrl: string = '';

  //Constructor servicios, routing y form
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '';
    this.authService.logout();
  }

  get f() {  
    return this.loginForm.controls;
  }

  login() { 
    if (this.loginForm.invalid) {

      return;
    }
    else {
      if (this.f.userid.value == this.model[0].userid && this.f.password.value == this.model[0].password) {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }
}
