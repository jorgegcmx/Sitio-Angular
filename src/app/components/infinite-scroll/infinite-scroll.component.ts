import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PaginationService } from '../../services/pagination-service';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerLoadingComponent } from '../../spinner-loading/spinner-loading.component';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [InfiniteScrollModule, NgFor, NgIf, SpinnerLoadingComponent],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.css'
})
export class InfiniteScrollComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  items: string[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 10;

  toggleLoading = () => this.isLoading = !this.isLoading;

  // it will be called when this component gets initialized.
  loadData = () => {
    this.toggleLoading();
    this.paginationService.getItems(this.currentPage, this.itemsPerPage).subscribe({
      next: response => this.items = response,
      error: err => console.log(err),
      complete: () => this.toggleLoading()
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  // this method will be called on scrolling the page
  appendData = () => {
    this.toggleLoading();
    console.log("pagina "+this.currentPage+" items "+this.itemsPerPage);
    
    this.paginationService.getItems(this.currentPage, this.itemsPerPage).subscribe({
      next: response => this.items = [...this.items, ...response],
      error: err => console.log(err),
      complete: () => this.toggleLoading()
    })
  }

  onScroll = () => {
    this.currentPage++;
    this.appendData();
  }
}
