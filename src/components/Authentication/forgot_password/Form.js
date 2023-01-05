import { useState } from "react";
import { useNavigate } from "react-router";
import { post_resetPasswordStep1, post_verifyEmailStep1 } from "../../../api/EndPoints";
import { notifyFailure } from "../../../helpers/notifications/notifyFailure";
import { notifySuccess } from "../../../helpers/notifications/notifySuccess";
import styled from "styled-components";
import { InputComponent } from "../components/InputELement";
import { FormComponent } from "../components/FormElement";
import { HandleOnChangeInput } from "../../../helpers/formInput/HandleOnChangeInput";
import { SizedBox } from "../../Global/SizedBox";
import { AuthButtonContainer } from "../components/AuthButtonContainer";
import { Button } from "../../Global/Button";
import axiosInstance from "../../../config/api/axois";
import { notifyApiErrorMessage } from "../../../helpers/notifications/notifyApiErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, login, verifyEmailStep1 } from "../../../store/actions/userActions";
import { Spinner } from "../../Global/Spinner";

const Wrapper = styled.div`
    width: 100%;
    min-width: 400px;
    @media (max-width: 600px) {
        min-width: 100%;
    }
    h2 {
        font-size: 2rem;
        font-weight: 400;
        @media (max-width: 600px) {
            font-size: 1.4rem;
        }
    }
`;
export const ForgotPasswordForm = ({ showLogin, ShowResetPassword }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);
    const dispatch = useDispatch();
    const Info = useSelector((state) => state.userForgotPass);
    let { error, loading, success } = Info;
    console.log(Info, "UserInfo");
    // notifying if error from reducer state
    error && notifyFailure(error);
    const baseURL =
        process.env.REACT_APP_NODE_ENV === "production"
            ? `${process.env.REACT_APP_MAIN_SERVER_URL_PRODUCTION}`
            : `${process.env.REACT_APP_MAIN_SERVER_URL_DEVELOPMENT}`;

    const handleSendVarificationEmail = (tempData) => {
       
        console.log("email verify");
        dispatch(verifyEmailStep1(tempData));
    };

    const handleInitiateForgotPassword = async (tempData) => {
        console.log(tempData)
        console.log("email pass");
        dispatch(forgotPassword(tempData));
    };

    const handleGoToLogin = (e) => {
        e.preventDefault();
        setShowSpinner(true);
        showLogin();
        setShowSpinner(false);
    };
    const handleGoToResetPass = (e) => {
        e.preventDefault();
        setShowSpinner(true);
        ShowResetPassword();
        setShowSpinner(false);
    };
    const handleSendVarification = (e) => {
        e.preventDefault();
        if (!data.email) {
            notifyFailure(`email is required`);
        } else {
            if (data.email) {
                
                let tempData = { ...data, page_uri: baseURL };
                
                handleSendVarificationEmail(tempData);
                handleInitiateForgotPassword(tempData);
            }
        }
    };
    return (
        <Wrapper>
            <FormComponent>
                <label htmlFor="forgot">Enter Your Email</label>
                <InputComponent
                    id="forgot"
                    type="email"
                    value={data?.email}
                    onChange={(e) => {
                         HandleOnChangeInput(e, "email", setData, data);
                    }}
                   
                />

                <SizedBox height={1.5} />
                <AuthButtonContainer>
                    {!loading ? (
                        <div className="formfooter">
                            <Button
                                textTransform={"uppercase"}
                                fontSize={16}
                                addEffect={true}
                                paddingLeftRight={3}
                                height={35}
                                BgColor={"orange-color"}
                                border={"border-color"}
                                onClick={(e) => handleSendVarification(e)}
                            >
                                SEND VERFICATION LINK
                            </Button>
                            <SizedBox height={3.0} />
                            <p>
                                Do You Want To Go Back?
                                <strong onClick={handleGoToLogin}>&nbsp;Go To Login</strong>
                            </p>
                            <p>
                                Do You Want To Go Back?
                                <strong onClick={(e) => handleGoToResetPass(e)}>
                                    &nbsp;Go To Reset
                                </strong>
                            </p>

                            <SizedBox height={3.0} />
                        </div>
                    ) : (
                        <Spinner />
                    )}
                </AuthButtonContainer>
            </FormComponent>
        </Wrapper>
    );
};
