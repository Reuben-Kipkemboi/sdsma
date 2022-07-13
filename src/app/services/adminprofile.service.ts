import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminprofileService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,) { }

  // get admin profile
  getAdmin_profile(id:number): Observable<any> {
    return this.http.get(environment.apiUrl+`/api/profile/${id}/`)
  }
}
