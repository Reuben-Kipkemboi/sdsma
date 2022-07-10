import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl=environment.apiUrl

  constructor(private http:HttpClient) { }

  // get all posts list
  getPosts(): Observable<any>{
    return this.http.get(environment.apiUrl+'/staff/post/')
  }

  
}
