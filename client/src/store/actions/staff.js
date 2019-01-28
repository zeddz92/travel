import * as actionTypes from './types';
import {shouldFetch, isDataStale} from './helpers';
import i18next from 'i18next';

function requestStaff() {
    return {
        type: actionTypes.REQUEST_STAFF,
        error: false
    }
}

function receiveStaff(res) {
    return {
        type: actionTypes.RECEIVE_STAFF,
        payload: {
            data: res.data,
            lng: i18next.language
        },
        error: false
    }
}

function errorStaff(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_STAFF,
        error: {message: error.message, code: response.status}
    }
}

function invalidateStaff() {
    return {
        type: actionTypes.INVALIDATE_STAFF
    }
}

const fetchStaff = () => (dispatch, getState, api) => {
    dispatch(requestStaff());

    return api.get('/staff')
        .then(
            response => dispatch(receiveStaff(response)),
            error => dispatch(errorStaff(error))
        );
};


export const fetchStaffIfNeeded = () => (dispatch, getState) => {
    const staff = getState().staff;

    if(isDataStale(staff)) {
        dispatch(invalidateStaff())
    }

    if (shouldFetch(staff)) {
        return dispatch(fetchStaff())
    }

    return Promise.resolve();
};


