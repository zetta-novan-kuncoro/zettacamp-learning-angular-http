import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { path: 'posts', text: 'All Posts' },
    { path: 'posts/new', text: 'New Post' }
  ]
}
