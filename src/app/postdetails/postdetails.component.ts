import { Component, OnInit } from '@angular/core';
import { AdminpostService } from '../services/adminpost.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  adminpostArr:any=[];
  id:any;
  // route: any;

  constructor(
    private adminpostService: AdminpostService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(){
    this.route.params.subscribe((params:any) =>
     { console.log(params)
    this.getAdmin_post(params.id);}
    )
  }

  getAdmin_post(id: number){
    this.adminpostService.getAdmin_post(id).subscribe(data=>{
      this.adminpostArr = data;
    })
  }

  // deleteAdmin_post(id: number) {
  //   this.adminpostService.deleteAdmin_post(id).subscribe((response) => {

  //   });
  // }

}
