import React from "react";
import styled from "styled-components";
import closeBtn from "../../static/images/Auth/4385047@0.png";

const Wrapper = styled.div`
    border-radius: 2.4rem;
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 5%;
    right: 5%;

    :hover img {
        transform: scale(1.2);
    }
    img {
        transition: ease-in-out 0.5s;
        width: 30px;
        height: 30px;
        object-fit: contain;
        border-radius: 50%;
        background: var(--custom-black);
        padding: 0.2rem;
        cursor: pointer;
    }
`;

export const CloseBtn = ({ handleOnClickClose }) => {
    return (
        <Wrapper>
            <img onClick={handleOnClickClose} src={closeBtn} alt="close" />
        </Wrapper>
    );
};
