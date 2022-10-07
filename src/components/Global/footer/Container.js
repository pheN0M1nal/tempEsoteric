import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalUserProfileContext } from "../../../App";

const StyledComponentsAdmin = styled.div`
    color: var(--custom-footer-txt);
    padding: 0rem 0rem 2rem;
    font-family: var(--font-1);
    max-width: 90%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: 1000px) {
        padding: 0.5rem;
        align-items: center;
        justify-content: center;
    }
    .footerWrapper {
        width: 100%;
        border-top: 1px solid var(--custom-border-color);
        @media (max-width: 1000px) {
            width: 100px;
            border: 0;
        }
        .logout-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-decoration: none;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: var(--custom-txt-color);
            @media (max-width: 1000px) {
                border: 1px solid var(--custom-border-color);
                img {
                    display: none;
                }
            }
        }
    }
`;
const StyledComponents = styled.div`
    color: var(--custom-footer-txt);
    padding: 0rem 0rem 2rem;
    font-family: var(--font-1);
    max-width: 1271px;
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    .footerWrapper {
        width: 100%;
        border-top: 1px solid var(--custom-border-color);
        padding: 0 1rem;
        .authMenuBarWrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 920px) {
                flex-direction: column;
                padding-top: 1rem;
            }
            .authMenuBarLink {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 100%;
                @media (max-width: 920px) {
                    margin-top: 1rem;
                    justify-content: center;
                }
            }
        }
    }
    .copyrightWrapper {
        font-size: 0.8rem;
        color: var(--custom-txt-color);
        letter-spacing: 0.3px;
        @media (max-width: 920px) {
            display: flex;
            margin-top: 1rem;
            justify-content: center;
        }
    }
`;

export const FooterContainer = () => {
    const navigate = useNavigate();
    const handleOnClickButton = () => {
        navigate(`/contactus`, { replace: true });
    };
    const { profile } = useContext(GlobalUserProfileContext);
    return profile?.account_type === "Admin" ? (
        <StyledComponentsAdmin>
            <div className="footerWrapper">
                <Link to="/logout" className="logout-button">
                    Log Out &nbsp;
                    <img src="" alt="logout" />
                </Link>
            </div>
        </StyledComponentsAdmin>
    ) : (
        <StyledComponents>
            <div className="footerWrapper">
                <div className="copyrightWrapper">
                    &copy; 2022 Crazy Matter. All rights reserved.
                </div>
            </div>
        </StyledComponents>
    );
};
