import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class StaffCommentsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<any> {
    return this.http.get(
      environment.apiUrl + '/staff/post/' + { id } + '/comment/'
    );
  }

  postComments(
    id: string,
    userId: string,
    postId: string,
    comments: string,
    
  ) {
    return this.http.post(
      environment.apiUrl + '/staff/post/' + { id } + '/comment/',
      {
        id,
        userId,
        postId,
        comments,
      }
    );
  }
}
