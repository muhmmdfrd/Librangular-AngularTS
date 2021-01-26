import { Injectable, OnInit } from '@angular/core';
import { onComplete, onError, onSuccess } from 'src/interfaces/service.type';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class DetailBookService {

  constructor(private service: NgService) { }

  getBook(id: number, success: onSuccess, error: onError, complete: onComplete): void {
    const requestData = {
      method: "BookGetAll",
      id: id
    };

    return this.service.Send(requestData,
      (response) => success(response),
      (err) => error(err),
      () => complete());
  }

}
