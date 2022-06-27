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

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  logins({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  saveLoginData(data : any) {
    // alert('LoggedIn!');
    return this.http.post<any>(this.url, data)
  }
}
