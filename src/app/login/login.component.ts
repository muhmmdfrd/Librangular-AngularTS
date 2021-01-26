import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { getDataLogin } from 'src/helpers/helper';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup = this.formBuilder.group({
    username: '',
    password: ''
  });
  textLogin: string = "Sign In";
  isLoading: boolean = false;
  btnStatus: string = null;

  constructor(private service: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    getDataLogin() != null ? this.router.navigateByUrl('/') : null;
  }

  login(event: Event) {
    event.preventDefault();

    const { username, password } = this.formGroup.controls;

    this.isLoading = true;
    this.textLogin = "loading...";
    this.btnStatus = "disabled";

    this.service.login(username.value, password.value,
      (response) => {
        const ssid = JSON.stringify(response);
        window.localStorage.setItem('_ilu', ssid);
        this.router.navigateByUrl('/home/book');
      },
      (err) => {
        alert(err)
      },
      () => {
        this.isLoading = false;
        this.textLogin = "Sign In";
        this.btnStatus = null;
      })
  }
}
