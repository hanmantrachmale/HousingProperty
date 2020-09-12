import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  authUser(user: any) {
    console.log(user);
    let userArray = [];
    if (localStorage.getItem('users')) {
      userArray = JSON.parse(localStorage.getItem('users'));
    }
    return userArray.find(
      (f) => f.userName === user.UserName && f.password === user.Password
    );
  }
}
