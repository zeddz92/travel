import i18next from '../../locale/i18n';


import * as actionTypes from './types';

function requestService() {
    return {
        type: actionTypes.REQUEST_SERVICE,
        error: false
    }
}

function receiveService(res) {
    return {
        type: actionTypes.RECEIVE_SERVICE,
        payload: {
            data: res.data,
            lng: i18next.languages[0]
        },
        error: null
    }
}

function errorService(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_SERVICE,
        error: {message: error.message, code: response.status}
    }
}

export const fetchService = (path) => (dispatch, getState, api) => {
    dispatch(requestService(path));

    return api.get(`/services/${path}?lng=${i18next.languages[0]}`)
        .then(
            response => dispatch(receiveService(response)),
            error => dispatch(errorService(error))
        );
};