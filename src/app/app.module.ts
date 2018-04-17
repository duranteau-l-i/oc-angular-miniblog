import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './post-list/new-post/new-post.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
  },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
