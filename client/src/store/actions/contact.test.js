import moxios from 'moxios';

import {axiosInstance} from '../../utils/axiosInstance';
import {storeFactory} from '../../utils/testUtils';
import {contactForm} from '../../utils/mockData/contactForm';
import {submitForm} from './contact';
import * as actionTypes from "./types";


describe('contact action creator', () => {
    beforeEach(() => moxios.install(axiosInstance));
    afterEach(() => moxios.uninstall(axiosInstance));

    const form = {
        name: "Edd",
        email: "lopezredd@gmail.com",
        message: "Hi there!",
    };

    test('it dispatches SUBMIT_CONTACT_FORM on submit form', () => {
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: contactForm
            })
        });

        const expectedAction = {
            type: actionTypes.SUBMIT_CONTACT_FORM,
            payload: {
                data: contactForm
            },
            error: null
        };

        return store.dispatch(submitForm(form)).then(() => {
            const newState = store.getState().contact;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);
            expect(newState.isSubmitting).toBe(false);
            expect(newState.success).toBe(true);
            expect(newState.error).toEqual(null);
        })

    });

    test('it dispatches ERROR_CONTACT_FORM on request failed', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500
            })
        });

        const expectedAction = {
            type: actionTypes.ERROR_CONTACT_FORM,
            error: {message: 'Request failed with status code 500', code: 500}
        };


        return store.dispatch(submitForm(form)).then(() => {
            const newState = store.getState().contact;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);
            expect(newState.isSubmitting).toBe(false);
            expect(newState.error).toBeTruthy();
            expect(newState.error.code).toBe(500);
        })

    });

});
