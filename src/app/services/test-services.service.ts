import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServicesService {
  apiUrl= environment.apiUrl

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any>{

    return this.http.get("https://moti-vate.herokuapp.com/staff/post/")


  }
}
