import { Injectable } from '@angular/core';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private service: NgService) { }

  login(username: string, password: string) {
    return this.service.AngularService({
      method: "Login",
      username: username,
      password: password
    });
  }

}
