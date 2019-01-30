import * as actionTypes from '../actions/types';

const initialState = {
    isFetching: false,
    error: null,
    items: []
};

export function jobs(state = initialState, action) {
    switch (action.type) {

        case actionTypes.ERROR_JOBS:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case actionTypes.REQUEST_JOBS:
            return {
                ...state,
                isFetching: true,
            };

        case actionTypes.RECEIVE_JOBS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.items,
                lng: action.payload.lng,
                error: null
            };
        default:
            return state;
    }
}
