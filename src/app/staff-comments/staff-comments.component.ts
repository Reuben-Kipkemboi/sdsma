import { Component, OnInit,Input } from '@angular/core';
import { StaffCommentsService } from '../_services/staff-comments.service';
import { Router } from '@angular/router';
import { AccountService } from '../_services'; 

@Component({
  selector: 'app-staff-comments',
  templateUrl: './staff-comments.component.html',
  styleUrls: ['./staff-comments.component.css'],
})
export class StaffCommentsComponent implements OnInit {
  commentsArr: any = [];
  id:any;

  ngOnInit() {
    this.getComments(this.id);
  }

  constructor(
    private router: Router,
    private staffcomments: StaffCommentsService,
    accountService: AccountService
  ) {}

  successMessage: any;
  userId: any;

  getComments(id:number) {
    this.staffcomments.getComments(id).subscribe((data) => {
      this.commentsArr = data;
    });
  }
}
