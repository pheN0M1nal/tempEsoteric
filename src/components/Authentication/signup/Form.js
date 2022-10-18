import { Button } from '../../Global/Button'
import { SizedBox } from '../../Global/SizedBox'
import { AuthButtonContainer } from '../components/AuthButtonContainer'
import { InputComponent } from '../components/InputELement'
import { FormComponent } from '../components/FormElement'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImagePickerComponent } from '../../Global/ProfilePicturePickerComponent'
import { Spinner } from '../../Global/Spinner'
import { notifyFailure } from '../../../helpers/notifications/notifyFailure'
import { HandleOnChangeInput } from '../../../helpers/formInput/HandleOnChangeInput'
import axiosInstance from '../../../config/api/axois'
import { notifyApiErrorMessage } from '../../../helpers/notifications/notifyApiErrorMessage'
import axiosServerInstance from '../../../config/api/axois'
import { userSignup } from '../../../api/EndPoints'
import { notifySuccess } from '../../../helpers/notifications/notifySuccess'
// import { FormFooterPrompt } from "../components/FormFooterPrompt";

export const RegistrationForm = ({ showLogin }) => {
	const [profilePicture, setProfilePicture] = useState(null)
	const [showSpinner, setShowSpinner] = useState(false)
	const navigate = useNavigate()
	const [data, setData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		contact_number: '',
		username: '',
		password: '',
		confirm_password: '',
		// logo: ""
	})

	useEffect(() => {
		if (profilePicture) {
			if (typeof profilePicture !== 'string') {
				let tempdata = { ...data }
				tempdata['logo'] = profilePicture
				setData(tempdata)
			}
		}
	}, [profilePicture])

	const validateFields = () => {
		let state = true
		let fields = [
			'fullname',
			'email',
			'business_name',
			'phone',
			'username',
			'password',
			'confirm_password',
		]
		for (let field of fields) {
			if (!data[field]) {
				notifyFailure(`${field} is required`)
				state = false
			}
		}
		if (data.password !== data.confirm_password) {
			notifyFailure(`Your passwords doesn't match`)
			state = false
		}
		return state
	}

	const handleOnClickButton = async e => {
		e.preventDefault()
		if (!validateFields()) {
			return
		}

		console.log('data', data)

		// console.log(data, "data");
		// setShowSpinner(true);
		// axiosInstance()
		//     .post(`admin_signup`, data)
		//     .then((response) => {
		//         console.log(response, "response signup user");
		//         navigate("/login", { replace: true });
		//         window.location.reload();
		//         setShowSpinner(false);
		//     })
		//     .catch((err) => {
		//         setShowSpinner(false);
		//         notifyApiErrorMessage(err);
		//     });
	}

	const handleUserSignup = async e => {
		e.preventDefault()
		console.log('data', data)
		if (!validateFields()) {
			return
		}
		setShowSpinner(true)
		let modData = { ...data }
		delete modData.confirm_password
		// console.log(modData)
		axiosServerInstance()
			.post(userSignup(), modData)
			.then(response => {
				const user = response.data
				if (user.is_loggedIn) {
					navigate(`/`, { replace: true })
				}

				window.localStorage.setItem(
					'access_token',
					'faidfiaifeiiiooi232f'
				) // Test
				// const { refresh, access } = response.data;
				// window.localStorage.setItem("access_token", access);
				// window.localStorage.setItem("refresh_token", refresh);
				notifySuccess('Registered successfully')
				setShowSpinner(false)
			})
			.catch(err => {
				console.log(err)
				setShowSpinner(false)
			})
	}

	const handleOnClickLogin = () => {
		showLogin()
	}

	return (
		<FormComponent>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'First Name'}
					type='text'
					height={2.5}
					value={data.firstname}
					onChange={e =>
						HandleOnChangeInput(e, 'firstname', setData, data)
					}
				/>
			</div>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'Last Name'}
					type='text'
					height={2.5}
					value={data.lastname}
					onChange={e =>
						HandleOnChangeInput(e, 'lastname', setData, data)
					}
				/>
			</div>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'Username'}
					type='text'
					height={2.5}
					value={data.username}
					onChange={e =>
						HandleOnChangeInput(e, 'username', setData, data)
					}
				/>
			</div>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'password'}
					type='password'
					height={2.5}
					value={data.password}
					onChange={e =>
						HandleOnChangeInput(e, 'password', setData, data)
					}
				/>
			</div>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'Confirm Password'}
					type='password'
					height={2.5}
					value={data.confirm_password}
					onChange={e =>
						HandleOnChangeInput(
							e,
							'confirm_password',
							setData,
							data
						)
					}
				/>
			</div>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'Email'}
					type='email'
					height={2.5}
					value={data.email}
					onChange={e =>
						HandleOnChangeInput(e, 'email', setData, data)
					}
				/>
			</div>
			<div className='inputOuter'>
				<InputComponent
					placeholder={'contact_number'}
					type='text'
					height={2.5}
					value={data.contact_number}
					onChange={e =>
						HandleOnChangeInput(
							e,
							'contact_number',
							setData,
							data
						)
					}
				/>
			</div>
			<div className='inputOuter'>
				<div className='profilePicturePickerWrapper'>
					<ImagePickerComponent
						image={profilePicture}
						setImage={setProfilePicture}
						btnText='Choose file'
					/>
					<SizedBox height={3} />
				</div>
			</div>
			<div className='FormFooterOption'>
				<AuthButtonContainer>
					{!showSpinner ? (
						<div className='formfooter'>
							<div className='formfooterinner'>
								<Button
									textTransform={'uppercase'}
									fontSize={16}
									maxWidth={200}
									border={'transparent'}
									height={41}
									onClick={handleUserSignup}
								>
									Sign Up
								</Button>
							</div>
							<div className='registerBtn'>
								<p>Already have an account?</p>
								<Button
									textTransform={'uppercase'}
									fontSize={16}
									maxWidth={200}
									height={41}
									BgColor={'transparent'}
									border={'border-color'}
									onClick={handleOnClickLogin}
								>
									Login
								</Button>
							</div>
						</div>
					) : (
						<Spinner size={1.5} />
					)}
				</AuthButtonContainer>
			</div>
		</FormComponent>
	)
}
