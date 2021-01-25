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

  ngOnInit() {
    this.service.getBookId(getParamsId()).then(({ d }: any) => {
      const { Values } = d;
      const data = Values.Data.shift();

      this.model = data;
      this.model.Path = `${getPathServer()}/Images/${"maestra.jpg"}`;
    }).catch((err) => console.error(err))
      .finally(() => this.isLoading = false)
  }

}
