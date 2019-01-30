import * as actionTypes from '../actions/types';

const initialState = {
    isFetching: false,
    error: null,
    data: {
        name: "",
        description: "",
        medias:[]
    }
};

export function service(state = initialState, action) {
    switch (action.type) {

        case actionTypes.ERROR_SERVICE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case actionTypes.REQUEST_SERVICE:
            return {
                ...state,
                isFetching: true,
            };

        case actionTypes.RECEIVE_SERVICE:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                lng: action.payload.lng,
                error: null
            };

        default:
            return state;
    }
}
