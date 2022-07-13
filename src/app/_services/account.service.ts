import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { User } from '../_models';
import {observable} from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  urlProfile = "https://moti-vate.herokuapp.com/api/profile/<username>"

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
  login(username: string, password: string) {
    return this.http
      // .post<User>(`${environment.apiUrl}/api/login/`, {
        .post<User>("https://moti-vate.herokuapp.com/api/login/", {
        username,
        password,
      }).pipe(map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this.router.navigate(['/login']);
  }

  register(user: User) {
    // "https://moti-vate.herokuapp.com/signup/staff/

    // return this.http.post("https://moti-vate.herokuapp.com/signup/staff/", user);
    return this.http.post("https://moti-vate.herokuapp.com/signup/", user);
  }
  student_register(user: User) {
    // "https://moti-vate.herokuapp.com/signup/staff/
    return this.http.post(`${environment.apiUrl}/api/signup/student/`, user);
  }

  getUser():Observable<any>{ 
    return this.http.get<any>(this.urlProfile)

  }
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/all_users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/all_users/${id}`);
  }

  update(id: string, params: any) {
    return this.http.put(`${environment.apiUrl}/all_users/${id}`, params).pipe(
      map((x) => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      })
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/all_users/${id}`).pipe(
      map((x) => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      })
    );
  }
}



