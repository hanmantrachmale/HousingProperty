import { IUser } from './../model/iuser';
import { AlertifyService } from './../service/alertify.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUserName: string;
  showNavbar = false;
  loginbar = 'nav-login-desktop';
  constructor(
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}

  loggedIn() {
    this.loggedinUserName = localStorage.getItem('token');
    return this.loggedinUserName;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user-login']);
    this.alertifyService.success('You are logged out!');
  }
  onToggleNavbar() {
    this.showNavbar = !this.showNavbar;
    if (this.showNavbar) {
      this.loginbar = 'nav-login-mobile';
    } else {
      this.loginbar = 'nav-login-desktop';
    }
  }
}
