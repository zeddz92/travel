import moxios from 'moxios';

import {axiosInstance} from '../../utils/axiosInstance';
import {storeFactory} from '../../utils/testUtils';
import {company} from '../../utils/mockData/company';
import {fetchCompanyIfNeeded} from './company';
import * as actionTypes from "./types";
import i18n from "../../locale/i18n";


describe('company action creator', () => {
    beforeEach(() => moxios.install(axiosInstance));
    afterEach(() => moxios.uninstall(axiosInstance));

    test('it dispatches RECEIVE_COMPANY on fetch company', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: company
            })
        });

        const expectedAction = {
            type: actionTypes.RECEIVE_COMPANY,
            payload: {
                data: company,
                lng: i18n.language,
            },
            error: false
        };

        return store.dispatch(fetchCompanyIfNeeded()).then(() => {
            const newState = store.getState().company;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);
            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeFalsy();
            expect(newState.data).toBe(company);
        })
    });


    test('it dispatches ERROR_COMPANY on request failed', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500
            })
        });

        const expectedAction = {
            type: actionTypes.ERROR_COMPANY,
            error: {message: 'Request failed with status code 500', code: 500}
        };

        return store.dispatch(fetchCompanyIfNeeded()).then(() => {
            const newState = store.getState().company;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);
            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeTruthy();
            expect(newState.error.code).toBe(500);
        })
    });

    test('does not dispatch RECEIVE_COMPANY if data is still fresh', () => {
        const lastUpdated = Date.now();

        const initialState = {
            company: {
                isFetching: false,
                didInvalidate: false,
                error: null,
                lng: i18n.language,
                data: company,
                lastUpdated
            }
        };

        const store = storeFactory(initialState);

        return store.dispatch(fetchCompanyIfNeeded()).then(() => {
            const newState = store.getState().company;
            const action = store.getState().lastAction;

            expect(action.type).not.toBe(actionTypes.RECEIVE_COMPANY);
            expect(newState.lastUpdated).toBe(lastUpdated);
        })
    });
});