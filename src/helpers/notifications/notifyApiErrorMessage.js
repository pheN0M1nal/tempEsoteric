import {
	getExternalAPIErrorMessage,
	getServerAPIErrorMessage,
} from '../api/readAPIMessage'
import {
	ERROR_MODE_CUSTOM,
	ERROR_MODE_EXTERNAL,
	ERROR_MODE_SERVER,
} from '../../store/constants/errorConstant'
import { notifyToast } from './index'

export const notifyApiErrorMessage = (
	error,
	mode = ERROR_MODE_SERVER,
	duration
) => {
	let message
	if (mode === ERROR_MODE_SERVER) {
		message = getServerAPIErrorMessage(error)
	} else if (mode === ERROR_MODE_EXTERNAL) {
		message = getExternalAPIErrorMessage(error)
	} else if (mode === ERROR_MODE_CUSTOM) {
		message = error
	}
	notifyToast({
		content: message,
		type: 'error',
		duration,
	})
}
