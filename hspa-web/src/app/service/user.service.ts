import { IUser } from './../model/iuser';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  addUser(user: IUser) {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      users = [user, ...users];
    } else {
      users = [users];
    }
    localStorage.setItem('users', JSON.stringify(users));
  }
}
