import React from 'react'
import { hideBlogModal } from '../../store/actions/modalActions'
import { useDispatch, useSelector } from 'react-redux'
import { ModalComponent } from '../Global/Modal'
import { CloseBtn } from '../Global/CloseBtn'

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

const BlogModal = () => {
	const dispatch = useDispatch()
	const modalInfo = useSelector(state => state.blogs)
	const { show, blog } = modalInfo

	function closeModal() {
		dispatch(hideBlogModal())
	}

	return (
		<ModalComponent
			isOpen={show}
			onRequestClose={closeModal}
			modalLabel={'Blog Modal'}
			stylesFromProps={customStyles}
			classNameFromProps='blog_modal'
		>
			<div>
				<div className='blog_title'>
					{blog ? blog.title : 'blog title'}
				</div>
				<div className='blog_body'>
					{blog ? blog.body : 'blog body'}
				</div>
				<div className='blog_info'>
					{blog ? blog.info : 'blog info'}
				</div>
				<CloseBtn handleOnClickClose={closeModal} />
			</div>
		</ModalComponent>
	)
}

export default BlogModal
