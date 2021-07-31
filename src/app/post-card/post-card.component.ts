import { Component, OnInit, Input } from '@angular/core';
import { EmbeddedWpTerm, Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: any;
  postCategory: string = '';
  postType: string = '';

  constructor() {}

  ngOnInit(): void {
    this.findPostCategory(this.post);
    this.findPostType(this.post);
  }

  /**
   * To be able to determine post category by search through topics or tags
   *
   * @param post
   */
  findPostCategory(post: any) {
    post._embedded['wp:term'].map((wpTerm: any) => {
      if (post.topic[0]) {
        if (wpTerm[0]?.id == post.topic[0]) {
          this.postCategory = wpTerm[0].name;
          return;
        }
      } else {
        if (wpTerm[0]?.id == post.tags[0]) {
          this.postCategory = wpTerm[0].name;
          return;
        }
      }
    });
  }

  /**
   * To be able to find post type
   * TODO: those 2 functions needs to be merged
   *
   * @param post
   */
  findPostType(post: any) {
    post._embedded['wp:term'].map((wpTerm: any) => {
      if (post.categories[0]) {
        if (wpTerm[0]?.id == post.categories[0]) {
          this.postType = wpTerm[0].name;
          return;
        }
      }
    });
  }
}
