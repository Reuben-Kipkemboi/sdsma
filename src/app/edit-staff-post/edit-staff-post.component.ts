import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_services';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-edit-staff-post',
  templateUrl: './edit-staff-post.component.html',
  styleUrls: ['./edit-staff-post.component.css'],
})
export class EditStaffPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private posts: PostsService,
    private cat: CategoryService,
    private router: Router,
    private account: AccountService
  ) {}

  postId: any;
  post: any;
  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;
  userId: any;
  preloader = false;

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe((params) => {
      this.postId = params;
      this.postId = this.postId.id;
      this.posts.getSinglePost(this.postId).subscribe((response) => {
        this.post = response;
        console.log(this.post);
      });
    });
  }

  updatePosts(form: NgForm) {
    let data = form.form.value;
    this.posts
      .updatePosts(
        data.content_name,
        data.content_image,
        data.video,
        data.description,
        data.category,
        this.postId,
        
      )
      .subscribe((response) => {
        form.reset();
        this.successMessage = 'post updated successfully';
        this.router.navigate(['/staff-page']);
        
        
      });
  }
  getCategory() {
    this.cat.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}

