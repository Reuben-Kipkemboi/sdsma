import { Component, OnInit } from '@angular/core';
import { AdminpostService } from '../../services/adminpost.service'
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'app-admincontent',
  templateUrl: './admincontent.component.html',
  styleUrls: ['./admincontent.component.css']
})
export class AdmincontentComponent implements OnInit {
  // adminpostArr:any=[];
  postArr: any = [];
  id='';

  ngOnInit(){
    // this.getAdmin_post(this.id);
    this.getPosts();
  }

  constructor(
    private adminpostService: AdminpostService,
    private postsService: PostsService
  ) { }

  // getAdmin_post(id: string){
  //   this.adminpostService.getAdmin_post(id).subscribe(data=>{
  //     this.adminpostArr = data;
  //   })
  // }

  getPosts() {
    this.postsService.getPosts().subscribe((data) => {
      this.postArr = data;
    });
  }
}
