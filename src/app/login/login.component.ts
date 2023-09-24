import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email = '';
  password = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private route: Router, private loginService: LoginService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(){
    if(this.loginService.login(this.email, this.password)) {
      this.route.navigate(['/rooms']);
      //this.route.navigateByUrl('/rooms/add');
    }   
  }

}
