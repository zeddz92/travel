import i18next from 'i18next';

import * as actionTypes from './types';

function requestContact() {
    return {
        type: actionTypes.REQUEST_CONTACT_FORM,
        error: null
    }
}

function receiveResponse(res) {
    return {
        type: actionTypes.SUBMIT_CONTACT_FORM,
        payload: {
            data: res.data
        },
        error: null
    }
}

function errorContact(error) {
    const response = error.response ? error.response : {};
    return {
        type: actionTypes.ERROR_CONTACT_FORM,
        error: {message: error.message, code: response.status}
    }
}

export const submitForm = (form) => (dispatch, getState, api) => {
    dispatch(requestContact());

    return api.post('/contact', form)
        .then(
            response => dispatch(receiveResponse(response)),
            error => dispatch(errorContact(error))
        );
};