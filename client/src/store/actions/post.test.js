import moxios from 'moxios';

import i18n from "../../locale/i18nTestsConfig";
import {axiosInstance} from '../../utils/axiosInstance';
import {storeFactory} from '../../utils/testUtils';
import {posts} from '../../utils/mockData/posts';
import {fetchPostBy} from './post';
import * as actionTypes from './types';

describe('post action creator', () => {
    beforeEach(() => moxios.install(axiosInstance));
    afterEach(() => moxios.uninstall(axiosInstance));

    test('it dispatches RECEIVE_POSTS on fetch posts', () => {
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: posts
            })
        });

        const expectedAction = {
            type: actionTypes.RECEIVE_POSTS,
            payload: {
                ...posts,
                lng: i18n.languages[0],
            },
            error: false
        };

        const category = null;

        return store.dispatch(fetchPostBy(category)).then(() => {
            const newState = store.getState().posts;
            const action = store.getState().lastAction;

            expect(action).toEqual(expectedAction);

            expect(newState.isFetching).toBe(false);
            expect(newState.error).toBeFalsy();
            expect(newState.items.length).toBe(posts.data.length);
        })

    });

});