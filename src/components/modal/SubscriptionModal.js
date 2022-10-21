import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hidePdfModal } from '../../store/actions/modalActions'
import { ModalComponent } from '../Global/Modal'
import subscriptionModels from '../../DataList/subscriptionModels'
import { SubscriptionCard } from '../Global/subscriptionCard/SubscriptionCard'

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



const SubscriptionModal = () => {
	const dispatch = useDispatch()

	const modalInfo = useSelector(state => state.subscriptionModal)
	const { show } = modalInfo

	const userInfo = useSelector(state => state.userProfile)
	const { profile } = userInfo

	function closeModal() {
		dispatch(hidePdfModal())
	}

	const handleSubscrition = () => {
		console.log('handle subscription')
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
				{subscriptionModels.map(model => (
					<SubscriptionCard
						title={model.title}
						price={model.price}
						timeSpan={model.timeSpan}
						description={model.description}
						handleSubscrition={handleSubscrition}
					/>
				))}
			</div>
		</ModalComponent>
	)
}

export default SubscriptionModal
