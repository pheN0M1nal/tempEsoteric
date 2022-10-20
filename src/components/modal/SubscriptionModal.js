import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hidePdfModal } from '../../store/actions/modalActions'
import { ModalComponent } from '../Global/Modal'
import subscriptionModels from '../../DataList/subscriptionModels'

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

const Card = ({ title, price, timeSpan, description, handleSubscrition }) => {
	return (
		<>
			<div className='card_title'>{title}</div>
			<div className='card_price'>{price}</div>
			<div className='card_timeSpan'>{timeSpan}</div>
			<div className='card_description'>{description}</div>
			<button onClick={handleSubscrition}>Subcribe</button>
		</>
	)
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
					<Card
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
