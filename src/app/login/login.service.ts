import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  isAdmin = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  login(email: string, password: string){
    if(email==="admin@gmail.com" && password==="Admin") {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }  
    if(email==="user@gmail.com" && password==="user") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    } 
    return this.isLoggedIn;
  }
}
