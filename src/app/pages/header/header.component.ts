import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthWrapperComponent } from 'src/app/modules/auth/auth-wrapper/auth-wrapper.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = this.auth.isLoggedIn();

  constructor(
    public dialog: MatDialog,
    public auth: AuthService
  ) { }

  openDialog() {
    this.dialog.open(AuthWrapperComponent, {
      backdropClass: 'dialogBackdrop',
      width: '500px'
    });
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
  }

}
