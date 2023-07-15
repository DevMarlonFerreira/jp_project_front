import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { AuthService } from '../../core/services/auth.service';
import { Auth } from '../../core/models/auth.model';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  show: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  submit() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.loginService.execute(data).subscribe((res) => {
      this.show = true;
      this.authService.login(res as Auth);
      // setTimeout(() => {
      this.router.navigate(['/dashboard']);
      // }, 3000);
    });
    // this.clear();
  }
  clear() {
    this.email = '';
    this.password = '';
    this.show = true;
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
