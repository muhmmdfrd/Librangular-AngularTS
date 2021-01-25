import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgService } from 'src/services/ng.service';

@Injectable({
  providedIn: 'root'
})
export class DetailBookService {

  constructor(private service: NgService, private activeRouter: ActivatedRoute) { }

  getBookId(id: number) {
    return this.service.AngularService({
      method: "BookGetAll",
      id: id
    });
  }

}
