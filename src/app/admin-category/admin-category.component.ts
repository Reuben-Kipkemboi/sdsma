import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  constructor(
    private cat: CategoryService,
    private post: PostsService,
    private router: Router
  ) { }
  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;
  loading = false;
  userId: any;

  ngOnInit(): void {}

  createCategory(form: NgForm) {
    let data = form.form.value;
    this.loading = true;
    this.cat
      .createCategory(
        data.id,
        data.type
      )
      .subscribe((response) => {
        form.reset();
        this.router.navigate(['/admin']);
      });
  }

}

