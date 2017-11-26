import { Observable } from 'rxjs/Observable';
import { User } from './../model/user-info';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import * as CryptoJS from 'crypto-js';

@Injectable()
export class UserInfoService {

    public userSource = new BehaviorSubject<User>(new User());

    constructor() { }

    setUser(user: User) {
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(user), '');
        localStorage.setItem('USER_SESSION', ciphertext.toString());
        this.userSource.next(user);
    }

    getUser(): Observable<User> {
        return this.userSource.asObservable();
    }
}