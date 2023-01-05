import styled from "styled-components";
import { MainWrapper } from "../../Global/MainWrapper";
import { AuthMainContainer } from "../components/AuthMainContainer";
import { LoginForm } from "./Form";
const Wrapper=styled.div`
.LoginFormOuter{
    width:100%;
    max-width:400px;
}
`;
const LoginContainer = ({ showRegister, showForgotPassword }) => {
    return (
        <Wrapper>
        <AuthMainContainer mode={"login"} modeimg={"login"}>
            <div className="LoginFormOuter">
                <LoginForm showRegister={showRegister} showForgotPassword={showForgotPassword} />
            </div>
        </AuthMainContainer>
        </Wrapper>
    );
};

export default LoginContainer;
