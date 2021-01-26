import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { getDataLogin } from 'src/helpers/helper';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {

  data: [] = [];
  total: number;
  postPerPage: number;
  isLoading: boolean = false;
  current: number = 1;
  keywordForm: FormControl = new FormControl("");
  keyword: string;

  constructor(private service: BookService, private router: Router) { }

  getData() {
    this.isLoading = true;

    this.service.getBook(this.current, this.keyword, (response) => {
      const { Data, RecordsTotal, RecordsFiltered, PageSize } = response;

      this.data = Data;
      this.total = this.keyword === "" ? RecordsTotal : RecordsFiltered;
      this.postPerPage = PageSize;
    }, (err) => {
      console.log(err)
    }, () => {
      this.isLoading = false;
    })
  }

  onPaging(page: number) {
    this.current = page;
    this.getData();
  }

  onSearch() {
    this.keyword = this.keywordForm.value;
    this.current = 1;
    this.getData();
  }

  ngOnInit() {
    getDataLogin() == null ? this.router.navigateByUrl('/login') : this.getData();
  }
}
