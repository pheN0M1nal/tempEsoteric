import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalComponent } from '../Global/Modal'
import { hideProfileModal } from '../../store/actions/modalActions'
import { CloseBtn } from '../Global/CloseBtn'

const customStyles = {
	// content: {
	// 	top: '10%',
	// 	left: '10%',
	// 	right: 'auto',
	// 	bottom: 'auto',
	// 	marginRight: '-50%',
	// 	transform: 'translate(-50%, 0%)',
	// },
}

const ProfileModal = () => {
	const dispatch = useDispatch()

	const modalInfo = useSelector(state => state.profileModal)
	const { show } = modalInfo

	const userInfo = useSelector(state => state.userProfile)
	const { profile } = userInfo

	function closeModal() {
		dispatch(hideProfileModal())
	}

	return (
		<ModalComponent
			isOpen={show}
			onRequestClose={closeModal}
			modalLabel={'Example Modal'}
			stylesFromProps={customStyles}
			classNameFromProps='className whatever'
		>
			<div className='all-page-container'>
				<div className='profile_img'>
					<img
						src={profile?.profilePicture || 'dummy.jpg'}
						alt='profilePicture'
						srcset=''
					/>
				</div>
				<div className='profile_name'>
					{profile?.name || 'profile name'}
				</div>
				<div className='profile_email'>
					{profile?.email || 'profile email'}
				</div>
				<CloseBtn handleOnClickClose={closeModal} />
			</div>
		</ModalComponent>
	)
}

export default ProfileModal
