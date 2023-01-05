import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ModalComponent } from "../Global/Modal";
import { hideLoginModal } from "../../store/actions/modalActions";
import { useDispatch } from "react-redux";
import LoginContainer from "../Authentication/login/Container";
import ForgotPasswordContainer from "../Authentication/forgot_password/Container";
import RegisterContainer from "../Authentication/signup/Container";
import styled from "styled-components";
import { CloseBtn } from "../Global/CloseBtn";
import { ResetPasswordContainer } from "../Authentication/reset_password/Container";
// import { ResetPasswordContainer } from "../Authentication/reset_password/Container";

const Wrapper = styled.div`
    background-color: var(--custom-white);
    width: 100%;
    max-width: 1200px;
    overflow: auto;
    height: auto;
    border-radius: 10px;
    position: relative;
    @media (max-width: 1100px) {
        margin-top: 30rem;
        margin-bottom: 5rem;
    }
`;

const Login = () => {
    const [showLoginComp, setShowLoginComp] = useState(true);
    const [showRegisterComp, setShowRegisterComp] = useState(false);
    const [showForgetPassComp, setShowForgetPassComp] = useState(false);
    const [showResetPassComp, setShowResetPassComp] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const dispatch = useDispatch();

    const loginModal = useSelector((state) => state.loginModal);
    const { show } = loginModal;

    const callbackCloseModal = () => {
        dispatch(hideLoginModal());
    };

    const ShowLogin = () => {
        setShowLoginComp(true);
        setShowRegisterComp(false);
        setShowForgetPassComp(false);
        setShowResetPassComp(false);
    };

    const ShowRegister = () => {
        setShowLoginComp(false);
        setShowRegisterComp(true);
        setShowForgetPassComp(false);
        setShowResetPassComp(false);
    };
    const ShowForgotPassword = () => {
        setShowLoginComp(false);
        setShowRegisterComp(false);
        setShowForgetPassComp(true);
        setShowResetPassComp(false);
    };
    const ShowResetPassword = () => {
        setShowLoginComp(false);
        setShowRegisterComp(false);
        setShowForgetPassComp(false);
        setShowResetPassComp(true);
    };

    return (
        <ModalComponent
            isOpen={show}
            onRequestClose={callbackCloseModal}
            contentLabel={"Login-SignUp"}
            classNameFromProps="login_model"
        >
            <Wrapper>
                {showLoginComp && (
                    <LoginContainer
                        showRegister={ShowRegister}
                        showForgotPassword={ShowForgotPassword}
                        setOpenLogin={setOpenLogin}
                        openLogin={openLogin}
                    />
                )}
                {showRegisterComp && (
                    <RegisterContainer
                        showLogin={ShowLogin}
                        setOpenLogin={setOpenLogin}
                        openLogin={openLogin}
                    />
                )}
                {showForgetPassComp && (
                    <ForgotPasswordContainer
                        showLogin={ShowLogin}
                        setOpenLogin={setOpenLogin}
                        ShowResetPassword={ShowResetPassword}
                        openLogin={openLogin}
                    />
                )}
                {showResetPassComp && (
                    <ResetPasswordContainer
                        setOpenLogin={setOpenLogin}
                        ShowForgotPassword={ShowForgotPassword}
                        openLogin={openLogin}
                    />
                )}

                <CloseBtn handleOnClickClose={callbackCloseModal} />
            </Wrapper>
        </ModalComponent>
    );
};

export default Login;
