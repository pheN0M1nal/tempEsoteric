import { useContext } from "react";
import styled from "styled-components";
import { GlobalUserProfileContext } from "../../App";

const StyledComponent = styled.div`
    min-height: ${({ height }) => (height === "Admin" ? "100%" : "85vmin")};
    background-color: var(--custom-main-bg);
    display: flex;
    justify-content: center;
    ${"" /* align-items: center; */}
    overflow: hidden;
`;

export const MainContainer = (props) => {
    const { profile } = useContext(GlobalUserProfileContext);
    return <StyledComponent height={profile?.account_type}>{props.children}</StyledComponent>;
};
