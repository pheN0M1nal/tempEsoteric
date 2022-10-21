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

const Wrapper = styled.div`
    background-color: var(--custom-white);
    width: 100%;
    max-width: 1200px;
	overflow: auto;
	border-radius: 10px;
    position: relative;
	@media (max-width:1100px){
		margin-top:30rem;
	}
    /* .closeBtn {
        border-radius: 2.4rem;
        border: 0;
		background-color: transparent;
        position: absolute;
        top: 5%;
        right: 5%;
		
		transition: width 2s, height 2s,   transform 2s;
		:hover img{
			transform: rotateY(3.142rad);
			width:35px;
			height: 35px;
		}
		img{
			width:30px;
			height: 30px;
			object-fit: contain;
		}
    } */
`;

const Login = () => {
    const [showLoginComp, setShowLoginComp] = useState(true);
    const [showRegisterComp, setShowRegisterComp] = useState(false);
    const [showForgetPassComp, setShowForgetPassComp] = useState(false);

    const dispatch = useDispatch();

    const loginModal = useSelector((state) => state.loginModal);
    const { show } = loginModal;
    const customStyles = {
        content: {
            // top: "50%",
            // left: "50%",
            // right: "auto",
            // bottom: "auto",
            // maxWidth: "80%",
            // borderRadius: "5px",
            // marginRight: "0%",
            // transform: "translate(0%, 0%)",
            // background: "var(--custom-primary-bg)",
            // padding: "2rem 3rem",
            // maxHeight: "100vh",
            // overflowY: "scroll",
        },
    };

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

    return (
        <ModalComponent
            isOpen={show}
            //onAfterOpen={callbackOnAfterOpen}
            onRequestClose={callbackCloseModal}
            stylesFromProps={customStyles}
            contentLabel={"Login-SignUp"}
            classNameFromProps="login_model"
        >
            <Wrapper>
                {showLoginComp && <LoginContainer showRegister={ShowRegister} />}
                {showRegisterComp && <RegisterContainer showLogin={ShowLogin} />}
                {showForgetPassComp && <ForgotPasswordContainer showLogin={ShowLogin} />}
               
                <CloseBtn handleOnClickClose={callbackCloseModal}/>
            </Wrapper>
        </ModalComponent>
    );
};

export default Login;
