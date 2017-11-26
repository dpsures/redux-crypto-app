import { simpleReducer } from './shared/reducer/simple.reducer';
import { UserInfoService } from './shared/service/user-info.service';
import { LoginService } from './login/login.service';
import { HeaderComponent } from './header/header.component';
import { RootRoutingModule } from './routes/root-route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { postReducer } from "./shared/reducer/post.reducer";
import { noticeReducer } from "./shared/reducer/notice.reducer";


@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    BrowserModule, MaterialModule, RootRoutingModule, HttpClientModule,
    StoreModule.forRoot({post: postReducer ,message : simpleReducer, notice : noticeReducer})
  ],
  providers: [LoginService,UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
