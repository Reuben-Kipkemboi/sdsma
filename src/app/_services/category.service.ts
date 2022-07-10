import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get(environment.apiUrl + '/staff/create_categories/');
  }

  createCategory(
    id: number,
    type: string
  ) {
    return this.http.post(
      environment.apiUrl + '/staff/create_categories/',
      {
        id,
        type,
      }
    );
  }
}
