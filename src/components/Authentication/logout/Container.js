import { useEffect } from "react";
import { useDeferredValue } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { post_logout } from "../../../api/EndPoints";
import axiosInstance from "../../../config/api/axois";
import { notifySuccess } from "../../../helpers/notifications/notifySuccess";
import { showLoginModal } from "../../../store/actions/modalActions";
import { logout } from "../../../store/actions/userActions";
import { Button } from "../../Global/Button";
import { Spinner } from "../../Global/Spinner";

const StyledContainer = styled.div`
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--custom-main-background);
`;

const LogoutContainer = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    const navigate = useNavigate();

    const handleOnClickLogoutButton = (e) => {
        e.preventDefault();
        setShowSpinner(true);
        axiosInstance()
            .post(post_logout())
            .then((response) => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                navigate("/", { replace: true });
                window.location.reload();
                setShowSpinner(false);
            });
    };

    return (
        <StyledContainer>
            {showSpinner ? (
                <Spinner />
            ) : (
                <Button
                    onClick={(e) => handleOnClickLogoutButton(e)}
                    height={54}
                    fontSize={16}
                    maxWidth={535}
                >
                    Proceed to Logout
                </Button>
            )}
        </StyledContainer>
    );
};

export default LogoutContainer;
