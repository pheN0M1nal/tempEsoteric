import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ModalComponent } from "../Global/Modal";
import { hideLoginModal } from "../../store/actions/modalActions";
import { useDispatch } from "react-redux";
import LoginContainer from "../Authentication/login/Container";
import ForgotPasswordContainer from "../Authentication/forgot_password/Container";
import RegisterContainer from "../Authentication/signup/Container";
import closeBtn from "../../static/images/Auth/2389848@1.png";
import styled from "styled-components";
import { CloseBtn } from "../Global/CloseBtn";
// import { ResetPasswordContainer } from "../Authentication/reset_password/Container";

const Wrapper = styled.div`
    background-color: var(--custom-white);
    width: 100%;
    max-width: 1200px;
    overflow: auto;
    border-radius: 10px;
    position: relative;
    @media (max-width: 1100px) {
        margin-top: 30rem;
    }
`;

const Login = () => {
    const [showLoginComp, setShowLoginComp] = useState(true);
    const [showRegisterComp, setShowRegisterComp] = useState(false);
    const [showForgetPassComp, setShowForgetPassComp] = useState(false);
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
    };

    const ShowRegister = () => {
        setShowLoginComp(false);
        setShowRegisterComp(true);
        setShowForgetPassComp(false);
    };
    const ShowForgotPassword = () => {
        setShowLoginComp(false);
        setShowRegisterComp(false);
        setShowForgetPassComp(true);
    };
    const ShowResetPassword = () => {
        setShowLoginComp(false);
        setShowRegisterComp(false);
        setShowForgetPassComp(true);
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
                        setOpenLogin={setOpenLogin}
                        showForgotPassword={ShowForgotPassword}
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
                        openLogin={openLogin}
                    />
                )}
                {/* {showForgetPassComp && (
                    <ResetPasswordContainer
                        showLogin={ShowLogin}
                        setOpenLogin={setOpenLogin}
                        openLogin={openLogin}
                    />
                )} */}

                <CloseBtn handleOnClickClose={callbackCloseModal} />
            </Wrapper>
        </ModalComponent>
    );
};

export default Login;
