import styled from 'styled-components'
import { ProfilePictureBoard } from './ProfilePictureBoard'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { NavigationContext } from './MainWrapper'
import { SizedBox } from './SizedBox'
import { HorizontalRule } from './HorizontalRule'
import { Button } from './Button'
import logoutImg from '../../static/images/Auth/3599716@0.png'
import profileimg from '../../static/images/Auth/2384396@0.png'
import profilePicture from '../../static/images/Auth/How-to-be-happy-as-an-introvert.png'
import down from '../../static/images/Auth/4980085@0.png'
import { useDispatch } from 'react-redux'
import { showLoginModal } from '../../store/actions/modalActions'
import { logout } from '../../store/actions/userActions'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	.profileTab {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0.3rem 0 0.3rem 0.4rem;
		border: 1px solid #c0dfd9;
		border-radius: 2.4rem;
		background-color: var(--custom-light-bg);
		&:hover,
		&:active {
			box-shadow: var(--custom-shadow);
		}
		.img {
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}
		.name {
			margin-left: 10px;
			font-size: 0.8rem;
			font-size: var(--font-14);
			color: var(--custom-txt-color);
			font-family: var(--font-1);
			.first {
				color: var(--custom-txt-color);
			}
			.last {
				color: var(--custom-txt-color);
			}
			.downChevron {
				width: 1rem;
				height: 1rem;
				margin-right: 0.5rem;
				margin-left: 0.5rem;
			}
		}

		.icon {
			color: var(--custom-orange);
			font-size: 1.3rem;
			margin-left: 1.5rem;
		}
	}
	#pop-nav {
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0px;
		right: 0;
		top: 56px;
		z-index: 1;
		animation-duration: 500ms;
		animation-name: showPopNav;
		animation-timing-function: ease-in;

		@keyframes showPopNav {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		.logout-button {
			text-decoration: none;
			font-size: var(--font-14);
			font-family: var(--font-1);
			font-weight: 500;
			display: flex;
			align-items: center;
			padding: 0.3rem 0 0.3rem 0.4rem;
			border: 1px solid var(--custom-border-color);
			border-radius: 2.4rem;
			background-color: var(--custom-light-bg);
			color: var(--custom-txt-color);
			letter-spacing: 1px;
			margin: 0.2rem 0;
			img {
				width: 30px;
				height: 30px;
				object-fit: cover;
				padding: 0.3rem;
				border-radius: 50%;
			}
			:hover {
				box-shadow: var(--custom-shadow);
			}
		}
	}
	#pop-nav.active {
		display: initial;
	}
	.AuthBtn {
		display: flex;
		gap: 1rem;
	}
`

export const AccountBoard = ({ profile }) => {
	const dispatch = useDispatch()

	const [subNavToggle, setSubNavToggle] = useState(false)
	const { currentSubNavKey, setCurrentSubNavKey } =
		useContext(NavigationContext)
	// const { profile, isAuthenticated } = useContext(GlobalUserProfileContext);
	// console.log(Auth);
	const handleOnClickProfileBoard = e => {
		e.preventDefault()
		setSubNavToggle(!subNavToggle)
		// setCurrentSubNavKey((prev) => (prev === "auth" ? null : "auth"));
	}
	const handleOnClickLogin = () => {
		dispatch(showLoginModal())
	}
	return (
		<Wrapper>
			{profile ? (
				<>
					<div className='profileTab'>
						<ProfilePictureBoard size={2.5}>
							<img
								className='img'
								src={
									profile?.profile?.picture
										? profile?.profile?.picture
										: profilePicture
								}
								alt=''
								onClick={handleOnClickProfileBoard}
							/>
						</ProfilePictureBoard>
						<div
							className='name'
							onClick={handleOnClickProfileBoard}
						>
							<span className='first'>
								{profile?.fullname || 'name'}
							</span>
							<img
								className='downChevron'
								src={down}
								alt='down'
							/>
						</div>
					</div>
					{subNavToggle ? (
						<div id='pop-nav'>
							<Link
								to='/userprofile'
								className='logout-button logout1'
							>
								<img
									src={profileimg}
									alt='userprofile'
								/>
								&nbsp; Profile
							</Link>
							<Button
								onClick={() => logout()}
								className='logout-button logout2'
							>
								<img src={logoutImg} alt='logout' />
								&nbsp; Log Out
							</Button>
						</div>
					) : null}
				</>
			) : (
				<div className='AuthBtn'>
					<Button
						onClick={handleOnClickLogin}
						textTransform={'uppercase'}
						fontSize={16}
						addEffect={true}
						maxWidth={200}
						paddingLeftRight={3}
						height={41}
						BgColor={'light-bg'}
						border={'border-color'}
					>
						LOGIN
					</Button>
					<Button
						//onClick={handleOnClickSignup}
						textTransform={'uppercase'}
						paddingLeftRight={3}
						fontSize={16}
						maxWidth={200}
						addEffect={true}
						borderRadius={2.4}
						height={41}
						BgColor={'light-bg'}
						border={'border-color'}
					>
						SIGNUP
					</Button>
				</div>
			)}
		</Wrapper>
	)
}
