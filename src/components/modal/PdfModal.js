import React from 'react'
import { hidePdfModal } from "../../store/actions/modalActions";
import { AllPages } from '../PDFBookModel/ShowAllPages'
import { useDispatch, useSelector } from 'react-redux'
import { ModalComponent } from '../Global/Modal'
import { CloseBtn } from '../Global/CloseBtn';

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
        dispatch(hidePdfModal());
    }

	return (
		<ModalComponent
			isOpen={show}
			onRequestClose={closeModal}
			modalLabel={'Example Modal'}
			stylesFromProps={customStyles}
			classNameFromProps='pdf_model'
		>
			<div className='all-page-container'>
				<AllPages
					pdf={pdf}
					callbackCancel={() => {
						closeModal()
					}}
				/>
                 <CloseBtn handleOnClickClose={closeModal}/>
			</div>
		</ModalComponent>
	)
}




export default PdfModal;

