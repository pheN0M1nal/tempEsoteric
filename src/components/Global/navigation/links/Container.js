import styled from "styled-components";
import { NavigationLink } from "./NavigationLink";
// import { createContext, useEffect, useState } from "react";
import { NavList } from "../config";
import { useContext } from "react";
import { GlobalUserProfileContext } from "../../../../App";

// const StyledComponentAdmin = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-top: 3rem;
// `;
const StyledComponent = styled.div`
    display: flex;
    margin: 2rem 2rem 2rem 0;

    font-family: var(--font-1);
    @media screen and (max-width: 875px) {
        display: none;
    }
`;

export const NavigationLinksContainer = () => {
    const { profile } = useContext(GlobalUserProfileContext);

    return NavList.map((item, i) => {
        if (item.availableFor) {
            if (
                profile?.account_type &&
                item.availableFor.includes(profile?.account_type) &&
                !item.isFooterEnable
            ) {
                return <NavigationLink key={i} config={item} />;
            }
            return null;
        }
        return <NavigationLink key={i} config={item} />;
    });
};

export const FooterNavigationLinksContainer = () => {
    const { profile } = useContext(GlobalUserProfileContext);
    return (
        <StyledComponent>
            {NavList.map(
                (item, i) =>
                    item.isFooterEnable &&
                    profile?.account_type === "Users" && <NavigationLink key={i} config={item} />
            )}
        </StyledComponent>
    );
};
