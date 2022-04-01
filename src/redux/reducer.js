import {
    INCREMENT,
    DECREMENT,
    ZERO
} from './types';


const initialState = {
    count : 0,
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            }
        case ZERO:
        return{
            ...state,
            count: 0,
        }
        default:
            return state;
    }
}