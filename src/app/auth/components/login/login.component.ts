import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxPermissionsService } from 'ngx-permissions';
import { ValidationService } from 'src/app/common/services/validation.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading: boolean = false;
  showPassword: boolean = false;
  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private authService: AuthService,
    private permissionsService: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    this.loading = true;
    this.authService.signIn(this.loginForm.value).subscribe(
      (data) => {
        const payload = this.jwtHelper.decodeToken(data.accessToken);
        localStorage.setItem('payload', JSON.stringify(payload));
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('menu', JSON.stringify(data.menu));
        this.permissionsService.loadPermissions(data.permissions);
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.handleErrors(error);
      }
    );
  }

  isInvalid(control: AbstractControl | null): boolean {
    return this.validationService.isInvalid(control);
  }

  invalidClass(control: AbstractControl | null): string {
    return this.validationService.invalidClass(control);
  }

  getErrorMessage(control: AbstractControl | null): string {
    return this.validationService.handleError(control);
  }

  handleErrors(error: HttpErrorResponse) {
    if (error.status == 401) {
      this.loginForm.get('password')?.setValue('');
      this.validationService.setControlError(
        this.loginForm.get('password'),
        'badcredentials',
        true
      );
    }
    if (error.status == 400 && Array.isArray(error.error.message)) {
      if (error.error.message.length > 0) {
        this.validationService.handleServerErrors(
          error.error.message,
          this.loginForm
        );
      }
    }
  }
}
