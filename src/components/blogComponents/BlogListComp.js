import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchBlog } from "../../store/actions/blogsActions";
const StyledComponent = styled.ul`
    list-style: none;
    background-color: var(--custom-light-bg);
    backdrop-filter: blur(10px);
    height: inherit;
    margin: 0;
    padding: 0;
    li {
        a {
            text-decoration: none;
            display: flex;
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
                    max-width: 50px;
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
`;
const BlogListComp = ({ blogsInfo, setShowBlogList }) => {
    const dispatch = useDispatch();
// console.log(blogsInfo,"blogsInfo")
    const loadBlog = (url) => {
        dispatch(fetchBlog(url));
        setShowBlogList(false);
    };

    return (
        <StyledComponent>
            {blogsInfo.map((blogInfo) => (
                <li>
                    <Link to={""} onClick={() => loadBlog(blogInfo.blog)}>
                        <span>
                            <img src={blogInfo.blogCoverImg} alt="" />
                        </span>
                        <div className="detail">
                            <h3>{blogInfo.blogName}</h3>
                            <p>{blogInfo.blog}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </StyledComponent>
    );
};

export default BlogListComp;
