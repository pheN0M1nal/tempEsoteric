import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchBlog } from '../../../../store/actions/blogsActions'
import {
	showPdfModal,
	showBlogModal,
} from '../../../../store/actions/modalActions'
import Pagination from './Pagination'

const Wrapper = styled.div`
	.flip_card {
		background-color: transparent;
		width: 200px;
		height: 150px;
		perspective: 1000px;
		margin-bottom: 2rem;
		position: relative;
		z-index: 9 !important;
		cursor: pointer;
		.flip_card_inner {
			position: relative;
			width: 100%;
			height: 100%;
			text-align: center;
			transition: transform 0.6s;
			transform-style: preserve-3d;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			.flip_card_front {
				background-color: #bbb;
				color: black;
				width: 200px;
				height: 150px;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					padding: 0.01rem;
					border: 1px solid var(--custom-orange-color);
				}
			}
			.flip_card_back {
				background-color: var(--custom-orange-color);
				color: white;
				padding: 1rem 0;
				transform: rotateY(180deg);
			}
		}
	}

	.flip_card:hover .flip_card_inner {
		transform: rotateY(180deg);
	}

	.flip_card_front,
	.flip_card_back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
`
const Records = props => {
	const [recordsPerPage] = useState(10)
	const dispatch = useDispatch()

	const userProfile = useSelector(state => state.userProfile)
	const { profile } = userProfile

	const openPdfModal = img => {
		dispatch(showPdfModal(img))
	}
	const openBlogModal = url => {
		dispatch(fetchBlog(url))
		dispatch(showBlogModal())
	}

	const handleOnOpen = item => {
		console.log(item, 'item')
		item.type === 'pdf' ? openPdfModal(item.url) : openBlogModal(item.url)
	}

	useEffect(() => {}, [props.data])
	// console.log(props.data[0].type, "props");

	const indexOfLastRecord = props.paginationCurrentPage * recordsPerPage
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
	const nPages = Math.ceil(props.count / recordsPerPage)
	return (
		<div className='pageContentOuter'>
			{props?.data?.map((item, i) => {
				return (
					<Wrapper>
						<div
							class='flip_card'
							key={i}
							onClick={() => handleOnOpen(item)}
						>
							<div class='flip_card_inner'>
								<div class='flip_card_front'>
									<img
										src={item.image}
										alt=' down'
									/>
								</div>
								<div class='flip_card_back'>
									<h4>{item.title}</h4>
									<p>Architect & Engineer</p>
								</div>
							</div>
						</div>
					</Wrapper>
				)
			})}

			{props.count > 10 && (
				<Pagination
					nPages={nPages}
					currentPage={props.paginationCurrentPage}
					setCurrentPage={props.setPaginationCurrentPage}
				/>
			)}
		</div>
	)
}

export default Records
