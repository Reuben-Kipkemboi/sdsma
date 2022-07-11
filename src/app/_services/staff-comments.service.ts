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
      'https://moti-vate.herokuapp.com/staff/post/' + id + '/comment/'
    );
  }

  postComments(
    id: number,
   
    post_id: number,
    comment: string,
    
  ) {
    return this.http.post(
      'https://moti-vate.herokuapp.com/staff/post/' + 4 + '/comment/',
      {
        id,
        post_id,
        comment,
      }
    );
  }
}
