import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleWares = [
	process.env.NODE_ENV !== 'production' && logger,
	thunk
].filter(Boolean);

const composedEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composeEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
