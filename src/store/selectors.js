import { createSelector } from 'reselect';

const selectSearchReducer = state => state.search;
const selectRobotReducer = state => state.robots;

export const selectSearchString = createSelector(
	[selectSearchReducer],
	searchSlice => searchSlice.searchString
);

export const selectRobots = createSelector(
	[selectRobotReducer, selectSearchString],
	(robotsSlice, selectSearchString) =>
		robotsSlice.robots.filter(robot =>
			robot.name.toLowerCase().includes(selectSearchString)
		)
);

export const selectIsLoading = createSelector(
	[selectRobotReducer],
	robotsSlice => robotsSlice.isLoading
);

export const selectError = createSelector(
	[selectRobotReducer],
	robotsSlice => robotsSlice.error
);
