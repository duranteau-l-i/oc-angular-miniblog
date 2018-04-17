import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostsService {
  postsSubject = new Subject<any[]>();

  private posts: Array<Post> = [
    new Post(
      'Mon premier post',
      'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.'
    ),
    new Post(
      'Mon Deuxième post',
      'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.'
    ),
    new Post(
      'Encore un post',
      'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.'
    ),
  ];

  constructor() {}

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const post = new Post(title, content);
    this.posts.push(post);
    this.emitPostsSubject();
  }

  deletePost(id) {
    this.posts.splice(id, 1);
    this.emitPostsSubject();
  }

  loveIt(id) {
    this.posts[id].loveIts++;
  }

  dontLoveIt(id) {
    this.posts[id].loveIts--;
  }
}
