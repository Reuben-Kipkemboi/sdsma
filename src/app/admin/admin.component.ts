import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Router } from '@angular/router';
import { CommentsService } from '../services/comments.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  postArr: any = [];
  commentlist:any=[];

  ngOnInit() {
    this.getPosts();
    this.getComments();

  }

  constructor(
    private router: Router,
    private postsService: PostsService,
    private commentsService: CommentsService
  ) { }

  getPosts() {
    this.postsService.getPosts().subscribe(data => {
      this.postArr = data;
    })
  }

  getComments() {
    this.commentsService.getComments().subscribe(data => {
      this.commentlist = data;
    })
  }


}
