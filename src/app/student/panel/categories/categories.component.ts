import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];
  ngOnInit() {
    this.getCategory();
  }

  constructor( private categoryService: CategoryService) {}

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
