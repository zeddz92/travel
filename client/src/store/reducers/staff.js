import {RECEIVE_STAFF, INVALIDATE_STAFF, REQUEST_STAFF, ERROR_STAFF} from '../actions/types';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: 0,
    error: null,
    items: [],
};

export function staff(state = initialState, action) {
    switch (action.type) {

        case INVALIDATE_STAFF:
            return {
                ...state,
                didInvalidate: true
            };

        case ERROR_STAFF:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case REQUEST_STAFF:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            };

        case RECEIVE_STAFF:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.payload.data,
                lng: action.payload.lng,
                lastUpdated: Date.now(),
                error: null
            };

        default:
            return state;
    }
}
