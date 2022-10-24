import { forwardRef, useMemo, useState } from 'react'
import styled from 'styled-components'
import menuItems from '../../../DataList/menuItems'
import { useNavigate } from 'react-router'
import imag2 from "../../../static/images/bg/bg2.png"
const PageWrapper = styled.div`

	width: 100%;
	height: 100%;
	padding: 10% 15% ;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: left;
	top: auto;
	bottom: auto;
	margin: auto;
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-image: url(${props => props.imag});
	border: 5px solid #DAA520;
	outline: #DAA520;
	box-shadow: none;
	h1{
		text-align: center;
		text-decoration: underline black double 2px;
	}
	.pageContentOuter {
		text-align: left;
		/* margin: 0 auto; */
		height: 100%;
		overflow: auto;
		li{
			margin-bottom:  0.5rem  !important;
		}
		.btn{
			text-decoration: none;
			color:#000;
			cursor: pointer;
			margin: 0;
			padding: 0;
		}
	}
`
export const MenuPage = forwardRef((props, ref) => {
	const navigate = useNavigate()

	const goToPage = pageNumber => {
		props.book.current.pageFlip().flip(pageNumber+2, 'top')
		console.log(props.book.current.pageFlip().getPageCount())
	}

	return (
		<div
			className='page softPage'
			ref={ref}
			data-density={props.density | 'soft'}
		>
			<PageWrapper imag={imag2}>
						<h1>Menu</h1>
				<div className='pageContentOuter'>
					<div className='table-contents pg-2-container'>
						<ol>
							{menuItems.map(item => (
								<li key={item.pageNumber}>
									<button className='btn btn-link'
										onClick={() =>
											goToPage(item.pageNumber)
										}
									>
										{item.name}
										{/* <span>{item.pageNumber}</span> */}
									</button>
								</li>
							))}
						</ol>
					</div>
				</div>
			</PageWrapper>
		</div>
	)
})
