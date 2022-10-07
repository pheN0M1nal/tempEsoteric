import React from "react";
import classnames from "classnames";
import { UsePagination, DOTS } from "./UsePagination";
import styled from "styled-components";

const StyledComponent = styled.div`
    .pagination-container {
        display: flex;
        list-style-type: none;
        margin: 1rem 0;
        justify-content: right;
        margin-right: 2rem;
        .pagination-item {
            padding: 0 12px;
            min-width: 32px;
            height: 32px;
            text-align: center;
            margin: auto 4px;
            color: #000;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            letter-spacing: 0.01071em;
            border: 1px solid #aab8b6;
            border-radius: 0;
            line-height: 1.43;
            font-size: 16px;

            &.dots:hover {
                background-color: transparent;
                cursor: default;
            }
            &:hover {
                background-color: #aab8b6;
                cursor: pointer;
                color: #fff;
            }

            &.selected {
                background-color: #aab8b6;
                color: #fff;
            }

            .arrow {
                &::before {
                    position: relative;
                    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
                    content: "";
                    /* By using an em scale, the arrows will size with the font */
                    display: inline-block;
                    width: 0.4em;
                    height: 0.4em;
                    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
                    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
                }

                &.left {
                    transform: rotate(-135deg) translate(-50%);
                }

                &.right {
                    transform: rotate(45deg);
                }
            }
            &:hover ::before {
                border-color: #fff;
            }

            &.disabled {
                pointer-events: none;

                .arrow::before {
                    border-right: 0.12em solid rgba(0, 0, 0, 0.43);
                    border-top: 0.12em solid rgba(0, 0, 0, 0.43);
                }

                &:hover {
                    background-color: transparent;
                    cursor: default;
                }
            }
        }
    }
`;
const Pagination = (props) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = UsePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange?.length - 1];
    return (
        <StyledComponent>
            <ul className={classnames("pagination-container", { [className]: className })}>
                {/* Left navigation arrow */}
                <li
                    className={classnames("pagination-item", {
                        disabled: currentPage === 1,
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left" />
                </li>
                {paginationRange?.map(
                    (pageNumber, i) =>
                        // If the pageItem is a DOT, render the DOTS unicode character

                        pageNumber === DOTS ? (
                            <li key={i} className="pagination-item dots">
                                &#8230;
                            </li>
                        ) : (
                            <li
                                key={i}
                                className={classnames("pagination-item", {
                                    selected: pageNumber === currentPage,
                                })}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </li>
                        )

                    // Render our Page Pills
                    // code added 
                )}
                {/*  Right Navigation arrow */}
                <li
                    className={classnames("pagination-item", {
                        disabled: currentPage === lastPage,
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right" />
                </li>
            </ul>
        </StyledComponent>
    );
};

export default Pagination;
