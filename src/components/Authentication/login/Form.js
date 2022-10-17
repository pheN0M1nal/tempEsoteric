import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../Global/Button'
import { SizedBox } from '../../Global/SizedBox'
import { AuthButtonContainer } from '../components/AuthButtonContainer'
import { FormComponent } from '../components/FormElement'
import { InputComponent } from '../components/InputELement'
import { ModalComponent } from '../../Global/Modal'
import ForgotPasswordContainer from '../forgot_password/Container'
import { Spinner } from '../../Global/Spinner'
import styled from 'styled-components'
import { notifyFailure } from '../../../helpers/notifications/notifyFailure'
import { HandleOnChangeInput } from '../../../helpers/formInput/HandleOnChangeInput'
import { notifySuccess } from '../../../helpers/notifications/notifySuccess'
import { GlobalUserProfileContext } from '../../../App'
import axiosServerInstance from '../../../config/api/axois'
import { userLogin } from '../../../api/EndPoints'

const Wrapper = styled.div`
	input {
		@media (max-width: 1100px) {
			max-width: 100%;
			margin: 0.5rem auto;
		}
	}
	.formfooter {
		@media (max-width: 600px) {
			align-items: center;
			flex-direction: column;
			.formfooterinner {
				align-items: center;
				border: 0px;
				margin-right: 0;
				margin-bottom: 1rem;
			}
			.registerBtn {
				display: flex;
				align-items: center;
				flex-direction: column;
			}
		}
	}
`
export const LoginForm = ({ showRegister }) => {
	const [data, setData] = useState({
		email: '',
		password: '',
	})
	const [showSpinner, setShowSpinner] = useState(false)
	const [forgotPasswordModal, setForgotPasswordModal] = useState(false)
	const { profile, setProfile } = useContext(GlobalUserProfileContext)

	const navigate = useNavigate()
	const validateFields = () => {
		let state = true
		const fields = ['email', 'password']
		for (let field of fields) {
			if (!data[field]) {
				notifyFailure(`${field} is required`)
				state = false
			}
		}
		return state
	}

	const handleUserLogin = async e => {
		e.preventDefault()
		if (!validateFields()) {
			return
		}
		// console.log('DATA ', data);
		setShowSpinner(true)
		axiosServerInstance()
			.post(userLogin(), data)
			.then(response => {
				console.log('Response data ', response)
				const user = response.data
				setProfile(user)
				// console.log(profile, 'usercontext')
				if (user.is_loggedIn) {
					notifySuccess('Logged in Successfully')
					navigate(`/`, { replace: true })
				}

				window.localStorage.setItem(
					'access_token',
					'faidfiaifeiiiooi232f'
				) // Test
				// const { refresh, access } = response.data;
				// window.localStorage.setItem("access_token", access);
				// window.localStorage.setItem("refresh_token", refresh);
				// navigate(`/`, { replace: true });
				setShowSpinner(false)
			})
			.catch(err => {
				notifyFailure(err)
				console.log(err.message)
				setShowSpinner(false)
			})
	}

	const handleOnClickForgotPassword = () => {
		setForgotPasswordModal(true)
	}
	const handleOnClickSignUp = e => {
		e.preventDefault()
		showRegister()
	}
	return (
		<Wrapper>
			<FormComponent>
				<InputComponent
					placeholder={'Email'}
					type='email'
					value={data.email}
					onChange={e =>
						HandleOnChangeInput(e, 'email', setData, data)
					}
				/>
				<InputComponent
					placeholder={'Password'}
					type='password'
					value={data.password}
					onChange={e =>
						HandleOnChangeInput(e, 'password', setData, data)
					}
				/>
				<SizedBox height={1.5} />
				<AuthButtonContainer>
					{!showSpinner ? (
						<div className='formfooter'>
							<div className='formfooterinner'>
								<p>
									Forgot Password?
									<strong
										onClick={
											handleOnClickForgotPassword
										}
									>
										&nbsp; Click Here
									</strong>
								</p>

								<SizedBox height={1.0} />
								<Button
									textTransform={'uppercase'}
									fontSize={16}
									maxWidth={200}
									border={'transparent'}
									height={41}
									onClick={handleUserLogin}
								>
									Login
								</Button>
							</div>
							<div className='registerBtn'>
								<p>Don't have an account? </p>
								<Button
									textTransform={'uppercase'}
									fontSize={16}
									maxWidth={200}
									height={41}
									BgColor={'transparent'}
									border={'border-color'}
									onClick={handleOnClickSignUp}
								>
									Sign up
								</Button>
							</div>
						</div>
					) : (
						<Spinner size={1.5} />
					)}
					<ModalComponent
						modalLabel={'Edit SubUser'}
						isOpen={forgotPasswordModal}
						callbackCloseModal={() => {
							setForgotPasswordModal(false)
						}}
					>
						<ForgotPasswordContainer />
					</ModalComponent>
				</AuthButtonContainer>
			</FormComponent>
		</Wrapper>
	)
}
