import i18next from 'i18next';

import * as actionTypes from './types';

function requestJobs() {
    return {
        type: actionTypes.REQUEST_JOBS,
        error: false
    }
}

function receiveJobs(res) {
    return {
        type: actionTypes.RECEIVE_JOBS,
        payload: {
            items: res.data,
            lng: i18next.language
        },
        error: null
    }
}

function errorJobs(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_JOBS,
        error: {message: error.message, code: response.status}
    }
}

export const fetchJobs = () => (dispatch, getState, api) => {
    dispatch(requestJobs());

    return api.get(`/jobs?lng=${i18next.language}`)
        .then(
            response => dispatch(receiveJobs(response)),
            error => dispatch(errorJobs(error))
        );
};