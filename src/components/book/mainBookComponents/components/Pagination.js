import React from "react";
import styled from "styled-components";
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
        }
    }
    .pagination {
        display: flex;
        list-style: none;
    }

    .page-link {
        position: relative;
        display: block;
        color: #DAA520;
        text-decoration: none;
        background-color: #fff;
        border: .1px solid #DAA520;

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
            background-color: #DAA520;
            border-color:#DAA520;
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
                    <a className="page-link" onClick={prevPage} href="#">
                        &#60;&#60;
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
                    <a className="page-link" onClick={nextPage} href="#">
                        &#62;&#62;
                    </a>
                </li>
            </ul>
        </Nav>
    );
};

export default Pagination;
