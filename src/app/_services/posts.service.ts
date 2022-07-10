import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(environment.apiUrl + '/staff/post/');
  }

  createPosts(
    id: number,
    content_name: string,
    content_image: string,
    video: string,
    description: string,
    category: string
  ) {
    return this.http.post('https://moti-vate.herokuapp.com/staff/post/', {
      id,
      content_name,
      content_image,
      video,
      description,
      category,
    });
  }
  updatePosts(
    id: number,
    content_name: string,
    content_image: string,
    video: string,
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

  deleteJob(id: number) {
    return this.http.delete('https://moti-vate.herokuapp.com/staff/post/' + id);
  }

 
  likePosts(val: any) {
    return this.http.post(this.apiUrl + '/staff/post/', val);
  }
  sharePosts(val: any) {
    return this.http.post(this.apiUrl + '/staff/post/', val);
  }
}
