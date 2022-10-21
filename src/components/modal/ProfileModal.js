import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalComponent } from '../Global/Modal'
import { hideProfileModal } from '../../store/actions/modalActions'

const customStyles = {
	content: {
		top: '10%',
		left: '10%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, 0%)',
	},
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
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			modalLabel={'Example Modal'}
			stylesFromProps={customStyles}
			classNameFromProps='className whatever'
		>
			<div className='all-page-container'>
				<div className='profile_img'>
					<img
						src={profile.profilePicture}
						alt='profilePicture'
						srcset=''
					/>
				</div>
				<div className='profile_name'>
					<img
						src={profile.name}
						alt='profilePicture'
						srcset=''
					/>
				</div>
				<div className='profile_email'>
					<img
						src={profile.email}
						alt='profilePicture'
						srcset=''
					/>
				</div>
			</div>
		</ModalComponent>
	)
}

export default ProfileModal
