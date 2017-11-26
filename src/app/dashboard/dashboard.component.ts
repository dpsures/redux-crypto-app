import { Post } from './../shared/interface/post';
import { LangState } from './../shared/interface/lang-state';
import { User } from './../shared/model/user-info';
import { UserInfoService } from './../shared/service/user-info.service';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as PostActions from "../shared/reducer/post.action";

interface PostState {
  post : Post
}

@Component({
  selector: 'tech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  message$ : Observable<string>;

  post$ : Observable<Post>;

  constructor(private userService: UserInfoService,private store : Store<LangState>,
  private postStore : Store<PostState>) {
    this.message$ = this.store.select('message');

    this.post$ = this.postStore.select('post');
   }

  ngOnInit() {
    this.showUser();
  }

  showUser() {
    this.userService.getUser()
      .subscribe(user => {
        this.user = user;
      });

    if (JSON.stringify(this.user) == JSON.stringify({})) {
      const presistUser = localStorage.getItem('USER_SESSION');
      // Decrypt
      var bytes = CryptoJS.AES.decrypt(presistUser, '');
      var deUser = bytes.toString(CryptoJS.enc.Utf8);
      console.log('presistUser ---->' + deUser);
      let user: User = JSON.parse(deUser);
      this.userService.setUser(user);
    }
  }


  spanishMessage(){
    this.store.dispatch({type : 'SPANISH'});
  }

  frenchMessage(){
    this.store.dispatch({type : 'FRENCH'});
  }

  editText(){
    this.postStore.dispatch(new PostActions.EditText("new name lokesh"));
  }

  upVote(){
    this.postStore.dispatch(new PostActions.Upvote());
  }

  downVote(){
    this.postStore.dispatch(new PostActions.Downvote());
  }

  reset(){
    this.postStore.dispatch(new PostActions.Reset());
  }
}
 