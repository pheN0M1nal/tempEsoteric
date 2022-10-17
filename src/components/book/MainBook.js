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
	max-width: 90vw;
	max-height: 90vh;
	.bookOuterContainer {
		margin-top: 2rem;
	}
	.softPage {
		${'' /* background-color:red; */}
		${
			'' /* padding: 2rem auto;
        padding-left:${(pageLength) => (pageLength % 2 === 0 ? `auto` : `2%`)};    
        padding-right:${(pageLength) => (pageLength % 2 === 1 ? `auto` : `2%`)};     */
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

	const nextButtonClick = () => {
		flipRef.current.pageFlip().flipNext()
	}

	const prevButtonClick = () => {
		flipRef.current.pageFlip().flipPrev()
	}

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
				<HTMLFlipBook
					width={650}
					height={733}
					size='stretch'
					minWidth={115}
					maxWidth={2000}
					minHeight={100}
					maxHeight={1000}
					maxShadowOpacity={0.5}
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
						title={'BOOK TITLE'}
						key={0}
						pos='top'
					/>
					<PageCover
						bgimg={''}
						title={'BOOK TITLE'}
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
					{/* {pages.length % 2 === 0 ? (
						<PageCover
							bgimg={''}
							title={'THE END'}
							key={pages.length - 1}
							pos='bottom'
						/>
					) : (
						<>
							<PageCover
								bgimg={''}
								title={'THE END'}
								key={pages.length - 2}
								pos='bottom'
							/>
							<PageCover
								bgimg={''}
								title={'THE END'}
								key={pages.length - 1}
								pos='bottom'
							/>
						</>
					)}
					<PageCover
						bgimg={bgimg2}
						title={'THE END'}
						key={pages.length}
						pos='bottom'
					/> */}
				</HTMLFlipBook>
			</div>

			<div className='container mt-3'>
				<div className='row'>
					<div className='col-md-6'>
						<button
							type='button'
							className='btn btn-info btn-sm btn-prev'
							onClick={() => prevButtonClick()}
						>
							Previous page
						</button>
						[<span>{page}</span> of <span>{totalPage}</span>]
						<button
							type='button'
							className='btn btn-info btn-sm btn-next'
							onClick={() => nextButtonClick()}
						>
							Next page
						</button>
					</div>
					{/* <div className='col-md-6'>
						State: <i>{readState}</i>, orientation:{' '}
						<i>{orientation}</i>
					</div> */}
				</div>
			</div>
		</StyledComponent>
	)
}

export default MainBook
