import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { fetchBlog } from "../../store/actions/blogsActions";
const StyledComponent = styled.div`
    background-color: var(--custom-light-bg);
    height: inherit;
    padding: 0.5rem;
    .heading {
        font-size: 1.2rem;
        text-align: center;
        margin: 0;
        padding: 1rem 0;
        background-color: var(--custom-border-color);
        border: 4px solid var(--custom-border-color);
    }
    ul {
        list-style: none;
        height: 93%;
        backdrop-filter: blur(10px);
        margin: 0;
        padding: 0;
        overflow: auto;
        .active {
            background-color: #ffffff85;
        }
        li {
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                gap: 1rem;
                padding: 0.5rem 1rem;
                border-bottom: 1px solid var(--custom-border-color);

                .detail {
                    display: flex;
                    flex-direction: column;
                }
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 50px;
                        height: 50px;
                        object-fit: contain;
                        border-radius: 5px;
                        overflow: hidden;
                    }
                }
                h3 {
                    font-size: 1.1rem;
                }
                p {
                    font-size: 1rem;
                    text-align: left;
                }
            }
        }
    }
`;
const BlogListComp = ({ blogsInfo, blogId, loadBlogInfo, blogListId }) => {
    return (
        <StyledComponent>
            <h5 className="heading">{blogsInfo[0]?.blogListName}</h5>
            <ul>
                {blogsInfo[0]?.pageContent.map((blogInfo, i) => {
                    return (
                        <li className={`${blogId == blogInfo.blogId ? "active" : ""}`} key={i}>
                            <Link
                                to={""}
                                onClick={() => loadBlogInfo(blogListId, blogInfo?.blogId)}
                            >
                                <span>
                                    <img src={blogInfo.image} alt="" />
                                </span>
                                <div className="detail">
                                    <h3>{blogInfo.title}</h3>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </StyledComponent>
    );
};

export default BlogListComp;
