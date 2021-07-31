import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';


@Injectable({
  providedIn: 'root',
})
export class PostsService {
  
  API_URL: string = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL)
  }
}
