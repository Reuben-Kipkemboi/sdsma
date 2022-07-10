import { Component, OnInit } from '@angular/core';
import { AccountService } from './../_services/account.service';
import { PostsService } from '../_services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  constructor(
    private router: Router,
    private posts: PostsService,
    accountService: AccountService,
    private route: ActivatedRoute
  ) {}
  successMessage: any;
  userId: any;
  post: any;
  postId: any;

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe((params) => {
      this.postId = params;
      this.postId = this.postId.id;
      this.posts.getSinglePost(this.postId).subscribe((response) => {
        this.post = response;
        console.log(this.post);
      });
    });
  }

  getSinglePost(id: number) {
    this.posts.getSinglePost(id).subscribe((response) => {
      this.successMessage = '';
    });
  }

  deletePost(id: number) {
    this.posts.deletePost(id).subscribe((response) => {
      this.successMessage = 'post removed';
      this.router.navigate(['/staff-page']);
    });
  }

  numberOfLikes: number = 0;
  likeButtonClick() {
    this.numberOfLikes++;
  }
}
