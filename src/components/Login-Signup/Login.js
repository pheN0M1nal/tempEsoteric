import React, { useState } from 'react'
import ModalComponent from '../Global/Modal'

const Login = () => {
	const [isOpen, setIsOpen] = useState(false)

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
		setIsOpen(false)
	}

	return (
		<ModalComponent
			isOpen={loginOpen}
			//onAfterOpen={callbackOnAfterOpen}
			onRequestClose={callbackCloseModal}
			style={customStyles}
			contentLabel={'Login-SignUp'}
		>
			Login
			<button onClick={() => callbackCloseModal}>X</button>
		</ModalComponent>
	)
}

export default Login
