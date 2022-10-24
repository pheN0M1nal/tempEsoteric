import React, { useCallback, useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import styled from 'styled-components'
import { PageCover } from '../book/mainBookComponents/CoverPage'
import bgimg1 from '../../static/images/general/bookcove-final-1.jpg'
import bgimg2 from '../../static/images/general/bookcove-final-2.jpg'
const StyledComponent = styled.div`
	/* max-width: 90vw;*/
	max-height: 100vh;
	margin: 0 auto;
	@media (min-width: 1600px) {
		max-width: 1000px;
	}
	@media (min-width: 1400px) and (max-width: 1600px) {
		max-width: 1000px;
	}
	@media (min-width: 1100px) and (max-width: 1400px) {
		max-width: 800px;
	}
	.bookOuterContainer {
		margin: 0 auto;
		margin-top: 2rem;
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
	.react-pdf__Page {
		margin-top: 10px;
	}
	.react-pdf__Page__textContent {
		border: 1px solid darkgrey;
		box-shadow: 5px 5px 5px 1px #ccc;
		border-radius: 5px;
		top: 0 !important;
		transform: translate(-50%, 0%) rotate(0deg) !important;
	}

	.react-pdf__Page__annotations.annotationLayer {
		padding: 20px;
	}

	.react-pdf__Page__canvas {
		margin: 0 auto;
	}

    /* For all pages */
    .all-page-container {
        height: 100%;
        max-height: 500px;
        overflow: auto;
    }
    
    .--soft {
        background-color: white;
    }
    .pdf_flip_book_model {
        canvas.react-pdf__Page__canvas {
            opacity: 0 !important;
        }
    }
    .pdf_book_page {
        .page_pdf {
            height: 90%;
        }
        .pageNumber {
            display: flex;
            width: 100%;

			padding: 0rem;
			span {
				background-color: #daa520;
				color: #000;
				width: 25px;
				height: 25px;
				border-radius: 2.4rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.oddPage {
			padding-right: 2rem;
			justify-content: end;
		}
		.evenPage {
			justify-content: start;
			padding-left: 2rem;
		}
	}
`

const PdfBook = ({ children: BlogPages }) => {
	const [page, setPage] = useState(0)
	const [totalPage, setTotalPage] = useState(0)
	const [orientation, setOrientation] = useState('landscape')
	const [readState, setReadState] = useState('read')
	const book = useRef()

	console.log(BlogPages.length, 'children')

	const onFlip = useCallback(e => {
		setPage(e.data)
	}, [])
	useEffect(() => {
		// 👇 add class to body element
		let elem = document.querySelector('.pdf_flip_book_model').firstChild
		console.log(elem && elem, 'truen find')

		// elem.classList.remove('--landscape');
		// elem.classList.add('bg-salmon');

        // return () => {
        //   // 👇️ removing classes from body element
        //   // when the component unmounts
        //   document.body.classList.remove('my-class-3');
    }, []);
    return (
        <StyledComponent>
            <HTMLFlipBook
                width={550}
                height={733}
                size="stretch"
                minWidth={315}
                maxWidth={800}
                minHeight={400}
                maxHeight={800}
                flippingTime={1500}
                maxShadowOpacity={0.5}
                drawShadow={true}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="flip-book html-book demo-book pdf_flip_book_model"
                ref={book}
            >
                <PageCover bgimg={bgimg1} title={"."} key={0} pos="top" />
                <PageCover bgimg={""} title={"."} key={1} pos="top" />

                {BlogPages}
                {BlogPages.length % 2 === 0 ? (
                    <PageCover bgimg={""} title={"."} key={BlogPages.length - 1} pos="bottom" />
                ) : (
                    [2, 1].map((number, i) => (
                        <PageCover
                            bgimg={""}
                            title={`. ${number}`}
                            key={BlogPages.length - number}
                            pos="bottom"
                        />
                    ))
                )}
                <PageCover bgimg={bgimg2} title={"."} key={BlogPages.length} pos="bottom" />
            </HTMLFlipBook>
            
        </StyledComponent>
    );
};

export default PdfBook
