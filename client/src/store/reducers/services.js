import * as actionTypes from "../actions/types";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: 0,
    error: null,
    items: []
};

export function services(state = initialState, action) {
    switch (action.type) {

        case actionTypes.INVALIDATE_SERVICES:
            return {
                ...state,
                didInvalidate: true
            };

        case actionTypes.ERROR_SERVICES:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case actionTypes.REQUEST_SERVICES:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            };

        case actionTypes.RECEIVE_SERVICES:
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
