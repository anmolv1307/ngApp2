import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm : FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
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
    console.log(this.loginForm);

    if (this.loginForm.valid) {
      this.auth.saveLoginData(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          alert('Yes');
          // this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

}
