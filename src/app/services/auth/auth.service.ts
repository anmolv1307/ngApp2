import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  url = "https://my-ecommerce-apis.herokuapp.com/api/user/login";

  constructor(private router: Router, private http: HttpClient) {}

  // setToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    this.router.navigate(['home']);
    sessionStorage.removeItem('token');
    window.location.reload();
  }

  saveLoginData(data : any) {
    return this.http.post<any>(this.url, data)
  }
}
