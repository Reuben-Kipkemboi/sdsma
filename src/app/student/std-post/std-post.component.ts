import { Component, OnInit } from '@angular/core';
import { StudentPostService } from 'src/app/_services';

@Component({
  selector: 'app-std-post',
  templateUrl: './std-post.component.html',
  styleUrls: ['./std-post.component.css']
})
export class StdPostComponent implements OnInit {
  posts: any = []
  loading = false;
  
  constructor( private postService: StudentPostService ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.loading = true;
    this.postService.getPosts().subscribe(
      (response)=> {
        this.loading = false;
        this.posts = response
      },
      (error) => {
        console.log(error);
        
      }
    );
  }

}
