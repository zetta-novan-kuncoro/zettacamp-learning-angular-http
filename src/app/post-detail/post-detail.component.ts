import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined
  isOnEdit: boolean = false

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.route.queryParams.subscribe(params => {
      this.isOnEdit = params['edit'] === 'true' ? true : false
    })
    this.postService.fetchPost(id).subscribe(post => this.post = post[0])
  }

  onSubmit(title: HTMLInputElement, body: HTMLTextAreaElement) {
    const post = { ...this.post, title: title.value, body: body.value} as Post
    this.postService.updatePost(post).subscribe(newPost => {
      this.post = newPost
      this.router.navigate([])
    })
  }

}
