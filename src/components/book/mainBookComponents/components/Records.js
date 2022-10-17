import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { showModal } from '../../../../store/actions/modalActions'

const Records = props => {
	const dispatch = useDispatch()

	const openModal = img => {
		dispatch(showModal(img))
	}

	const pdf = 'dashboard-of-nash-rambler.pdf'

	useEffect(() => {
		//console.log(props)
	}, [props.data])

	return (
		<div className='pageContentOuter'>
			{props?.data?.map((item, i) => {
				return (
					<div key={i} className='imageOuterList'>
						<img
							onClick={() => openModal(pdf)}
							src={item.url}
							alt='image down'
						/>
						<div className='page-footer'>
							{item.pageNumber + 1}
						</div>
					</div>
				)
			})}

			{/* <Pagination
						className='pagination-bar'
						currentPage={currentPage}
						totalCount={bodyData?.length}
						pageSize={PageSize}
						onPageChange={onPageChange}
					/> */}
		</div>
	)
}

export default Records
