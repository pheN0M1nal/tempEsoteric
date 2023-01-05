import { useEffect, useState } from "react";
import { Button } from "../../Global/Button";
import { SizedBox } from "../../Global/SizedBox";
import { FormComponent } from "../components/FormElement";
import { InputComponent } from "../components/InputELement";
import { useNavigate, useLocation } from "react-router-dom";
import { HandleOnChangeInput } from "../../../helpers/formInput/HandleOnChangeInput";
import styled from "styled-components";
import { Spinner } from "../../Global/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { AuthButtonContainer } from "../components/AuthButtonContainer";
import { notifyFailure } from "../../../helpers/notifications/notifyFailure";
import { resetPassword } from "../../../store/actions/userActions";

const Wrapper = styled.div`
    form {
        @media (max-width: 1100px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    input {
        @media (max-width: 1100px) {
            max-width: 100%;
        }
    }
`;

export const ResetPasswordForm = ({ ShowForgotPassword, emailVerificationID }) => {
    const [data, setData] = useState({});
    const [resetPasswordToken, setResetPasswordToken] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const Info = useSelector((state) => state.userResetPass);
    let { error, loading, success } = Info;

    // notifying if error from reducer state
    error && notifyFailure(error);
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        if (query.get("token")) {
            setResetPasswordToken(query.get("token"));
        }
    }, [location]);
    const validateFields = () => {
        let state = true;
        const fields = ["confirm_password", "password"];
        for (let field of fields) {
            if (!data[field]) {
                notifyFailure(`${field} is required`);
                state = false;
            }
        }
        return state;
    };
    const handleOnClickButton = (e) => {
        e.preventDefault();
        if (!validateFields()) {
            return;
        }
        const requestData = {
            ...data,
            token: resetPasswordToken,
        };
        handleProceedResetPassword(requestData);
    };

    const handleProceedResetPassword = (requestData) => {
        dispatch(resetPassword(requestData));
    };
    const handleGoToForgotPass = (e) => {
        e.preventDefault();
        setShowSpinner(true);
        ShowForgotPassword();
        setShowSpinner(false);
    };

    return (
        <Wrapper>
            <FormComponent>
                <label htmlFor="pass">New Password</label>
                <InputComponent
                    id="pass"
                    type="password"
                    value={data?.password}
                    onChange={(e) => HandleOnChangeInput(e, "password", setData, data)}
                />
                <label htmlFor="cnfpass">Confirm Password</label>
                <InputComponent
                    id="cnfpass"
                    type="password"
                    value={data?.confirm_password}
                    onChange={(e) => HandleOnChangeInput(e, "confirm_password", setData, data)}
                />
                <SizedBox height={1.5} />
                <AuthButtonContainer>
                    {!loading ? (
                        <div className="formfooter">
                            <Button
                                fontWeight={500}
                                fontSize={18}
                                maxWidth={200}
                                textTransform={"uppercase"}
                                borderRadius={1.5}
                                height={35}
                                paddingTopBottom={0.4}
                                onClick={handleOnClickButton}
                            >
                                UPDATE
                            </Button>
                            <SizedBox height={3.0} />
                            <p>
                                Do You Want To Go Back?
                                <strong onClick={(e) => handleGoToForgotPass(e)}>
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
