import { AuthMainContainer } from "../components/AuthMainContainer";
import { RegistrationForm } from "./Form";
import styled from "styled-components";

const Wrapper = styled.div`
    .LoginFormOuter {
        border-radius: 10px;

        max-width: 90%;
        margin: 0 auto;
        margin-left: 3%;
        padding: 0rem 0rem 2rem;

        .profilePicturePickerWrapper {
            height: 3rem;
            margin-top: 1rem;
        }
        .profilePicturePickerWrapper > div {
            justify-content: space-around;
            gap: 0.5rem;
            .controlsWrapperImage .text {
                color: var(--custom-txt-color);
                font-size: 1rem;
                font-weight: 400;
                @media (max-width: 426px) {
                    font-size: 0.7rem;
                }
                @media (max-width: 375px) {
                    display: none;
                }
            }
            .controlsWrapperImage {
                flex-direction: row;
                align-items: flex-end;
                justify-content: space-between;
                width: 100%;
                border-bottom: 1px solid var(--custom-border-color);
                padding-bottom: 0.7rem;
            }
            .controlsWrapperImage button {
                background-color: #f3f3f2;
                color: black;
                font-size: 1rem;
                border-radius: 2.5rem;
            }
            .imageWrapper {
                display: none;
            }
        }
        form {
            max-width: 100%;
            width: 100%;
            gap: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .inputOuter {
                width: 48%;
                @media (max-width: 810px) {
                    width: 100%;
                    input {
                        max-width: 100%;
                    }
                }
            }
        }
    }
`;

const RegisterContainer = ({ showLogin }) => {
    return (
        <Wrapper>
            <AuthMainContainer mode={"register"} modeimg={"register"}>
                <div className="LoginFormOuter">
                    <RegistrationForm showLogin={showLogin} />
                </div>
            </AuthMainContainer>
        </Wrapper>
    );
};

export default RegisterContainer;
