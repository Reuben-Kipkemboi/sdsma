import { AccountService } from './../_services/account.service';
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-staff-content-form',
  templateUrl: './staff-content-form.component.html',
  styleUrls: ['./staff-content-form.component.css'],
})
export class StaffContentFormComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private account: AccountService,
    private post: PostsService,
    private router: Router
  ) {}
@Input()
  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;
  loading = false;
  userId: any;
  content_image:any;
  PhotoFilePath:any;
  // selectedFile: any;

  ngOnInit(): void {
    this.getCategory();
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {
  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.postsService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {},
  //       (err) => {}
  //     );
  //   });

  //   reader.readAsDataURL(file);
  // }

  createPosts(form: NgForm) {
    let data = form.form.value;
    this.loading = true;
    this.post
      .createPosts(
        data.id,
        data.content_name,
        data.content_image,
        data.video,
        data.description,
        data.category
      )
      .subscribe((response) => {
        form.reset();
        this.router.navigate(['/staff-page']);
      });
  }

  uploadImage(event:any){
    var file =event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile',file,file.name);

    this.post.uploadPhoto(formData).subscribe((data:any)=>{
      this.content_image=data.tostring()
      this.PhotoFilePath=this.post.PhotoUrl+this.content_image

    }

    )
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}

