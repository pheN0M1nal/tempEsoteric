import { forwardRef, useState, useEffect } from "react";
import Records from "./components/Records";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchContent } from "../../../store/actions/contentActions";
import BlogComp from "../../blogComponents/BlogComp";
import { BookLoader } from "../../Global/BookLoader";
import { BlogPage } from "./components/BlogPage";

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 8px solid var(--custom-orange-color);
    border-width: ${(props) => (props.pageNumber % 2 === 0 ? `8px 8px 8px 0` : "8px 0 8px 8px")};
    background-color:#fff;
    /* padding-left: 5%;	 */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    z-index: 2 !important;
    top: auto;
    bottom: auto;
    margin: auto;
    .pageInner {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(${(props) => props?.imag});
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        padding: 10% 13%;
        .contentOuter {
            text-align: center;
            height: 100%;
            width: 100%;
            position: relative;
            z-index: 5;
            .pageContentOuter {
                text-align: center;
                margin: 0 auto;
                height: 100%;
                overflow: auto;
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 0.8rem;
                justify-content: center;
                align-items: center;
                position: relative;
				
                @media (max-width: 1400px) {
                    height: 97%;
                }
            }
            .heading {
                font-size: 1.4rem;
                @media (max-width: 500px) {
                    font-size: 1rem;
                }
            }
            .word1 {
                font-size: 1.2rem !important;
            }
            .word2 {
                font-size: 1.1rem !important;
            }
        }
        .blog_list,.pdf_list,.blog_open {
            text-align: center;
            height: 95%;
            width: 100%;
            position: relative;
            z-index: 5;
            .pageContentOuter {
                justify-content: center;
            }
        }
		.blog_open{
			.pageContentOuter{

				padding: .8rem;
				
			}
		}
        .contact_us {
            text-align: center;
            height: 95%;
            width: 100%;
            position: relative;
            z-index: 5;
            .pageContentOuter {
                justify-content: center;
            }
        }
    }
    .page-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.3rem;
        border-radius: 50%;
        z-index: 1;
        position: absolute;
        bottom: 2%;
        right: 3%;
        width: 25px;
        height: 25px;
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
        padding-right: 0rem;
        justify-content: end;
    }
    .evenPage {
        justify-content: start;
        padding-left: 2rem;
    }
    ::-webkit-scrollbar {
        background: var(--custom-input-border) !important;
        height: 4px !important;
        width: 4px !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 5px !important;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--custom-input-border) !important;
        height: 4px !important;
        width: 4px !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 5px !important;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--custom-orange-color) !important;
        height: 0px !important;
        width: 0px !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 5px !important;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--custom-orange-color) !important;
        height: 4px !important;
        width: 0px !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 5px !important;
    }
`;
export const Page = forwardRef((props, ref) => {
    // initializing
    const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);
    const dispatch = useDispatch();

    // assigning values
    const pageNumber = props.data.pageNumber;

    const contentData = useSelector((state) => state.content);
    var indexPageNum = contentData.content.findIndex((item) => item.pageNumber === pageNumber);
//  console.log( contentData.content[indexPageNum].pageNumber,"contentData")


    // className For blog page
    const classNameForBlog = `blog_open_${contentData}`;

    if (indexPageNum === -1) {
        indexPageNum = 0;
    }

    const {
        loading,
        pageContent: content,
		blog:blogContent,
		blogListId,
        page,
        section,
        count,
        pageClass,
    } = contentData.content[indexPageNum];

 

    useEffect(() => {
        dispatch(fetchContent(pageNumber, paginationCurrentPage));
    }, [paginationCurrentPage, dispatch, pageNumber]);

    const blogCont = {
        title: "From The Dashboariosa 2.0!”",
        mainImage: "main-image.jpg",
        body: "ddd",
    };

    return (
        <div
            className={`page softPage ${pageNumber}`}
            ref={ref}
            data-density={props.data.density | "soft"}
        >
            <PageWrapper imag={props?.data?.imag} pageNumber={pageNumber}>
                <div className="pageInner">
                    <div
                        className={`contentOuter  ${
                            contentData?.content[pageNumber - 1]
                                ? contentData?.content[pageNumber - 1].pageClass
                                    ? contentData?.content[pageNumber - 1].pageClass
                                    : "blog_open"
                                : ""
                        }`}
                    >
                        <h2
                            className={`heading ${
                                props.data.name.length < 40
                                    ? ""
                                    : props?.data?.name.length >= 41 ||
                                      props?.data?.name.length <= 80
                                    ? "word1"
                                    : "word2"
                            }`}
                        >
                            {props.data.name}
                        </h2>
                        {loading ? (
                            <BookLoader size={5} />
                        ) : (
                            <>
                                {contentData?.content[pageNumber - 1] ? (
                                    contentData?.content[pageNumber - 1].pageClass ===
                                    "blog_open" ? (
                                        <BlogPage blog={blogContent} />
                                    ) : contentData?.content[pageNumber - 1].pageClass ===
                                      "contact_us" ? (
                                        <BlogComp blog={blogCont} />
                                    ) : (
                                        
                                        <Records
                                            count={contentData?.content[indexPageNum]?.count}
                                            data={content}
                                            page={page}
											blogListId={blogListId}
                                            paginationCurrentPage={paginationCurrentPage}
                                            setPaginationCurrentPage={setPaginationCurrentPage}
                                        />
                                    )
                                ) : (
                                    ""
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div
                    className={`page-footer pageNumber ${
                        props?.data?.pageNumber % 2 === 0 ? "oddPage" : "evenPage"
                    }`}
                >
                    <span>{props?.data?.pageNumber}</span>
                </div>
            </PageWrapper>
        </div>
    );
});
