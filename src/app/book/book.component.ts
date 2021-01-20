import { Component, DoCheck, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  data: [] = [];
  total: number;
  postPerPage: number;
  isLoading: boolean = false;
  current: number = 1;

  constructor(private service: BookService) { }

  getData() {
    this.isLoading = true;

    this.service.getBook(this.current)
      .then((response: any) => {
        let d = response.d.Values;

        this.data = d.Data;
        this.total = d.RecordsTotal;
        this.postPerPage = d.PageSize;
      })
      .catch((err) => {
        console.error(err)
      }).finally(() => {
        this.isLoading = false;
      });
  }

  onPaging(page: number) {
    this.current = page;
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }
}
