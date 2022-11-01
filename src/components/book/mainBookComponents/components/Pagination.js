import React from "react";
import styled from "styled-components";

import prev from "../../../../static/images/Auth/4980083@0.png"
import next from "../../../../static/images/Auth/4980081@0.png"

const Nav = styled.div`
    ul {
        padding: 0;
        margin: 0;
        li {
            .page-item {
                a.page-link {
                    color: #000;
                }
            }
            a.page-link.next,a.page-link.prev {
                border:0px ;
                margin:0rem;
            }
            img{
                width:20px ;
                height: 20px;
                object-fit: cover;
            }
        }
    }
    .pagination {
        display: flex;
        list-style: none;
    }

    .page-link {
        position: relative;
        display: block;
        color: #daa520;
        text-decoration: none;
        background-color: #fff;
        border: 0.1px solid #daa520;
        padding: 0rem 0.475rem;
        border-radius: 2.4rem;
        margin:0 .5rem;
        &:hover {
            z-index: 2;
            color: $pagination-hover-color;
            text-decoration: if($link-hover-decoration == underline, none, null);
            background-color: $pagination-hover-bg;
            border-color: $pagination-hover-border-color;
        }

        &:focus {
            z-index: 3;
            color: $pagination-focus-color;
            background-color: $pagination-focus-bg;
            outline: $pagination-focus-outline;
            box-shadow: $pagination-focus-box-shadow;
        }
    }

    .page-item {
        &:not(:first-child) .page-link {
            margin-left: $pagination-margin-start;
        }

        &.active .page-link {
            z-index: 3;
            color: $pagination-active-color;
            background-color: #daa520;
            border-color: #daa520;
        }

        &.disabled .page-link {
            color: $pagination-disabled-color;
            pointer-events: none;
            background-color: $pagination-disabled-bg;
            border-color: $pagination-disabled-border-color;
        }
    }
`;
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    return (
        <Nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link prev" onClick={prevPage} href="#">
                    <img src={prev} alt="prev"/>
                    </a>
                </li>
                {pageNumbers.map((pgNumber) => (
                    <li
                        key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
                    >
                        <a onClick={() => setCurrentPage(pgNumber)} className="page-link" href="#">
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link next" onClick={nextPage} href="#">
                        <img src={next} alt="next"/>
                    </a>
                </li>
            </ul>
        </Nav>
    );
};

export default Pagination;
