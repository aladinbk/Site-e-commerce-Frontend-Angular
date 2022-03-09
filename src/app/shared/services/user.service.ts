import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8584/user'
  constructor(private httpClient: HttpClient) { }
  authenticate(user): Observable<any> {
    return this.httpClient.post(this.url, user);
  }
}
