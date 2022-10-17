import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Children } from 'react'
import HTMLFlipBook from 'react-pageflip'
import styled from 'styled-components'

// const StyledComponent = styled.div`
// 	max-width: 80vw;
// 	max-height: 90vh;
// 	.bookOuterContainer {
// 		margin-top: 5rem;
// 	}
// 	.softPage {
// 		${'' /* background-color:red; */}
// 		${
// 			'' /* padding: 2rem auto;
//         padding-left:${(pageLength) => (pageLength % 2 === 0 ? `auto` : `2%`)};
//         padding-right:${(pageLength) => (pageLength % 2 === 1 ? `auto` : `2%`)};     */
// 		}
// 	}
// `

const PdfBook = ({ children }) => {
	const [page, setPage] = useState(0)
	const [totalPage, setTotalPage] = useState(0)
	const [orientation, setOrientation] = useState('landscape')
	const [readState, setReadState] = useState('read')
	const book = useRef()

	const nextButtonClick = () => {
		book.current.pageFlip().flipNext()
	}

	const prevButtonClick = () => {
		book.current.pageFlip().flipPrev()
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
		//setTotalPage(book.current.pageFlip()?.getPageCount())
		debugger
		console.log('pdfBook')
	})

	return (
		<>
			<div className=''>
				<HTMLFlipBook width={200} height={300} ref={book}>
					{children}
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
		</>
	)
}

export default PdfBook
