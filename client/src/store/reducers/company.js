import {INVALIDATE_COMPANY, ERROR_COMPANY, REQUEST_COMPANY, RECEIVE_COMPANY} from "../actions/types";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    error: null,
    data: {}
};

export function company(state = initialState, action) {
    switch (action.type) {
        case INVALIDATE_COMPANY:
            return {
                ...state,
                didInvalidate: true
            };

        case ERROR_COMPANY:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case REQUEST_COMPANY:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            };

        case RECEIVE_COMPANY:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                data: action.payload.data,
                lng: action.payload.lng,
                lastUpdated: action.payload.lastUpdated,
                error: null
            };


        default:
            return state;
    }
}

