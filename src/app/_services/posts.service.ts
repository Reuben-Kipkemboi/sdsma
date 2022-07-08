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
    content_name: string,
    content_image:string,
    video:string,
    description:string,
    category:string,) 
    {
    return this.http.post(environment.apiUrl + '/staff/post/', {
      content_name,
      content_image,
      video,
      description,
      category,
    });
  }

  editPosts(val: any) {
    return this.http.put(this.apiUrl + '/staff/post/', val);
  }
  likePosts(val: any) {
    return this.http.post(this.apiUrl + '/staff/post/', val);
  }
  sharePosts(val: any) {
    return this.http.post(this.apiUrl + '/staff/post/', val);
  }

  deletePosts(id:number) {
    return this.http.delete(this.apiUrl + '/post/'+ id);
  }
}
