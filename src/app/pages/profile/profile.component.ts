import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  expToken: any;
  tokenPayload: any;
  expirationDate: any;

  currentUser: any;

  constructor(private jwtHelper :JwtHelperService) {
    this.expToken = sessionStorage.getItem('token');
    this.GetTokenDecoded();
    this.getTokenExpirationDate();
   }

  GetTokenDecoded() {
    let userInfo = this.jwtHelper.decodeToken(this.expToken);
    this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(this.expToken));
    return userInfo._id;
  }

  getTokenExpirationDate() {
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.expToken);
  }
  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.expToken);
  }

  ngOnInit(): void {
    this.currentUser = this.GetTokenDecoded();
  }

}
