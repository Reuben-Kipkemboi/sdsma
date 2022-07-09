import { Component, OnInit } from '@angular/core';
import { TestServicesService } from '../services/test-services.service';
// import {} from Services/TestServicesService'
import { Post } from '../class/post';


@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  constructor(private TestEveningServicesService: TestServicesService) { }
  listposts: Post [] = [];
  ngOnInit(): void {

    this.TestEveningServicesService.getPosts()
    .subscribe(
      data=>{
        this.listposts=data
      }
    );
  }

}
