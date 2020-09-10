import { AlertifyService } from './../../service/alertify.service';
import { IUser } from './../../model/iuser';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  userSubmitted = false;
  user: IUser;
  //// USE OF FORM BUILDER
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {
    // this.registerationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(8),
    //     ]),
    //     confirmPassword: new FormControl(null, [Validators.required]),
    //     mobile: new FormControl(null, [
    //       Validators.required,
    //       Validators.maxLength(10),
    //     ]),
    //   },
    //   this.passwordMatchingValidator
    // );

    // USE OF FORM BUILDER
    this.createRegistrationForm();
  }

  // USE OF FORM BUILDER
  createRegistrationForm() {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : {
          notmatched: true,
        };
  }

  // Form getter methods
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success(
        'congrats! you are successfully registered.'
      );
    } else {
      console.log('form is not valid');
      this.alertifyService.error('Please provide valid fields');
    }
  }

  userData(): IUser {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  onReset() {
    console.log('reset user registration');
    this.registerationForm.reset();
  }
}
