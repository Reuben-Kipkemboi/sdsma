import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(
    content_name: string,
    content_image: string,
    video: string,
    category: number,
    description: string,
    user: number
  ) {
    return this.http.post(environment.apiUrl + '/staff/post/', {

      content_name,
      content_image,
      video,
      category,
      description,
      user
    });
  }
}
