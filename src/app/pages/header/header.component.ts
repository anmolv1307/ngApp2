import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthWrapperComponent } from 'src/app/modules/auth/auth-wrapper/auth-wrapper.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(AuthWrapperComponent, {
      backdropClass: 'dialogBackdrop',
      width: '500px'
    });
  }

  ngOnInit(): void {
  }

}
