import { ACTION_TYPES } from './types';

const initialState = {
	searchRobotState: {
		searchString: ''
	},
	robotsState: {
		robots: [],
		isLoading: false,
		error: null
	}
};

export const searchRobotsReducer = (
	state = initialState.searchRobotState,
	action = {}
) => {
	switch (action.type) {
		case ACTION_TYPES.CHANGE_SEARCH_FIELD:
			return {
				...state,
				searchString: action.payload
			};

		default:
			return state;
	}
};

export const robotsReducer = (
	state = initialState.robotsState,
	action = {}
) => {
	switch (action.type) {
		case ACTION_TYPES.FETCH_USERS_START:
			return {
				...state,
				isLoading: true
			};
		case ACTION_TYPES.FETCH_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				robots: action.payload
			};
		case ACTION_TYPES.FETCH_USERS_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};
