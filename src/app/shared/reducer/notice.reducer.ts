import { Notice } from './../interface/notices';
import * as NoticeAction from "./notice.action";

export type Action = NoticeAction.All;

const defaultNotice : Notice = {
    id : 0,
    message : "Welcome Message!",
    icon : "directions_run"
}

const noticeState = (state, newData, type) => {
    
}

export function noticeReducer(state : Notice = defaultNotice, action : Action){
    console.log('notices actions ---->'+action.type, state);
}