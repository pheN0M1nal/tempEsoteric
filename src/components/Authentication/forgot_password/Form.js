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
import { useDispatch } from "react-redux";
import { login } from "../../../store/actions/userActions";
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
export const ForgotPasswordForm = ({ showLogin }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);
    const dispatch = useDispatch();

    const handleSendVarificationEmail = () => {
        let emailVerificationID = 3;
        navigate(`/reset_password:${emailVerificationID}`, {
            replace: true,
        });

        if (data.email) {
            let tempData = { ...data };
            tempData["page_uri"] = "http://127.0.0.1:8000";

            axiosInstance()
                .post(post_verifyEmailStep1(), tempData)
                .then(async (response) => {
                    notifySuccess(`Email Verification link has been sent to ${data?.email}`);
                })
                .catch(async (err) => {
                    notifyApiErrorMessage(err);
                });
        }
    };

    const handleInitiateForgotPassword = async () => {
        setShowSpinner(true);
        axiosInstance()
            .post(post_resetPasswordStep1(), data)
            .then((response) => {
                notifySuccess(`A password reset link has been sent to ${data?.email}`);
                setShowSpinner(false);
            })
            .catch((err) => {
                notifyApiErrorMessage(err);
                setShowSpinner(false);
            });
    };

    const handleGoToLogin = (e) => {
        e.preventDefault();
        showLogin();
    };
    const handleSendVarification = (e) => {
        e.preventDefault();
        if (!data.email) {
            notifyFailure(`email is required`);
        } else {
            handleInitiateForgotPassword();
            handleSendVarificationEmail();
        }
    };
    return (
        <Wrapper>
            <FormComponent>
                <h2>Enter YOUR EMAIL ADDRESS</h2>

                <InputComponent
                    placeholder={"Email"}
                    type="email"
                    value={data?.email}
                    onChange={(e) => {
                        e.charCode === 13 && HandleOnChangeInput(e, "email", setData, data);
                    }}
                />
                <SizedBox height={1.5} />
                <AuthButtonContainer>
                    {!showSpinner ? (
                        <>
                            <Button
                                textTransform={"uppercase"}
                                height={54}
                                fontSize={16}
                                maxWidth={250}
                                onClick={() => handleSendVarification()}
                            >
                                SEND VERFICATION LINK
                            </Button>
                            <SizedBox height={1.0} />
                        </>
                    ) : (
                        <Spinner />
                    )}
                </AuthButtonContainer>
                <AuthButtonContainer>
                    {!showSpinner ? (
                        <>
                            <Button
                                textTransform={"uppercase"}
                                height={54}
                                fontSize={16}
                                maxWidth={250}
                                onClick={handleGoToLogin}
                            >
                                Go Back To Login
                            </Button>
                            <SizedBox height={1.0} />
                        </>
                    ) : (
                        <Spinner />
                    )}
                </AuthButtonContainer>
            </FormComponent>
        </Wrapper>
    );
};
