import {MainWrapper} from "../../Global/MainWrapper";
import {AuthMainContainer} from "../components/AuthMainContainer";
import {VerifyEmailForm} from "./Form";

const VerifyEmailContainer = () => {
    return (
        <Wrapper>
            <AuthMainContainer mode={"verifying_email"}>
                <div className="LoginFormOuter">
                    <VerifyEmailForm/>
                </div>
            </AuthMainContainer>
        </Wrapper>
    );
};

export default VerifyEmailContainer;
