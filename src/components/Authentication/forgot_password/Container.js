import { ForgotPasswordForm } from './Form'

const ForgotPasswordContainer = ({ showLogin }) => {
	console.log(showLogin, 'sl')
	return <ForgotPasswordForm showLogin={showLogin} />
}
export default ForgotPasswordContainer
