import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalComponent } from '../Global/Modal'
import { hideLoginModal } from '../../store/actions/modalActions'
import { useDispatch } from 'react-redux'
import LoginContainer from '../Authentication/login/Container'
import ForgotPasswordContainer from '../Authentication/forgot_password/Container'
import RegisterContainer from '../Authentication/signup/Container'

const Login = () => {
	const [showLoginComp, setShowLoginComp] = useState(true)
	const [showRegisterComp, setShowRegisterComp] = useState(false)
	const [showForgetPassComp, setShowForgetPassComp] = useState(false)

	const dispatch = useDispatch()

	const loginModal = useSelector(state => state.loginModal)
	const { show } = loginModal
	const customStyles = {
		content: {
			//  top: "50%",
			//  left: "50%",
			//  right: "auto",
			//  bottom: "auto",
			//  maxWidth: "80%",
			//  borderRadius: "5px",
			//  marginRight: "-50%",
			//  transform: "translate(-50%, -50%)",
			//  background: "var(--custom-primary-bg)",
			//  padding: "2rem 3rem",
			//  maxHeight: "100vh",
			//  overflowY: "scroll",
		},
	}

	const callbackCloseModal = () => {
		dispatch(hideLoginModal())
	}

	const ShowLogin = () => {
		setShowLoginComp(true)
		setShowRegisterComp(false)
		setShowForgetPassComp(false)
	}

	const ShowRegister = () => {
		setShowLoginComp(false)
		setShowRegisterComp(true)
		setShowForgetPassComp(false)
	}

	return (
		<ModalComponent
			isOpen={show}
			//onAfterOpen={callbackOnAfterOpen}
			onRequestClose={callbackCloseModal}
			style={customStyles}
			contentLabel={'Login-SignUp'}
		>
			{showLoginComp && <LoginContainer showRegister={ShowRegister} />}
			{showRegisterComp && <RegisterContainer showLogin={ShowLogin} />}
			{showForgetPassComp && (
				<ForgotPasswordContainer showLogin={ShowLogin} />
			)}
			<button onClick={callbackCloseModal}>X</button>
		</ModalComponent>
	)
}

export default Login