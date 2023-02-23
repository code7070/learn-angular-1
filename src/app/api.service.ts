import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(endpoint: string = '') {
    let url = endpoint || 'https://dog.ceo/api/breeds/image/random';
    return this.http.get(url);
  }

  post() {
    // return this.http.post()
  }
}
