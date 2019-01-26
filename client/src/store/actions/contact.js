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
            data: res.data,
            lastUpdated: Date.now()
        },
        error: null
    }
}

function errorContact(error) {
    return {
        type: actionTypes.ERROR_CONTACT_FORM,
        error: {message: error.message, code: error.status}
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