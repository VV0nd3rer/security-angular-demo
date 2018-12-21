import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { LoginService } from "../login.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login(): void {
    this.loginService.login(this.credentials).subscribe();
  }

}
