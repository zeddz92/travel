import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import axios from 'axios';

import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['error', 'form', 'contact', 'posts']
};

const rootReducer = (state, action) => {
    return reducer(state, action)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
});

export default (state = {}) => {
    let store = createStore(persistedReducer, state, composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(axiosInstance)),
    ));

    let persistor = persistStore(store);
    return {store, persistor}
}