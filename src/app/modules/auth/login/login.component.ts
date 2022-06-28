import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthWrapperComponent } from '../auth-wrapper/auth-wrapper.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loader = false;

  loginForm : FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    public dialogRef: MatDialogRef<AuthWrapperComponent>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
   }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let router = this.router.navigate(['profile']);
      let closeDialog = this.dialogRef.close();
      let loader = this.loader = true;
      this.auth.saveLoginData(this.loginForm.value).subscribe({
        next(response) {
          loader
          sessionStorage.setItem('token', response.token); 
          router; 
          closeDialog;
          window.location.reload();
        },
        error(err: Error) { alert(err.message); }
    });
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    
  }

}
