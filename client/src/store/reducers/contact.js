import {SUBMIT_CONTACT_FORM, ERROR_CONTACT_FORM, REQUEST_CONTACT_FORM,} from '../actions/types';

const initialState = {
    isSubmitting: false,
    error: null,
    success: false,
};

export function contact(state = initialState, action) {
    switch (action.type) {

        case ERROR_CONTACT_FORM:
            return {
                ...state,
                isSubmitting: false,
                error: action.error
            };
        case REQUEST_CONTACT_FORM:
            return {
                ...state,
                isSubmitting: true,
                error: null,
            };

        case SUBMIT_CONTACT_FORM:
            return {
                ...state,
                data: action.payload.data,
                isSubmitting: false,
                error: null,
                success: true
            };

        default:
            return state;
    }
}