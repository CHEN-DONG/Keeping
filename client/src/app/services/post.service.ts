import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(
        private http: HttpClient
    ) { }

    getList() {
        return this.http.get('http://localhost:3000/post')
            .pipe(
                tap(() => console.log(123))
            );
    }
    getData() {

    }
}