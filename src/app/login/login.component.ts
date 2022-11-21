import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  login(){
    if(this.auth.login(this.email, this.password)){
      this.router.navigate(['pagina-protegida']);
      return;
    }

    alert('Login é invalido!')
    this.email = '';
    this.password = '';
  }
}
