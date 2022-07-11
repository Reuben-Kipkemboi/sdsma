import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-staff-post',
  templateUrl: './staff-post.component.html',
  styleUrls: ['./staff-post.component.css'],
})
export class StaffPostComponent implements OnInit {
  postArr: any = [];

  ngOnInit() {
    this.getPosts();
  }

  constructor(
    private router: Router,
    private postsService: PostsService,
    accountService: AccountService
  ) {}

  successMessage: any;
  userId: any;

  getPosts() {
    this.postsService.getPosts().subscribe((data) => {
      this.postArr = data;
    });
  }

  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe((response) => {
      this.successMessage = 'Job removed';
    });
  }

  getSinglePost(id: number) {
    this.postsService.getSinglePost(id).subscribe((response) => {
      this.successMessage = '';
    });
  }
}

