import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  postArr: any = [];
  
  ngOnInit() {
    this.getPosts();

  }

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  getPosts() {
    this.postsService.getPosts().subscribe(data => {
      this.postArr = data;
    })
  }


}
