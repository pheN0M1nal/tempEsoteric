import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import AllPages from './ShowAllPages'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hideModal } from '../../store/actions/modalActions'

const customStyles = {
	content: {
		top: '10%',
		left: '10%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

const PdfModal = () => {
	const dispatch = useDispatch()

	let subtitle
	const [modalIsOpen, setIsOpen] = useState(false)

	const modalInfo = useSelector(state => state.modal)
	const { show, pdf } = modalInfo

	useEffect(() => {
		setIsOpen(show)
	}, [show])

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		//subtitle.style.color = '#f00'
	}

	function closeModal() {
		setIsOpen(false)
		dispatch(hideModal())
	}

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel='Example Modal'
			>
				<div className='all-page-container'>
					<AllPages pdf={pdf} />
				</div>
			</Modal>
		</div>
	)
}

export default PdfModal
