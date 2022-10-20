import React from 'react'
import { AllPages } from '../BlogBookModel/ShowAllPages'
import { useDispatch, useSelector } from 'react-redux'
import { hideProfileModal } from '../../store/actions/modalActions'
import { ModalComponent } from '../Global/Modal'

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

const PdfModal = () => {
	const dispatch = useDispatch()
	const modalInfo = useSelector(state => state.pdfModal)
	const { show, pdf } = modalInfo

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
				<AllPages
					pdf={pdf}
					callbackCancel={() => {
						closeModal()
					}}
				/>
			</div>
		</ModalComponent>
	)
}

export default PdfModal
