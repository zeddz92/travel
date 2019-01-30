import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/index';
import {axiosInstance} from '../utils/axiosInstance';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['error', 'form', 'contact', 'posts', 'lastAction','service', 'jobs']
};

const rootReducer = (state, action) => {
    return reducer(state, action)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
);

export default (state = {}) => {
    let store = createStore(persistedReducer, state, middlewares);

    let persistor = persistStore(store);
    return {store, persistor}
}