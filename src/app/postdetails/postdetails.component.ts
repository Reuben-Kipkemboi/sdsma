import { Component, OnInit } from '@angular/core';
import { AdminpostService } from '../services/adminpost.service'


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  adminpostArr:any=[];
  id:any;

  constructor(
    private adminpostService: AdminpostService,
  ) { }

  ngOnInit(){
    this.getAdmin_post(this.id);
  }

  getAdmin_post(id: number){
    this.adminpostService.getAdmin_post(id).subscribe(data=>{
      this.adminpostArr = data;
    })
  }

}
