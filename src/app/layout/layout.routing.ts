import { Routes } from '@angular/router';
import { BookComponent } from '../book/book.component';
import { DetailBookComponent } from '../detail-book/detail-book.component';

export const LayoutRoutes: Routes = [
  {
    path: '', redirectTo: 'book', pathMatch: 'full'
  },
  {
    path: 'book', component: BookComponent
  },
  {
    path: 'book/:id', component: DetailBookComponent
  }
]
