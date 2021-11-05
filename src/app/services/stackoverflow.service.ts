import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {

  constructor(private http: HttpClient) {
  }

  getAll(title: string, pageSize = 10) {
    return this.http.get(environment.soEndpoint
      + `?pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&intitle=${title}`);
  }
}
