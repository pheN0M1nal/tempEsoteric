import React, { useCallback, useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import styled from 'styled-components'
import { PageCover } from '../myBook/CoverPage'
import bgimg1 from '../../static/images/bg/bg2.png'
import bgimg2 from '../../static/images/bg/bg2.png'
import { Page } from '../myBook/Page'

const StyledComponent = styled.div`
	max-width: 80vw;
	max-height: 80vh;
`
const pages = [
	'https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_e336f940-149e-46eb-8a4b-9fc06b3fdaaf.webp',
	'https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_fa3f2151-85a1-443d-a15d-7914f0205713.webp',
	'https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_bf51ae35-e11f-4c4b-b21e-531250ea44d9.webp',
	'https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_9d99aa45-cffc-42e3-b236-f9a5c625f895.webp',
	'https://storage.googleapis.com/studio-design-assets/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_1291d6ab-762c-4aa7-9ef9-060fb62e877c.webp',
	'https://storage.googleapis.com/studio-design-assets/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_fa5dea81-842a-4900-b904-1c5311ce1545.webp',
]

export const MyBook = () => {
	const [page, setPage] = useState(0)
	const [totalPage, setTotalPage] = useState(0)
	const [orientation, setOrientation] = useState('portrait')
	const [readState, setReadState] = useState('read')
	const flipRef = useRef()

	const nextButtonClick = () => {
		flipRef.current.pageFlip().flipNext()
	}

	const prevButtonClick = () => {
		flipRef.current.pageFlip().flipPrev()
	}

	const onFlip = useCallback(e => {
		console.log('Current page: ' + e.data)
		setPage(e.data)
	}, [])
	const onChangeOrientation = e => {
		setOrientation(e.data)
	}

	const onChangeState = e => {
		setReadState(e.data)
		//s
	}

	return (
		<StyledComponent>
			<div className='container-md'>
				<HTMLFlipBook
					width={550}
					height={733}
					size='stretch'
					minWidth={115}
					maxWidth={2000}
					minHeight={100}
					maxHeight={1000}
					maxShadowOpacity={0.5}
					showCover={true}
					mobileScrollSupport={true}
					onFlip={() => onFlip}
					onChangeOrientation={() => onChangeOrientation}
					onChangeState={() => onChangeState}
					className='flip-book html-book demo-book'
					style={{
						backgroundImage: 'url(images/background.jpg)',
					}}
					ref={flipRef}
				>
					<PageCover bgimg={bgimg1}>BOOK TITLE</PageCover>
					{pages.map((page, index) => (
						<Page key={index} className='page' number={index}>
							<img
								src={page}
								alt=''
								className='page-image'
							/>
						</Page>
					))}
					<PageCover bgimg={bgimg2}>THE END</PageCover>
				</HTMLFlipBook>
			</div>

			<div className='container mt-3'>
				<div className='row'>
					<div className='col-md-6'>
						<button
							type='button'
							className='btn btn-info btn-sm btn-prev'
							onClick={() => prevButtonClick}
						>
							Previous page
						</button>
						[<span>{page + 1}</span> of{' '}
						<span>{totalPage}</span>]
						<button
							type='button'
							className='btn btn-info btn-sm btn-next'
							onClick={() => nextButtonClick}
						>
							Next page
						</button>
					</div>
					<div className='col-md-6'>
						State: <i>{readState}</i>, orientation:{' '}
						<i>{orientation}</i>
					</div>
				</div>
			</div>
		</StyledComponent>
	)
}
