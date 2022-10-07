import styled from "styled-components";
import { MainContainer } from "./MainContainer";
import { createContext,  useEffect, useState } from "react";
import { NavigationContainer } from "./navigation/Container";
import { FooterContainer } from "./footer/Container";

const StyledContainer = styled.div`
    padding: 0;
    margin: 0;
    .allOuter {
        display: flex;

        .SideNavBarOuter {
            width: 100%;
            max-width: 310px;
            height: 100%;
            position: relative;
        }
        .MainContent {
            width: 100%;
            height: 100vh;
            background-color: var(--custom-primary-bg);
            color: var(--custom-white);
            overflow: auto;
        }
    }
    .isAdmin {
        @media (max-width: 1000px) {
            flex-direction: column;
        }
        .SideNavBarOuter {
            @media (max-width: 1000px) {
                max-width: 100%;
                width: 100%;
            }
        }
    }
`;

export const NavigationContext = createContext({});

export const MainWrapper = ({ currentPageAnchorKey_, currentSubNavKey_, ...props }) => {
    const [currentSubNavKey, setCurrentSubNavKey] = useState("");
    const [currentPageAnchorKey, setCurrentPageAnchorKey] = useState("");
    const [mobileSubNavEnabled, setMobileSubNavEnabled] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <NavigationContext.Provider
            value={{
                currentSubNavKey,
                setCurrentSubNavKey,
                setCurrentPageAnchorKey,
                currentPageAnchorKey,
                mobileSubNavEnabled,
                setMobileSubNavEnabled,
            }}
        >
            <StyledContainer>
                <div className="allOuter">
                    <div className="MainContent">
                        {/* <NavigationContainer /> */}
                        <MainContainer>{props.children}</MainContainer>
                        {/* <FooterContainer /> */}
                    </div>
                </div>
            </StyledContainer>
        </NavigationContext.Provider>
    );
};
