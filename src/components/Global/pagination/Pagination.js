import React from "react";
import classnames from "classnames";
import { UsePagination, DOTS } from "./UsePagination";
import styled from "styled-components";
import prev from "../../../static/images/Auth/4980083@0.png";
import next from "../../../static/images/Auth/4980081@0.png";

const StyledComponent = styled.div`
    .pagination-container {
        display: flex;
        list-style-type: none;
        margin: 1rem 0;
        justify-content: right;
        margin-right: 2rem;
        .pagination-item {
            width: 30px;
            height: 30px;

            text-align: center;
            margin: auto 2px;
            color: #000;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.01071em;
            border: 1px solid var(--custom-orange-color);
            border-radius: 2.4rem;
            line-height: 1.43;
            font-size: 16px;
            @media (max-width: 1400px) {
                width: 25px;
                height: 25px;
            }
            &.dots:hover {
                background-color: transparent;
                cursor: default;
            }
            &:hover {
                background-color: var(--custom-orange-color);
                cursor: pointer;
                color: #fff;
            }

            &.selected {
                background-color: var(--custom-orange-color);
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

                /* &.left {
                    transform: rotate(-135deg) translate(-50%);
                }

                &.right {
                    transform: rotate(45deg);
                } */
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
        .leftArrow,
        .rightArrow {
            border: 0;
            width: 30px;
            height: 30px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    .pagination-item.dots {
        border: 0;
        font-size: 22px;
        align-items: flex-end;
        color: blue;
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
        if (currentPage !== totalCount) onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
        if (currentPage !== 1) onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange?.length - 1];
    return (
        <StyledComponent>
            <ul className={classnames("pagination-container", { [className]: className })}>
                {/* Left navigation arrow */}
                <li
                    className={classnames("pagination-item leftArrow", {
                        disabled: currentPage === 1,
                    })}
                    onClick={onPrevious}
                >
                    <img src={prev} alt="prev" />
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
                    className={classnames("pagination-item rightArrow", {
                        disabled: currentPage === lastPage,
                    })}
                    onClick={onNext}
                >
                    <img src={next} alt="next" />
                </li>
            </ul>
        </StyledComponent>
    );
};

export default Pagination;
