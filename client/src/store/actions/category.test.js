import moxios from 'moxios';

import i18n from '../../locale/i18n';
import {axiosInstance} from '../../utils/axiosInstance';
import {storeFactory} from '../../utils/testUtils';
import {categories} from '../../utils/mockData/categories';
import {fetchCategoriesIfNeeded} from './category';
import * as actionTypes from './types';


describe('category action creator', () => {
    beforeEach(() => moxios.install(axiosInstance));
    afterEach(() => moxios.uninstall(axiosInstance));

    test('it dispatches RECEIVE_CATEGORIES on fetch categories', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: categories
            })
        });

        const expectedAction = {
            type: actionTypes.RECEIVE_CATEGORIES,
            payload: {
                data: categories,
                lng: i18n.language,
            },
            error: false
        };

        return store.dispatch(fetchCategoriesIfNeeded()).then(() => {
            const newState = store.getState().categories;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);

            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeFalsy();
            expect(newState.items.length).toBe(categories.length);
        })
    });


    test('it dispatches ERROR_CATEGORIES on request failed', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500
            })
        });

        const expectedAction = {
            type: actionTypes.ERROR_CATEGORIES,
            error: {message: 'Request failed with status code 500', code: 500}
        };

        return store.dispatch(fetchCategoriesIfNeeded()).then(() => {
            const newState = store.getState().categories;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);
            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeTruthy();
            expect(newState.error.code).toBe(500);
        })
    });

    test('does not dispatch RECEIVE_CATEGORIES if data is still fresh', () => {

        const lastUpdated = Date.now();

        const initialState = {
            categories: {
                isFetching: false,
                didInvalidate: false,
                error: null,
                lng: i18n.language,
                items: categories,
                lastUpdated
            }
        };

        const store = storeFactory(initialState);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: categories
            })
        });

        return store.dispatch(fetchCategoriesIfNeeded()).then(() => {
            const newState = store.getState().categories;
            const action = store.getState().lastAction;

            expect(action.type).not.toBe(actionTypes.RECEIVE_CATEGORIES);
            expect(newState.lastUpdated).toBe(lastUpdated);
        })
    });
});