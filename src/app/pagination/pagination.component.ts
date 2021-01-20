import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  @Input() maxVisibleButtons: number = 2;
  @Input() total: number;
  @Input() currentPage: number;
  @Input() postPerPage: number;

  @Output() onPage: EventEmitter<any> = new EventEmitter();

  onClickPage(page: number): void {
    this.currentPage = page;
    this.onPage.emit(this.currentPage);
  }

  onClickFirstPage(): void {
    this.currentPage = 1;
    this.onPage.emit(this.currentPage);
  }

  onClickPreviousPage(): void {
    this.currentPage = this.currentPage - 1;
    this.onPage.emit(this.currentPage);
  }

  onClickNextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.onPage.emit(this.currentPage);
  }

  onClickLastPage(): void {
    this.currentPage = this.totalPages();
    this.onPage.emit(this.currentPage);
  }

  totalPages(): number {
    return Math.ceil(this.total / this.postPerPage);
  }

  startPage(): number {
    if (this.currentPage === 1)
      return 1;

    if (this.currentPage === this.totalPages())
      return this.totalPages() - this.maxVisibleButtons;

    return this.currentPage - 1;
  }

  pages(): Array<object> {
    const range = [];
    const all = this.startPage() + this.maxVisibleButtons;
    const minimum = this.totalPages();
    const limit = Math.min(all, minimum);

    for (let i = this.startPage(); i <= limit; i++) {
      if (i === 0)
        continue;

      range.push({
        name: i,
        isDisabled: i === this.currentPage
      });
    }

    return range;
  }

  isInFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isInLastPage(): boolean {
    return this.currentPage === this.totalPages();
  };

  prevStatus(): string {
    return this.currentPage === 1 ? "disabled" : "";
  };

  nextStatus(): string {
    return this.currentPage === this.totalPages() ? "disabled" : "";
  }

  isPageActive(page: number): string {
    return this.currentPage === page ? 'active' : null;
  }
  ngOnInit(): void { }

}
