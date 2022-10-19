import React, { useCallback, useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import styled from 'styled-components'
import { PageCover } from './mainBookComponents/CoverPage'
import bgimg1 from '../../static/images/general/bookcove-final-1.jpg'
import bgimg2 from '../../static/images/general/bookcove-final-2.jpg'
import { Page } from './mainBookComponents/Page'
import menuItems from '../../DataList/menuItems'
import { MenuPage } from './mainBookComponents/MenuPage'
import { useParams, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

const StyledComponent = styled.div`
	/* max-width: 90vw;*/
	max-height: 100vh;
	margin: 0 auto;
	@media (min-width: 1600px) {
		max-width: 1200px;
	}
	@media (min-width: 1400px) and (max-width: 1600px) {
		max-width: 1000px;
	}
	@media (min-width: 1100px) and (max-width: 1400px) {
		max-width: 800px;
	}
	.bookOuterContainer {
		margin: 0 auto;
		margin-top: 1rem;
	}
	.container-md {
		height: 80vh;
		/* @media (min-width:1600px) {
			max-width:1320px;
		}
		@media (min-width:1400px) and (max-width:1600px) {
			max-width:1100px;
		}
		@media (min-width:1100px) and (max-width:1400px) {
			max-width:900px;
		} */
	}
	.wrap {
		background-color: #daa520;
		padding: 20px;
	}
	.wrap2 {
		background: transparent;
		background-color: transparent;

		padding: 20px;
	}
	.flip-book {
		.page-cover {
		}
		.softPage {
			background-color: #fff;
			/* margin: ${props =>
				props.pageNumber % 2 === 0
					? `5% 5% 5% 0`
					: '5% 0 5% 5%'}; */
			${
				'' /* padding: 2rem auto;
        padding-left:${(pageLength) => (pageLength % 2 === 0 ? `auto` : `2%`)};    
        padding-right:${(pageLength) => (pageLength % 2 === 1 ? `auto` : `2%`)};     */
			}
		}
	}
`

const MainBook = () => {
	const [page, setPage] = useState(0)
	const [totalPage, setTotalPage] = useState(0)
	const [orientation, setOrientation] = useState('landscape')
	const [readState, setReadState] = useState('read')
	const flipRef = useRef()

	//initializing useParms
	const params = useParams()

	const pages = menuItems

	const navigate = useNavigate()
	const dispatch = useDispatch()

	// getting pageNumber to goto
	const pageNumber = params.pageNumber

	const onFlip = useCallback(e => {
		setPage(e.data)
	}, [])

	// const onChangeOrientation = e => {
	// 	setOrientation(e.da ta)
	// }

	// const onChangeState = e => {
	// 	setReadState(e.data)
	// }

	// console.log(pages.length % 2 === 0, 'clg')

	useEffect(() => {
		setTotalPage(flipRef.current.pageFlip()?.getPageCount())
	})

	return (
		<StyledComponent pageLength={pages?.length}>
			<div className='container-md bookOuterContainer'>
				<div className={page > 1 ? `wrap` : `wrap2`}>
					<HTMLFlipBook
						width={550}
						height={733}
						size='stretch'
						minWidth={315}
						maxWidth={800}
						minHeight={400}
						maxHeight={1000}
						flippingTime={1500}
						maxShadowOpacity={0.5}
						drawShadow={false}
						showCover={true}
						mobileScrollSupport={true}
						onFlip={onFlip}
						// onChangeOrientation={onChangeOrientation}
						// onChangeState={onChangeState}
						className='flip-book html-book demo-book'
						ref={flipRef}
					>
						<PageCover
							bgimg={bgimg1}
							title={'.'}
							key={0}
							pos='top'
						/>
						<PageCover
							bgimg={''}
							title={'.'}
							key={1}
							pos='top'
						/>
						<MenuPage book={flipRef} />
						{pages.map((item, index) => (
							<Page
								key={index}
								data={item}
								className='page'
								number={page}
							></Page>
						))}
						{pages.length % 2 !== 0 ? (
							<PageCover
								bgimg={''}
								title={'.'}
								key={pages.length - 1}
								pos='bottom'
							/>
						) : (
							[2, 1].map((number, i) => (
								<PageCover
									bgimg={''}
									title={`. ${number}`}
									key={pages.length - number}
									pos='bottom'
								/>
							))
						)}
						<PageCover
							bgimg={bgimg2}
							title={'.'}
							key={pages.length}
							pos='bottom'
						/>
					</HTMLFlipBook>
				</div>
			</div>
		</StyledComponent>
	)
}

export default MainBook
