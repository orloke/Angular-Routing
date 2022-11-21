import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-protected-page',
  templateUrl: './protected-page.component.html',
  styleUrls: ['./protected-page.component.css']
})
export class ProtectedPageComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ){}

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
