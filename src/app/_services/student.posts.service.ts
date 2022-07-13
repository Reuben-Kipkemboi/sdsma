import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentPostService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/post/`);
  }

  getpost(id: number) {
    return this.http.get(`${this.apiUrl}/student/post/${id}`);
  }

  createPost(postForm:any, formData: any) {
    return this.http.post(`${this.apiUrl}/student/post/`, formData, postForm);
  }

  updatePosts(
    id: number,
    content_name: string,
    content_image: string,
    video: string,
    description: string,
    category: string
  ) {
    return this.http.put(`${this.apiUrl}/student/post/${id}`, {
      content_name,
      content_image,
      video,
      description,
      category,
    });
  }

  updateProfile(
    // id: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    avatar: string,
    contact: string,
    bio: string,
    email: string
  ) {
    return this.http.put(`${this.apiUrl}/student/update_profile`, {
      username,
      password,
      first_name,
      last_name,
      avatar,
      contact,
      bio,
      email,
    });
  }

  comment(id: number) {
    return this.http.get(`${this.apiUrl}/student/post/${id}/comment`);
  }

  likePost(id: number) {
    return this.http.get(`${this.apiUrl}/student/post/${id}/like`);
  }

  deletePost(id: number) {
    return this.http.get(`${this.apiUrl}/student/post/${id}`);
  }

  // wish(id: number) {
  //   return this.http.get(`${this.apiUrl}/student/${id}/wishlist`);
  // }

  wishlist(id: number) {
    return this.http.get(`${this.apiUrl}/student/wishlist/${id}`);
  }
}
