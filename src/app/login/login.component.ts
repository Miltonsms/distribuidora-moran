import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/upload']);
    }).catch(error => {
      console.error(error);
      alert('Invalid credentials');
    });
  }
}
