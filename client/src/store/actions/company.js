import * as actionTypes from './types';
import {shouldFetch, isDataStale} from './helpers';
import i18next from 'i18next';

function requestCompany() {
    return {
        type: actionTypes.REQUEST_COMPANY,
        error: false
    }
}

function receiveCompany(res) {
    return {
        type: actionTypes.RECEIVE_COMPANY,
        payload: {
            data: res.data,
            lastUpdated: Date.now(),
            lng: i18next.language
        },
        error: false
    }
}

function errorCompany(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_COMPANY,
        error: {message: error.message, code: response.status}
    }
}

function invalidateCompany() {
    return {
        type: actionTypes.INVALIDATE_COMPANY
    }
}

const fetchCompany = () => (dispatch, getState, api) => {
    dispatch(requestCompany());

    return api.get(`/company?lng=${i18next.language}`)
        .then(
            response => dispatch(receiveCompany(response)),
            error => dispatch(errorCompany(error))
        );
};


export const fetchCompanyIfNeeded = () => (dispatch, getState) => {
    const company = getState().company;
    if(isDataStale(company)) {
        dispatch(invalidateCompany())
    }

    if (shouldFetch(company)) {
        return dispatch(fetchCompany())
    }

    return Promise.resolve();
};


