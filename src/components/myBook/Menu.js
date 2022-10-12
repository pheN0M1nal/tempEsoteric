import { forwardRef, useMemo, useState } from 'react'
import styled from 'styled-components'
import menuItems from '../../DataList/menuItems'
import { useNavigate } from 'react-router'
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
export const Menu = forwardRef((props, ref) => {
	const navigate = useNavigate()

	const goToPage = pageNumber => {
		props.book.current.pageFlip().flip(pageNumber, 'top')
		console.log(props.book.current.pageFlip().getPageCount())
	}

	return (
		<div
			className='page softPage'
			ref={ref}
			data-density={props.density | 'soft'}
		>
			<PageWrapper>
				<div className='pageContentOuter'>
					<div className='table-contents pg-2-container'>
						<h1>Menu</h1>
						<ul>
							{menuItems.map(item => (
								<li key={item.pageNumber}>
									<button
										onClick={() =>
											goToPage(item.pageNumber)
										}
									>
										{item.name}
										<span>{item.pageNumber}</span>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</PageWrapper>
		</div>
	)
})
