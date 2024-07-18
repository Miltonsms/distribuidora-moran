import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-Distribuidora-Moran';
  login = 0;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.login = parseInt(localStorage.getItem('currentUser'))
    console.log(this.login)
    if(this.login !=1){
      this.router.navigate(['/login']);
      this.login = 0
    } else {
      this.login = 1
      this.router.navigate(['/upload']);
    }
  }
}
