import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, CategoryService, StudentPostService } from 'src/app/_services';
@Component({
  selector: 'app-std-post-form',
  templateUrl: './std-post-form.component.html',
  styleUrls: ['./std-post-form.component.css'],
})
export class StdPostFormComponent implements OnInit {
 @Input()
  postForm!: FormGroup;
  submitted = false;
  loading = false;
  categories:any = [];
  imageUrl!: string;
  videoUrl!: string;
  image!: File;
  video!: File;

  constructor(
    private formBuilder: FormBuilder,
    private postService: StudentPostService,
    private categoryService: CategoryService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      content_name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      content_image: [''],
      video: [''],
    });
    this.getCategory();

  }
  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
      // this.video = event.target.files[0];
      // this.postForm.get('content_image')
      const formData = new FormData();
      formData.append('content_image', this.image, this.image.name);
      // formData.append('video', this.video, this.video.name )
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.postForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.postForm.invalid) {
      return;
    }
    this.loading = true;
    this.postService
      .createPost(this.postForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success('Upload successful', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/student'], { relativeTo: this.route });
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  };

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
