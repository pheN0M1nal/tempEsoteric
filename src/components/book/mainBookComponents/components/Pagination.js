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
        @include list-unstyled();
    }

    .page-link {
        position: relative;
        display: block;
        color: $pagination-color;
        text-decoration: if($link-decoration == none, null, none);
        background-color: $pagination-bg;
        border: $pagination-border-width solid $pagination-border-color;
        @include transition($pagination-transition);

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
            @include gradient-bg($pagination-active-bg);
            border-color: $pagination-active-border-color;
        }

        &.disabled .page-link {
            color: $pagination-disabled-color;
            pointer-events: none;
            background-color: $pagination-disabled-bg;
            border-color: $pagination-disabled-border-color;
        }
    }

    //
    // Sizing
    //
    @include pagination-size(
        $pagination-padding-y,
        $pagination-padding-x,
        null,
        $pagination-border-radius
    );

    .pagination-lg {
        @include pagination-size(
            $pagination-padding-y-lg,
            $pagination-padding-x-lg,
            $font-size-lg,
            $pagination-border-radius-lg
        );
    }

    .pagination-sm {
        @include pagination-size(
            $pagination-padding-y-sm,
            $pagination-padding-x-sm,
            $font-size-sm,
            $pagination-border-radius-sm
        );
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
