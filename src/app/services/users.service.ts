import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl=environment.apiUrl

  constructor(private http:HttpClient) { }
  // get all users
  getUsers():Observable<any> {
    return this.http.get(environment.apiUrl+'/all_users/')
  }

// find one user
  // findOne(id:number):Observable<User>{
  //   return  this.http.get(environment.apiUrl+'/all_users/'+ id).pipe(map((user:User)=>user)

  // }

}
