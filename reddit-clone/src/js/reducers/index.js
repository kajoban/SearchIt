import {ADD_DATA} from '../constants/action-types';

const initialState = {
    searchTerm: '',
    data: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_DATA:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export default rootReducer;