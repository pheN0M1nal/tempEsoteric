import { MainWrapper } from '../../Global/MainWrapper'
import { AuthMainContainer } from '../components/AuthMainContainer'
import { LoginForm } from './Form'

const LoginContainer = ({ showRegister }) => {
	return (
		<MainWrapper>
			<AuthMainContainer mode={'login'}>
				<div className='LoginFormOuter'>
					<LoginForm showRegister={showRegister} />
				</div>
			</AuthMainContainer>
		</MainWrapper>
	)
}

export default LoginContainer
