import * as t from '../actions/actionTypes';


export const initialState = {
    data: null,
    isLoading: false,
    error: null
};

export default function(state=initialState, action) {
    switch(action.type) {
        case t.NEWS_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case t.NEWS_GET_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case t.NEWS_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}