import { Component, OnInit,Input } from '@angular/core';
import { StaffCommentsService } from '../_services/staff-comments.service';
import { Router } from '@angular/router';
import { AccountService } from '../_services'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-staff-comments',
  templateUrl: './staff-comments.component.html',
  styleUrls: ['./staff-comments.component.css'],
})
export class StaffCommentsComponent implements OnInit {
  commentsArr: any = [];
  id: any;

  ngOnInit() {
    // this.getComments(this.id);
    // this.postComments(this.id)
  }

  constructor(
    private router: Router,
    private staffcomments: StaffCommentsService,
    accountService: AccountService,
    
  ) {}

  successMessage: any;
 
  post_id:any;
  comment:any;

  // getComments(id: number) {
  //   this.staffcomments.getComments(id).subscribe((data) => {
  //     this.commentsArr = data;
  //     console.log(data);
  //   });
  // }

  postComments(form: NgForm) {
    let data = form.form.value;
    this.staffcomments
      .postComments(
        data.id,
        data.comment,
        data.post_id,
        
        
      )
      .subscribe((response) => {
        form.reset();
        // this.router.navigate(['']);
      });
  }
}
