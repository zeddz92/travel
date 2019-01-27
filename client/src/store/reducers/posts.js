import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    ERROR_POSTS,
} from '../actions/types';

const initialState = {
    isFetching: false,
    error: null,
    items: []
};

export function posts(state = initialState, action) {
    switch (action.type) {

        case ERROR_POSTS:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
            };

        case RECEIVE_POSTS:
            return {
                ...state,
                items: action.payload.data,
                currentPage: action.payload.currentPage,
                perPage: action.payload.perPage,
                total: action.payload.total,
                isFetching: false,
            };

        default:
            return state;
    }
}
