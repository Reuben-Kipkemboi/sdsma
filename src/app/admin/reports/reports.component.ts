import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { PostsService } from '../../_services/posts.service';
import { Router } from '@angular/router';
import { AdminreportService } from '../../services/adminreport.service'

// //external js function declaration
// declare function getToday(): any;
// declare function greetings(name: any): any;
declare function reportDisplay(): any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  postArr: any = [];
  admin_reportlist:any=[];
  mode: ProgressBarMode = 'determinate';
  value = 50;
  videos = 40;


  constructor(
    private router: Router,
    private adminreportService: AdminreportService,
  ) { }
  getadmin_report() {
    this.adminreportService.getadmin_report().subscribe(data => {
      this.admin_reportlist = data;
    })
  }

  ngOnInit() {
    // // call the externaljs functions
    // getToday(); // without param
    // greetings('rohol'); // with param

    this.getadmin_report();

  }

}






