import {ADD_DATA} from '../constants/action-types';

const initialState = {
    data: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DATA:
            return {
                data: action.data
            }
        default:
            return state
    }
}

export default rootReducer;