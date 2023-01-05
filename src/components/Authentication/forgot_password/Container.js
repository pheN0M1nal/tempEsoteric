import { AuthMainContainer } from "../components/AuthMainContainer";
import { ForgotPasswordForm } from "./Form";

const ForgotPasswordContainer = ({ showLogin }) => {
    return (
        <AuthMainContainer mode={"forgot_password"} modeimg={"forgot_password"}>
            <div className="LoginFormOuter">
                <ForgotPasswordForm showLogin={showLogin} />
            </div>
        </AuthMainContainer>
    );
};
export default ForgotPasswordContainer;
