import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'
  postsDataSource = new BehaviorSubject<Post[]>([])
  post$ = this.postsDataSource.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  fetchPosts(paramOptions: Object = {}): Observable<Post[]> {
    const params = new HttpParams(paramOptions)
    return this.http.get<Post[]>(this.ROOT_URL + '/posts', { params })
    this.http.get<Post[]>(this.ROOT_URL + '/posts', { params }).subscribe(
      res => this.postsDataSource.next(res)
    )
  }

  fetchPost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.ROOT_URL + '/posts', {
      params: { id }
    })
    this.postsDataSource.getValue().find(post => id === post.id)
  }

  updatePost(newPost: Post): Observable<Post> {
    const body = JSON.stringify(newPost)
    return this.http.put<Post>(this.ROOT_URL + '/posts/' + newPost.id, body, {
      headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})
    })
    const original = this.postsDataSource.getValue()
    const newData = original.map(post => post.id === newPost.id ? newPost : post)
    this.postsDataSource.next(newData)
  }
}
