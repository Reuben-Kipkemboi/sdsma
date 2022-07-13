import { Component, OnInit } from '@angular/core';
import { AdminpostService } from '../../services/adminpost.service'
import { PostsService } from '../../services/posts.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admincontent',
  templateUrl: './admincontent.component.html',
  styleUrls: ['./admincontent.component.css']
})
export class AdmincontentComponent implements OnInit {
  // adminpostArr:any=[];
  postArr: any = [];
  id='';
  successMessage: any;

  ngOnInit(){
    // this.getAdmin_post(this.id);
    this.getPosts();
  }

  constructor(
    private adminpostService: AdminpostService,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
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

  deleteAdmin_post(id: number) {
    this.adminpostService.deleteAdmin_post(id).subscribe((response) => {
      this.successMessage = 'Post removed';
      this.getPosts()
      // this.router.navigate(['/admin']);
    });
  }
}
