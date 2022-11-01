import React from "react";
import { Link } from "react-router-dom";
import Home from "../../static/images/Auth/5313699@0.png";
import styled from "styled-components";
import { Search } from "./Search";
import { useDispatch } from "react-redux";
import { hideBlogModal } from "../../store/actions/modalActions";

const Wrapper = styled.div`
    /* background-color: var(--custom-light-bg); */
    .blogLabelOuter {
        font-weight: 500;
        font-size: 1rem;
        color: var(--custom-txt-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        border-radius: 2.5rem;
        padding: 0.8rem 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
        @media (max-width: 750px) {
            flex-direction: column;
        }
        .navBtn {
            display: flex;
            gap: 1rem;
            @media (max-width: 750px) {
                width: 100%;
                justify-content: space-between;
            }
        }
        .logout-button {
            text-decoration: none;
            font-size: var(--font-14);
            font-family: var(--font-1);
            font-weight: 500;
            display: flex;
            align-items: center;
            padding: 0.4rem 0.8rem 0.4rem 0.8rem;
            border: 1px solid var(--custom-border-color);
            border-radius: 2.4rem;
            background-color: var(--custom-light-bg);
            color: var(--custom-txt-color);
            letter-spacing: 1px;
            margin: 0.2rem 0;
            cursor: pointer;
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
`;
export const TopBar = ({
    title,
    setShowLabelList,
    showLabelList,
    fetchAndParseDataFromAPI,
    query,
    LabelsImg,
}) => {
    const dispatch = useDispatch();

    function closeModal() {
        dispatch(hideBlogModal());
    }

    return (
        <Wrapper>
            <div className="blogLabelOuter">
                <Search fetchAndParseDataFromAPI={fetchAndParseDataFromAPI} query={query} />
                <div className="navBtn">
                  
                    <Link
                        onClick={() => setShowLabelList(!showLabelList)}
                        className="logout-button logout1"
                    >
                        <img src={LabelsImg} alt="userprofile" />
                        &nbsp; {title}
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};
