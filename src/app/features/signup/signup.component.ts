import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigupService } from '../../core/services/sigup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  password: string = '';
  email: string = '';
  show: boolean = false;

  constructor(private router: Router, private sigupService: SigupService) {}

  submit() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.sigupService.execute(data).subscribe((_) => {
      this.show = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    });
    this.clear();
  }
  clear() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.show = true;
  }
}
