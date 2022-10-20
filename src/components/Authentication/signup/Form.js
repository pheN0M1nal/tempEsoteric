import { Button } from '../../Global/Button'
import { SizedBox } from '../../Global/SizedBox'
import { AuthButtonContainer } from '../components/AuthButtonContainer'
import { InputComponent } from '../components/InputELement'
import { FormComponent } from '../components/FormElement'
import { useEffect, useState } from 'react'
import { ImagePickerComponent } from '../../Global/ProfilePicturePickerComponent'
import { Spinner } from '../../Global/Spinner'
import { notifyFailure } from '../../../helpers/notifications/notifyFailure'
import { HandleOnChangeInput } from '../../../helpers/formInput/HandleOnChangeInput'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../store/actions/userActions'

export const RegistrationForm = ({ showLogin }) => {
	// initializing
	const [profilePicture, setProfilePicture] = useState(null)
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
	const dispatch = useDispatch()

	// checking if user exist
	const userInfo = useSelector(state => state.userProfile)
	const { loading, profile, error } = userInfo

	// checking if user updated
	const userUpdate = useSelector(state => state.userUpdate)
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate

	// notifying if error from reducer state
	error && notifyFailure(error)

	useEffect(() => {
		if (profilePicture) {
			if (typeof profilePicture !== 'string') {
				let tempdata = { ...data }
				tempdata['logo'] = profilePicture
				setData(tempdata)
			}
		}
	}, [profilePicture])

	// validating fields
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

	// handling sign up button
	const handleUserSignup = async e => {
		e.preventDefault()
		console.log('data', data)
		if (!validateFields()) {
			return
		}
		let modData = { ...data }
		delete modData.confirm_password
		// console.log(modData)
		dispatch(register(modData))
	}

	const handleOnClickLogin = () => {
		showLogin()
	}

	return (
		<>
			<FormComponent>
				<div className='inputOuter'>
					<InputComponent
						placeholder={'First Name'}
						type='text'
						height={2.5}
						value={data.firstname}
						onChange={e =>
							HandleOnChangeInput(
								e,
								'firstname',
								setData,
								data
							)
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
							HandleOnChangeInput(
								e,
								'lastname',
								setData,
								data
							)
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
							HandleOnChangeInput(
								e,
								'username',
								setData,
								data
							)
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
							HandleOnChangeInput(
								e,
								'password',
								setData,
								data
							)
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
							HandleOnChangeInput(
								e,
								'email',
								setData,
								data
							)
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
						{!loading ? (
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
										Update Profile
									</Button>
								</div>
							</div>
						) : (
							<Spinner size={1.5} />
						)}
					</AuthButtonContainer>
				</div>
			</FormComponent>
		</>
	)
}
