import * as actionTypes from './types';

import {shouldFetch, isDataStale} from './helpers';

function requestCategories() {
    return {
        type: actionTypes.REQUEST_CATEGORIES,
        error: false
    }
}

function receiveCategories(res) {
    return {
        type: actionTypes.RECEIVE_CATEGORIES,
        payload: {
            data: res.data,
            lastUpdated: Date.now()
        },
        error: false
    }
}

function errorCategories(error) {
    return {
        type: actionTypes.ERROR_CATEGORIES,
        error: {message: error.message, code: error.status}
    }
}

function invalidateCategory() {
    return {
        type: actionTypes.INVALIDATE_CATEGORIES
    }
}

const fetchCategory = () => (dispatch, getState, api) => {
    dispatch(requestCategories());

    return api.get('/categories')
        .then(
            response => dispatch(receiveCategories(response)),
            error => dispatch(errorCategories(error))
        );
};


export const fetchCategoriesIfNeeded = () => (dispatch, getState) => {
    const category = getState().categories;

    if(isDataStale(category)) {
        dispatch(invalidateCategory())
    }

    if (shouldFetch(category)) {
        return dispatch(fetchCategory())
    }

    return Promise.resolve();
};
