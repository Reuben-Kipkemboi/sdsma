import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl = environment.apiUrl;
  PhotoUrl =
    'https://res.cloudinary.com/reuby/image/upload/v1/media/images_uploaded/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get('https://moti-vate.herokuapp.com/staff/post/');
  }

  createPosts(
    id: string,
    content_name: string,
    content_image: File,
    video: File,
    description: string,
    category: string
  ) {
    return this.http.post('https://moti-vate.herokuapp.com/staff/post/' ,{
      id,
      content_name,
      content_image,
      video,
      description,
      category,
    });
  }

  uploadPhoto(formData: any) {
    return this.http.post(
      'https://moti-vate.herokuapp.com/staff/post/',
      formData
    );
  }

  updatePosts(
    id: number,
    content_name: string,
    content_image: File,
    video: File,
    description: string,
    category: string
  ) {
    return this.http.put('https://moti-vate.herokuapp.com/staff/post/' + id, {
      content_name,
      content_image,
      video,
      description,
      category,
    });
  }

  getSinglePost(id: number) {
    return this.http.get('https://moti-vate.herokuapp.com/staff/post/' + id);
  }

  deletePost(id: number) {
    return this.http.delete('https://moti-vate.herokuapp.com/staff/post/' + id);
  }

  likePosts(id: number) {
    return this.http.post(
      'https://moti-vate.herokuapp.com/posts/' + id + '/like/',
      id
    );
  }
}

