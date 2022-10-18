import React, { useCallback, useEffect, useRef, useState } from "react";
import { Children } from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import { PageCover } from "./mainBookComponents/CoverPage";
import bgimg1 from "../../static/images/general/bookcove-final-1.jpg";
import bgimg2 from "../../static/images/general/bookcove-final-2.jpg";
import { BlogPage } from "../BlogBookModel/BlogPage";
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
    .react-pdf__Page {
        margin-top: 10px;
    }
    .react-pdf__Page__textContent {
        border: 1px solid darkgrey;
        box-shadow: 5px 5px 5px 1px #ccc;
        border-radius: 5px;
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
	.--soft{
		
		border: 2px solid darkgrey;
	}
`;

const PdfBook = ({ children: BlogPages }) => {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [orientation, setOrientation] = useState("landscape");
    const [readState, setReadState] = useState("read");
    const book = useRef();

    console.log(BlogPages.length, "children");

    const onFlip = useCallback((e) => {
        setPage(e.data);
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
                    drawShadow={false}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onFlip}
                    className="flip-book html-book demo-book"
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

export default PdfBook;
