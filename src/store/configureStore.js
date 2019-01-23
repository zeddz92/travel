import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/index';
import {api} from '../utils/api';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['error', 'loading', 'search']
};

const rootReducer = (state, action) => {
    return reducer(state, action)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (state = {}) => {
    let store = createStore(persistedReducer, state, composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(api)),
    ));

    let persistor = persistStore(store);
    return {store, persistor}
}