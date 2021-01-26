import { Component, OnInit } from '@angular/core';
import { getParamsId, getPathServer } from 'src/helpers/helper';
import { DetailBookService } from './detail-book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  model: any;
  isLoading: boolean = true;

  constructor(private service: DetailBookService) { }

  getData() {
    this.service.getBook(
      getParamsId(),
      (response) => {
        this.model = response.Data.shift();
        this.model.Path = `${getPathServer(true)}/maestra.jpg`
      }, (err) => {
        console.log(err);
      }, () => {
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.getData();
  }

}
