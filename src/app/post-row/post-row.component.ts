import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  providers: [PostsService],
  styleUrls: ['./post-row.component.scss']
})
export class PostRowComponent implements OnInit {

  posts : Post[] = [];
  error : any;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts()
    .subscribe((posts:Post[]) => (this.posts = posts));
  }
}
