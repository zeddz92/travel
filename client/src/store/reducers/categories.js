import {RECEIVE_CATEGORIES, INVALIDATE_CATEGORIES, REQUEST_CATEGORIES, ERROR_CATEGORIES} from '../actions/types';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    error: null,
    items: []
};

export function categories(state = initialState, action) {
    switch (action.type) {

        case INVALIDATE_CATEGORIES:
            return {
                ...state,
                didInvalidate: true
            };

        case ERROR_CATEGORIES:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case REQUEST_CATEGORIES:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            };

        case RECEIVE_CATEGORIES:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.payload.data,
                lng: action.payload.lng,
                lastUpdated: action.payload.lastUpdated,
                error: null
            };

        default:
            return state;
    }
}
