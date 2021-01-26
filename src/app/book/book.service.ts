import { Injectable } from '@angular/core';
import { onComplete, onError, onSuccess } from 'src/interfaces/service.type';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private service: NgService) { }

  getBook(current: number, keyword: string = "", success: onSuccess, error: onError, complete: onComplete) {

    const requestData = {
      method: "BookGetAll",
      pageIndex: current,
      pageSize: 8,
      keyword: keyword
    };

    return this.service.Send(requestData, (response) => success(response), (err) => error(err), () => complete());
  }

}
