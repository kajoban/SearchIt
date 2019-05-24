import {ADD_DATA} from '../constants/action-types';

export function addData(payload){
    return {
        type: ADD_DATA,
        data: payload
    }
}