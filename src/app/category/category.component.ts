import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: any = [];
  ngOnInit() {
    this.getCategory();
  }

  constructor(private router: Router, private categoryService: CategoryService) {}

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}


