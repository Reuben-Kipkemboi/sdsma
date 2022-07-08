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

  constructor(private router: Router,
    private postsService: PostsService) {}

  getPosts() {
    this.postsService.getPosts().subscribe((data) => {
      this.postArr = data;
    });
  }
}
