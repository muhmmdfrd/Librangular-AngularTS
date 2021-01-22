import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() qty: number;
  @Input() description: string;
  @Input() id: number

  constructor() { }

  ngOnInit() { }

}
