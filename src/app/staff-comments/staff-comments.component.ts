import { StaffCommentsService } from './../_services/staff-comments.service';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services'; 
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-comments',
  templateUrl: './staff-comments.component.html',
  styleUrls: ['./staff-comments.component.css'],
})
export class StaffCommentsComponent implements OnInit {
  commentsArr: any = [];
  id: any;

  

  constructor(
    private http:HttpClient,
    private router: Router,
    private staffcomments: StaffCommentsService,
    accountService: AccountService,
    
    
  ) {}

  ngOnInit() {
    // this.staffcomments.postComments().subscribe((comment) => {
    //   this.comment = comment;
    // this.getComments(this.id);
    // this.postComments(this.id)
  }

  successMessage: any;
 
  post_id:any;
  comment:any;
  

  // getComments(id: number) {
  //   this.staffcomments.getComments(id).subscribe((data) => {
  //     this.commentsArr = data;
  //     console.log(data);
  //   });
  // }

  postComments(data:any) {
this.http.post('https://moti-vate.herokuapp.com/comment-staff/post/',data)
.subscribe((result)=>
{
  console.warn('result', result);
  this.router.navigate(['/single-post/:id']);
})
    // let data = form.form.value;
    // this.staffcomments
    //   .postComments(
    //     data.id,
    //     data.comment,
    //     data.post_id, 
    //   )
    //   .subscribe((response) => {
    //     form.reset();
    //     // this.router.navigate(['']);
    //   });
    
  }
}

