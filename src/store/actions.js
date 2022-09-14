import axios from 'axios';
import { createAction } from '../utils/reducer.utils';
import { ACTION_TYPES } from './types';

export const setSearchField = text =>
	createAction(ACTION_TYPES.CHANGE_SEARCH_FIELD, text);

export const fetchUsersStart = () =>
	createAction(ACTION_TYPES.FETCH_USERS_START);

export const fetchUsersSuccess = usersArray =>
	createAction(ACTION_TYPES.FETCH_USERS_SUCCESS, usersArray);

export const fetchUsersFailed = error =>
	createAction(ACTION_TYPES.FETCH_USERS_FAILED, error);

export const fetchUsersAsync = () => async dispatch => {
	dispatch(fetchUsersStart());
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		dispatch(fetchUsersSuccess(response.data));
	} catch (error) {
		dispatch(fetchUsersFailed(error.message));
	}
};
