import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http/";
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routing';
import { BookComponent } from '../book/book.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from '../card/card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailBookComponent } from '../detail-book/detail-book.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LayoutRoutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        LayoutComponent,
        BookComponent,
        TopbarComponent,
        CardComponent,
        PaginationComponent,
        LoadingComponent,
        DetailBookComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }
