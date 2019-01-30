import {createStore} from 'redux';

import reducer from '../store/reducers';
import {middlewares} from '../store/configureStore';

// store for action creator tests
export const storeFactory = (initialState = {}) => {
    return createStore(reducer, initialState, middlewares);
};

// store for components tests
export const mockStore = (state = {}) => {
    return  {
        subscribe: () => {},
        dispatch: () => {},
        getState: () => (state)
    };

};

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
};