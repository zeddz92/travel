import moxios from 'moxios';

import i18n from '../../locale/i18n';
import {axiosInstance} from '../../utils/axiosInstance';
import {storeFactory} from '../../utils/testUtils';
import {staff} from '../../utils/mockData/staff';
import {fetchStaffIfNeeded} from './staff';
import * as actionTypes from './types';


describe('staff action creator', () => {
    beforeEach(() => moxios.install(axiosInstance));
    afterEach(() => moxios.uninstall(axiosInstance));

    test('it dispatches RECEIVE_STAFF on fetch staff', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: staff
            })
        });

        const expectedAction = {
            type: actionTypes.RECEIVE_STAFF,
            payload: {
                data: staff,
                lng: i18n.language,
            },
            error: false
        };

        return store.dispatch(fetchStaffIfNeeded()).then(() => {
            const newState = store.getState().staff;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);

            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeFalsy();
            expect(newState.items.length).toBe(staff.length);
        })
    });


    test('it dispatches ERROR_STAFF on request failed', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500
            })
        });

        const expectedAction = {
            type: actionTypes.ERROR_STAFF,
            error: {message: 'Request failed with status code 500', code: 500}
        };

        return store.dispatch(fetchStaffIfNeeded()).then(() => {
            const newState = store.getState().staff;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);
            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeTruthy();
            expect(newState.error.code).toBe(500);
        })
    });

    test('does not dispatch RECEIVE_STAFF if data is still fresh', () => {

        const lastUpdated = Date.now();

        const initialState = {
            staff: {
                isFetching: false,
                didInvalidate: false,
                error: null,
                lng: i18n.language,
                items: staff,
                lastUpdated
            }
        };

        const store = storeFactory(initialState);

        return store.dispatch(fetchStaffIfNeeded()).then(() => {
            const newState = store.getState().staff;
            const action = store.getState().lastAction;

            expect(action.type).not.toBe(actionTypes.RECEIVE_STAFF);
            expect(newState.lastUpdated).toBe(lastUpdated);
        })
    });
});