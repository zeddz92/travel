import i18next from '../../locale/i18n';

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
            lng: i18next.languages[0]

        },
        error: false
    }
}

function errorCategories(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_CATEGORIES,
        error: {message: error.message, code: response.status}
    }
}

function invalidateCategory() {
    return {
        type: actionTypes.INVALIDATE_CATEGORIES
    }
}

const fetchCategories = () => (dispatch, getState, api) => {
    dispatch(requestCategories());

    return api.get(`/categories?lng=${i18next.languages[0]}`)
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
