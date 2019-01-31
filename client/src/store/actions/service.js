import i18next from '../../locale/i18n';

import * as actionTypes from './types';
import {shouldFetch, isDataStale} from './helpers';

function requestServices() {
    return {
        type: actionTypes.REQUEST_SERVICES,
        error: false
    }
}

function receiveServices(res) {
    return {
        type: actionTypes.RECEIVE_SERVICES,
        payload: {
            data: res.data,
            lng: i18next.languages[0]
        },
        error: false
    }
}

function errorServices(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_SERVICES,
        error: {message: error.message, code: response.status}
    }
}

function invalidateServices() {
    return {
        type: actionTypes.INVALIDATE_SERVICES
    }
}



const fetchServices = () => (dispatch, getState, api) => {
    dispatch(requestServices());

    return api.get(`/services?lng=${i18next.languages[0]}`)
        .then(
            response => dispatch(receiveServices(response)),
            error => dispatch(errorServices(error))
        );
};


export const fetchServicesIfNeeded = () => (dispatch, getState) => {
    const services = getState().services;
    if(isDataStale(services)) {
        dispatch(invalidateServices())
    }

    if (shouldFetch(services)) {
        return dispatch(fetchServices())
    }

    return Promise.resolve();
};
