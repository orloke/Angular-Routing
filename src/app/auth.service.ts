import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticate(): boolean{
    return !!sessionStorage.getItem('access-token');
  }

  login(email: string, password: string): boolean{
    if (email == 'admin@admin.com.br' && password == '123456') {
      sessionStorage.setItem('access-token','acertou a senha')
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.clear()
  }
}
