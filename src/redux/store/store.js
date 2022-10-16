import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import cities from '../reducers/citiesReducers.js';
import thunk from 'redux-thunk';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const reducers = combineReducers({
    cities: cities,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
