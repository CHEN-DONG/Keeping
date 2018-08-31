import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export class DataContent {
  constructor(public data: any[], public count: number) { }
}

export class Post {
  constructor(public id: number, public name: string) { }
}

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(
    private http: HttpClient
  ) { }

  getList() {
    return this.http.get('http://localhost:3000/post')
      .pipe(
        map(result => result['content'])
      );
  }
  getData() {

  }
}