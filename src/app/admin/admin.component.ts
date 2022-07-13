import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Router } from '@angular/router';
import { CommentsService } from '../services/comments.service'
import { LikesService } from '../services/likes.service'
import { UsersService } from '../services/users.service'
import { AdminreportService } from '../services/adminreport.service'
import {AdminprofileService} from '../services/adminprofile.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  postArr: any = [];
  commentlist:any=[];
  likeslist:any=[];
  userslist:any=[];
  admin_reportlist:any=[];
  admin_profileArr:any=[];
  id:any;

  ngOnInit() {
    this.getPosts();
    this.getComments();
    this.getLikes();
    this.getUsers();
    this.getadmin_report();
    this.route.params.subscribe(
      (params:any)=>
      {console.log(params)
        this.getadmin_profile(params.id);
      }
    )
    // this.getadmin_profile(params.id);

  }

  constructor(
    private router: Router,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private likesService: LikesService,
    private usersService: UsersService,
    private adminreportService: AdminreportService,
    private adminprofileService: AdminprofileService,
    private route: ActivatedRoute,
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

  getLikes() {
    this.likesService.getLikes().subscribe(data => {
      this.likeslist = data;
    })
  }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.userslist = data;
    })
  }

  getadmin_report() {
    this.adminreportService.getadmin_report().subscribe(data => {
      this.admin_reportlist = data;
    })
  }

  getadmin_profile(id: number){
    this.adminprofileService.getAdmin_profile(id).subscribe(data => {
      this.admin_profileArr=data;
    })
  }
}
