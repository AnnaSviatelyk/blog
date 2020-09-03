import { createStore, applyMiddleware, compose } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { State } from '../interfaces';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
const initialState = {
    items: [],
    error: null,
};
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const makeStore = (context) => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore, { debug: true });
