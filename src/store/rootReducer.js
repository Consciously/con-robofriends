import { combineReducers } from 'redux';

import { searchRobotsReducer, robotsReducer } from './reducers';

export const rootReducer = combineReducers({
	search: searchRobotsReducer,
	robots: robotsReducer
});
