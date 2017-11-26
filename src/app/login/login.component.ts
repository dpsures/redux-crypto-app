import { UserInfoService } from './../shared/service/user-info.service';
import { User } from './../shared/model/user-info';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'tech-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : User;

  constructor(private loginService : LoginService, private router : Router,
  private userService : UserInfoService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.getUser()
    .subscribe(user => {
      this.user = user;
      console.log('user obj --->'+JSON.stringify(this.user));
      if(this.user != null && this.user != undefined){
          this.userService.setUser(this.user);
          this.router.navigate(['/dashboard']);
      }
    });
  }
}
