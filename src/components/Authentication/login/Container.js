import { MainWrapper } from "../../Global/MainWrapper";
import { AuthMainContainer } from "../components/AuthMainContainer";
import { LoginForm } from "./Form";

const LoginContainer = ({ showRegister, showForgotPassword }) => {
    return (
        <AuthMainContainer mode={"login"} modeimg={"login"}>
            <div className="LoginFormOuter">
                <LoginForm showRegister={showRegister} showForgotPassword={showForgotPassword} />
            </div>
        </AuthMainContainer>
    );
};

export default LoginContainer;
