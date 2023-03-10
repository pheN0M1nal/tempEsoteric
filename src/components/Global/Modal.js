import Modal from 'react-modal'

const customStyles = {
	content: {
		// top: '50%',
		// left: '50%',
		// right: 'auto',
		// bottom: 'auto',
		// maxWidth: '80%',
		// borderRadius: '5px',
		// marginRight: '-50%',
		// transform: 'translate(-50%, -50%)',
		// background: 'var(--custom-primary-bg)',
		// padding: '2rem 3rem',
		// maxHeight: '100vh',
		// overflowY: 'auto',
	},
}

Modal.setAppElement('#root')

export const ModalComponent = ({
	children,
	isOpen,
	callbackOnAfterOpen,
	callbackCloseModal,
	modalLabel = '',
	stylesFromProps,
	classNameFromProps,
}) => {
	return (
		<Modal
			isOpen={isOpen}
			onAfterOpen={callbackOnAfterOpen}
			onRequestClose={callbackCloseModal}
			style={stylesFromProps ? stylesFromProps : customStyles}
			contentLabel={modalLabel}
			className={classNameFromProps}
		>
			{children}
		</Modal>
	)
}
