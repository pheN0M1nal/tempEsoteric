import styled from "styled-components";
import { NavigationLink } from "./NavigationLink";
import { NavList } from "../config";
import { SizedBox } from "../../SizedBox";


const StyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: fixed;
    left: 1rem;
    z-index: 20;
    right: 1rem;
    top: 76px;
    background: var(--custom-white);
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 2rem 1rem;
    min-width: 15rem;
    animation-duration: 200ms;
    animation-name: showPopNavMobile;
    animation-timing-function: linear;
    box-shadow: 0 0px 6px rgb(0 0 0 / 0.1);

    @keyframes showPopNavMobile {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0%);
        }
    }

    @media screen and (min-width: 875px) {
        display: none;
    }
`;

export const MobileNavContainer = () => {
    return (
        <StyledComponent>
            {NavList.map((item) => (
                <>
                    <NavigationLink config={item} resolutionMode={"mobile"} />
                    <SizedBox height={1} />
                </>
            ))}
        </StyledComponent>
    );
};
