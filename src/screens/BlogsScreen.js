import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BlogComp from "../components/blogComponents/BlogComp";
import BlogListComp from "../components/blogComponents/BlogListComp";
import Labels from "../components/blogComponents/Labels";
import { TopBar } from "../components/Global/TopBar";
import LabelsImg from "../static/images/Auth/3664039@0.png";
const StyledComponent = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    #labelNav {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: auto;
        right: 0;
        top: 80px;
        z-index: 1;
        animation-duration: 500ms;
        animation-name: showPopNav;
        animation-timing-function: ease-in;
        width: 100%;
        max-width: fit-content;

        @media (max-width: 750px) {
            top: 127px;
        }
        @keyframes showPopNav {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                cursor: pointer;
                a {
                    border: 1px solid var(--custom-border-color);
                    background-color: var(--custom-light-bg);
                    /* border-radius: 2.4rem; */
                    padding: 0.5rem 1rem;
                    display: flex;
                    justify-content: start;
                    width: 100%;
                    color: #000;
                    text-decoration: none;
                    span.badge {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 2.4rem;
                        background-color: var(--custom-orange-color);
                        color: #fff;
                    }
                }
            }
        }

        .logout-button {
            text-decoration: none;
            font-size: var(--font-14);
            font-family: var(--font-1);
            font-weight: 500;
            display: flex;
            align-items: center;
            padding: 0.3rem 0 0.3rem 0.4rem;
            border: 1px solid var(--custom-border-color);
            border-radius: 2.4rem;
            background-color: var(--custom-light-bg);
            color: var(--custom-txt-color);
            letter-spacing: 1px;
            margin: 0.2rem 0;
            img {
                width: 30px;
                height: 30px;
                object-fit: cover;
                padding: 0.3rem;
                border-radius: 50%;
            }
            :hover {
                box-shadow: var(--custom-shadow);
            }
        }
    }
    #labelNav.active {
        display: initial;
    }
`;
const BlogComponent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 90vh;
    overflow: auto;

    img {
        width: 100%;
        max-width: 60%;
    }
`;
const BlogOuterWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    position: absolute;
    left: ${(props) => (props?.show ? `${-350}px` : "0px")};
    top: 80px;
    height: ${(props) => (props?.show ? `${0}vh` : "90vh")};
    @media (max-width: 750px) {
        top: 130px;
        left: ${(props) => (props?.show ? `${-300}px` : "0px")};
        max-width: 300px;
    }
    .showBlogList {
        position: absolute;
        width: fit-content;
        height: 8rem;
        top: 0%;
        padding: 0.5rem 0.5rem;
        left: 100%;
        background-color: var(--custom-light-bg);
        text-decoration: none;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        writing-mode: vertical-rl;
    }
`;

export const BlogsScreen = () => {
    const [showLabelList, setShowLabelList] = useState(false);
    const [showBlogList, setShowBlogList] = useState(true);

    const blogsInfoFromLabel = useSelector((state) => state.blogsInfoFromLabel);
    const { blogsInfo } = blogsInfoFromLabel;
    const fetchAndParseDataFromAPI = () => {};
    const handleCloseBlogList = (data) => {
        setShowBlogList(data);
    };
    const query = ["s", "a"];
    return (
        <StyledComponent>
            <TopBar
                setShowLabelList={setShowLabelList}
                showLabelList={showLabelList}
                title="Labels "
                fetchAndParseDataFromAPI={fetchAndParseDataFromAPI}
                query={query}
                LabelsImg={LabelsImg}
            />
            {showLabelList ? (
                <div id="labelNav">
                    <Labels />
                </div>
            ) : null}
            <BlogOuterWrapper show={showBlogList} onClick={() => setShowLabelList(false)}>
                <BlogListComp blogsInfo={blogsInfo} setShowBlogList={handleCloseBlogList} />
                {blogsInfo.length !== 0 && (
                    <Link
                        to=""
                        className="showBlogList"
                        onClick={() => setShowBlogList(!showBlogList)}
                    >
                        BLOG LIST
                    </Link>
                )}
            </BlogOuterWrapper>
            <BlogComponent>
                <BlogComp />
            </BlogComponent>
        </StyledComponent>
    );
};
