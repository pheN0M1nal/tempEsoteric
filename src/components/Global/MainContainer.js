import { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledComponent = styled.div`
	min-height: ${({ height }) => (height === 'Admin' ? '100%' : '85vmin')};
	background-color: var(--custom-main-bg);
	display: flex;
	justify-content: center;
	${'' /* align-items: center; */}
	overflow: hidden;
`

export const MainContainer = props => {
	const userProfile = useSelector(state => state.userProfile)
	const { profile } = userProfile
	return (
		<StyledComponent height={profile?.account_type}>
			{props.children}
		</StyledComponent>
	)
}
