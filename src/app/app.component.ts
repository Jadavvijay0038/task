import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Catagory } from './provider/api-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App-test';
  categories: Catagory[] = [];
  items:any = [];
  selectedCategoryId = '';
selectedCatId: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getCat().pipe(
      map(response => response)
    ).subscribe(categories => {
      this.categories = categories;
      this.selectedCat(this.categories[0]);
    });
  }

  selectedCat(category: Catagory): void {
    this.selectedCategoryId = category.id;
    this.apiService.getItems(category.id).pipe(
      map(response => response)
    ).subscribe(items => {
      this.items = items;
    });
  }
}
