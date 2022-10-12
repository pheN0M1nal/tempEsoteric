import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { showModal } from '../../../store/actions/modalActions'

const PageWrapper = styled.div`
	${
		'' /* width: 93%;
    height: 94.7%; */
	}
	width: 100%;
	height: 100%;
	padding: 15%;
	position: relative;
	display: flex;
	justify-self: center;
	align-items: center;
	top: auto;
	bottom: auto;
	margin: auto;
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-image: url(${props => props.imag});
	border: 2px solid #00ff00;
	.pageContentOuter {
		text-align: center;
		margin: 0 auto;
		height: 100%;
		overflow: auto;
		.imageOuter {
			width: 300px;
			height: 200px;
			overflow: hidden;
			img {
				padding: 1rem;
				border: 1px solid #ff0000;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.imageOuterList {
			width: 300px;
			height: 300px;
			overflow: hidden;
			margin: 0.5rem auto;
			img {
				padding: 1rem;
				border: 1px solid #ff0000;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
`

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
		<PageWrapper imag={''}>
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
		</PageWrapper>
	)
}

export default Records
