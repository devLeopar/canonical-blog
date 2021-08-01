import { Component, OnInit, Input } from '@angular/core';

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
    this.findPostCategoryAndType(this.post);
  }

  /**
   * To match post category and post type from JSON
   *
   * @param post
   * @return void
   */
  findPostCategoryAndType(post: any) {
    post._embedded['wp:term'].map((wpTerm: any) => {
      if (post.topic[0]) {
        if (wpTerm[0]?.id == post.topic[0]) {
          this.postCategory = wpTerm[0].name;
          return;
        }
      } 
      else {
        if (wpTerm[0]?.id == post.tags[0]) {
          this.postCategory = wpTerm[0].name;
          return;
        }
      }
      if (post.categories[0]) {
        if (wpTerm[0]?.id == post.categories[0]) {
          this.postType = wpTerm[0].name;
          return;
        }
      }
    });
  }
}
