import styled from 'styled-components'
import { useContext } from 'react'
import { AccountBoard } from '../AccountBoard'
import { NavigationContext } from '../MainWrapper'
import { MobileNavContainer } from './mobile/Container'
import { Search } from '../Search'
import { useSelector } from 'react-redux'

const StyledComponent = styled.div`
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	background-color: var(--custom-transparent);
	z-index: ${({ mobileSubNavEnabled }) => (mobileSubNavEnabled ? 30 : 1)};
	color: var(--custom-txt-color);
	padding: 0 1rem;
	.headerOuter {
		width: 100%;
		max-width: 1271px;
		margin: 0 auto;
		.authMenuBarWrapper {
			display: flex;
			justify-content: end;
			align-items: center;

			gap: 1rem;
			.authMenuBarTitle {
				padding: 1rem 0;
				margin: 0;
			}
			.authMenuBarLink {
				width: 100%;
				display: flex;
				gap: 0.5rem;
				justify-content: space-between;
				align-items: center;
				border-left: 1px solid var(--custom-input-border);
				padding: 0.2rem 0;
				.authMenuBarNotification {
					padding: 1.1rem 1.5rem;
					border-right: 1px solid var(--custom-input-border);
					margin-right: 1rem;
					img {
						width: 20px;
						height: 24px;
						object-fit: cover;
					}
				}
			}
			.menuBar {
				${
					'' /* border: 1px solid var(--custom-muted-text-color); */
				}
				padding: 5px 5px;
				border-radius: 3px;
				cursor: pointer;
				display: none;
				transition: all 0.25s ease-out;
				width: 30px;
				height: 30px;
				:hover {
					color: var(--custom-orange);
					border-color: var(--custom-orange);
				}

				@media screen and (max-width: 875px) {
					display: inline-block;
				}
			}
		}
	}
`

export const NavigationContainer = () => {
	const userProfile = useSelector(state => state.userProfile)
	const { isFetchingProfile, profile } = userProfile
	const { setMobileSubNavEnabled, mobileSubNavEnabled } =
		useContext(NavigationContext)
	return (
		<>
			<StyledComponent mobileSubNavEnabled={mobileSubNavEnabled}>
				<div className='headerOuter '>
					<div className='authMenuBarWrapper'>
						<div className='authMenuBarLink'>
							<Search />
							<AccountBoard
								isFetchingProfile={isFetchingProfile}
								profile={profile}
							/>
						</div>

						{/* <img
							className='menuBar'
							src='{Bar}'
							alt='menu bar'
							onClick={() => {
								setMobileSubNavEnabled(old => !old)
							}}
						/> */}
					</div>
				</div>
			</StyledComponent>

			{mobileSubNavEnabled ? <MobileNavContainer /> : null}
		</>
	)
}
