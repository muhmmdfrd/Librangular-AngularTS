import { Injectable } from '@angular/core';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private service: NgService) { }

  login(_username: string, _password: string) {
    return this.service.AngularService({
      method: "Login",
      username: _username,
      password: _password
    });
  }

}
