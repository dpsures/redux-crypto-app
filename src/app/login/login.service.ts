import { User } from './../shared/model/user-info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {

    constructor(private http : HttpClient) { }
    
    getUser() : Observable<User>{
        return this.http.get<User>('assets/user/user-info.json');
    }
}