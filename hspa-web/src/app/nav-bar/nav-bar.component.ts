import { AlertifyService } from './../service/alertify.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;
  constructor(
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}

  loggedIn() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user-login']);
    this.alertifyService.success('You are logged out!');
  }
}
