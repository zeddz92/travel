import i18next from 'i18next';

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
            lastUpdated: Date.now(),
            lng: i18next.language
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

const fetchCategories = () => (dispatch, getState, api) => {
    dispatch(requestCategories());

    return api.get(`/categories?lng=${i18next.language}`)
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
        return dispatch(fetchCategories())
    }

    return Promise.resolve();
};
