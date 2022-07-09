import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminreportService {
  apiUrl=environment.apiUrl

  constructor(private http:HttpClient) { }
  // get all reports
  getadmin_report():Observable<any> {
    return this.http.get(environment.apiUrl+'/staff/create_reports/')
  }
}
