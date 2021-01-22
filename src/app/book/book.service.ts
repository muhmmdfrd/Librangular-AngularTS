import { Injectable } from '@angular/core';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private service: NgService) { }

  getBook(current: number, keyword: string = "") {
    return this.service.AngularService({
      method: "BookGetAll",
      pageIndex: current,
      pageSize: 8,
      keyword: keyword
    });
  }

}
