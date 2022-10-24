import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'
import { logout } from '../../../api/EndPoints'
import axiosInstance from '../../../config/api/axois'
import { notifySuccess } from '../../../helpers/notifications/notifySuccess'
import { Button } from '../../Global/Button'
import { Spinner } from '../../modal/Spinner'

const StyledContainer = styled.div`
	padding: 1rem;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--custom-main-background);
`

const LogoutContainer = () => {
	const [showSpinner, setShowSpinner] = useState(false)
	const { userId } = useParams()
	const navigate = useNavigate()

	const handleOnClickLogoutButton = e => {
		e.preventDefault()
		setShowSpinner(true)
		axiosInstance()
			.get(logout(userId), {
				refresh_token: window.localStorage.getItem('refresh_token'),
			})
			.then(response => {
				window.localStorage.setItem('access_token', '')
				window.localStorage.setItem('refresh_token', '')
				notifySuccess('Logged out')
				navigate('/login', { replace: true })
			})
			.catch(err => {
				window.localStorage.setItem('access_token', '')
				window.localStorage.setItem('refresh_token', '')
				navigate('/login', { replace: true })
			})
	}

	return (
		<StyledContainer>
			{showSpinner ? (
				<Spinner />
			) : (
				<Button
					onClick={e => handleOnClickLogoutButton(e)}
					height={54}
					fontSize={16}
					maxWidth={535}
				>
					Proceed to Logout
				</Button>
			)}
		</StyledContainer>
	)
}

export default LogoutContainer
