import {
	FETCH_USER_PROFILE_SUCCESS,
	FETCH_USER_PROFILE_FAILED,
	FETCH_USER_PROFILE_START,
	CLEAR_USER_PROFILE,
} from '../constants/userProfileConstants'
import moment from 'moment'

export const userProfileReducer = (
	state = { isFetchingProfile: null, profile: null, lastTimeFetched: null },
	{ type, payload }
) => {
	switch (type) {
		case FETCH_USER_PROFILE_START:
			return {
				...state,
				isFetchingProfile: true,
				profile: state.profile,
			}
		case FETCH_USER_PROFILE_FAILED:
			return {
				...state,
				isFetchingProfile: false,
				profile: state.profile,
			}
		case FETCH_USER_PROFILE_SUCCESS:
			return {
				lastTimeFetched: moment(),
				isFetchingProfile: false,
				profile: payload,
			}
		case CLEAR_USER_PROFILE:
			return {
				lastTimeFetched: null,
				isFetchingProfile: null,
				profile: null,
			}
		default:
			return state
	}
}
