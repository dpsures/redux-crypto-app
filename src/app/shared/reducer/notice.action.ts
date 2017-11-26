import { Notice } from './../interface/notices';
import { Action } from "@ngrx/store";

export const ADD_NOTICE = '[Notice] Add Notice';
export const DELETE_NOTICE = '[Notice] Delete Notice';
export const UNREAD_COUNT = '[Notice] Unread Count' ;
export const TOTAL_COUNT = '[Notice] Total Count' ;

export class AddNotice implements Action {
    readonly type = ADD_NOTICE

    constructor(public notice : Notice){}
}

export class DeleteNotice implements Action {
    readonly type = DELETE_NOTICE;

    constructor(public id : number){}
}

export class UnreadNotices implements Action {
        readonly type = UNREAD_COUNT;
}

export class TotalNotices implements Action {
    readonly type = TOTAL_COUNT;
}

export type All = AddNotice | DeleteNotice | UnreadNotices | TotalNotices;