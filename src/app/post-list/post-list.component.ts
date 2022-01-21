import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] | undefined

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(value => this.posts = value)
  }

}
