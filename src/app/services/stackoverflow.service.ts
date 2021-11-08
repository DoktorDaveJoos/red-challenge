import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {

  constructor(private http: HttpClient) {
  }

  getAll(title: string, pageSize = 10) {
    return this.http.get(environment.soEndpoint
      + `?pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&intitle=${title}`).pipe(
        map(res => {
          console.log(res);
          return res;
        })
    )
  }
}
