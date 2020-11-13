import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  public login(): void {
    sessionStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/']);
  }
}
