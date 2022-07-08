import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-staff-content-form',
  templateUrl: './staff-content-form.component.html',
  styleUrls: ['./staff-content-form.component.css'],
})
export class StaffContentFormComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
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

  ngOnInit(): void {
    
  }

  createPosts(form: NgForm) {
    let data = form.form.value;
    this.loading = true;
    this.post.createPosts(
      data.content_name,
      data.content_image,
      data.video,
      data.description,
      data.category
    )
      .subscribe(
        (response) => {
          form.reset();
          this.router.navigate(['/staff-page']);
        })
       
    
  }
  
}

