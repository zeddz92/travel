import {createStore} from 'redux';

import reducer from '../store/reducers';
import {middlewares} from '../store/configureStore';

export const storeFactory = (initialState = {}) => {
    return createStore(reducer, initialState, middlewares);
};