import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
})
export class PostListItemComponent implements OnInit {
  @Input() index: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  onLove(id) {
    this.postsService.loveIt(id);
  }

  onDontLove(id) {
    this.postsService.dontLoveIt(id);
  }

  onDelete(id) {
    this.postsService.deletePost(id);
  }
}
