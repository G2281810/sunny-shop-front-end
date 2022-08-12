import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITokenResponse } from '../interfaces/jwt-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signIn(authForm: Object) {
    return this.httpClient.post<ITokenResponse>(
      `${environment.API_URL}auth/signin`,
      authForm
    );
  }
}
