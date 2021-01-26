import { Injectable } from '@angular/core';
import { onComplete, onError, onSuccess } from 'src/interfaces/service.type';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private service: NgService) { }

  login(_username: string, _password: string, success: onSuccess, error: onError, complete: onComplete) {
    const requestData = {
      method: "Login",
      username: _username,
      password: _password
    };

    return this.service.Send(requestData, (response) => success(response), (err) => error(err), () => complete());
  }

}
