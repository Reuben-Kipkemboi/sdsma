import { Component, OnInit } from '@angular/core';
import { AccountService } from './../_services/account.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  constructor(
    private cat: CategoryService,
    private account: AccountService,
    private post: PostsService,
    private router: Router
  ) {}
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
        this.router.navigate(['/staff-page']);
      });
  }
}
