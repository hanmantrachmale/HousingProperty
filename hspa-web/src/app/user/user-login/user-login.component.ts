import { Router } from '@angular/router';
import { AlertifyService } from './../../service/alertify.service';
import { AuthService } from './../../service/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  @ViewChild('LoginForm') loginForm: NgForm;
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const token = this.authService.authUser(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login successfull');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('Login Failed');
    }
  }
}
