import { Action } from "@ngrx/store";

export function simpleReducer(state : string = "Hello World!", action : Action){
    console.log('simplereducer ---->'+action.type, state);

    switch(action.type){
        case 'SPANISH':
            return state = 'spanish language'

        case 'FRENCH':
            return state = 'french language'

        default:
            return state
    }
}