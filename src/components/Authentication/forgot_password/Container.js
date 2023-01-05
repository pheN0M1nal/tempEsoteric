import { AuthMainContainer } from "../components/AuthMainContainer";
import { ForgotPasswordForm } from "./Form";
import styled from "styled-components";
const Wrapper = styled.div`
    .LoginFormOuter {
        width: 100%;
        max-width: 400px;
    }
`;
const ForgotPasswordContainer = ({ showLogin, ShowResetPassword }) => {
    return (
        <Wrapper>
            <AuthMainContainer mode={"forgot_password"} modeimg={"forgot_password"}>
                <div className="LoginFormOuter">
                    <ForgotPasswordForm
                        showLogin={showLogin}
                        ShowResetPassword={ShowResetPassword}
                    />
                </div>
            </AuthMainContainer>
        </Wrapper>
    );
};
export default ForgotPasswordContainer;
