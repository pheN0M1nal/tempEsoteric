import { AuthMainContainer } from "../components/AuthMainContainer";
import { ResetPasswordForm } from "./Form";
import styled from "styled-components";
const Wrapper = styled.div`
    .LoginFormOuter {
        width: 100%;
        max-width: 400px;
    }
`;
export const ResetPasswordContainer = ({ ShowForgotPassword }) => {
    return (
        <Wrapper>
            <AuthMainContainer mode={"reset_password"} modeimg={"forgot_password"}>
                <div className="LoginFormOuter">
                    <ResetPasswordForm ShowForgotPassword={ShowForgotPassword} />
                </div>
            </AuthMainContainer>
        </Wrapper>
    );
};
