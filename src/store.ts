import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

// Import reducers

const history = createBrowserHistory();

// Combine reducers to root reducer
const rootReducer = combineReducers({
  router: connectRouter(history),
  form,
});

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(routerMiddleware(history), thunk),
        // @ts-ignore
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
);

export default store;
