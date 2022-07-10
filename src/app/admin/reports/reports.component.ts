import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  postArr: any = [];
  mode: ProgressBarMode = 'determinate';
  value = 50;
  videos = 40;

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }
  getPosts() {
    this.postsService.getPosts().subscribe(data => {
      this.postArr = data;
    })
  }

  ngOnInit() {
    this.getPosts();
  }

}






