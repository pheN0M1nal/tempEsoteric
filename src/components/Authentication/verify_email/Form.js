import React, {useEffect, useState} from "react";
import {Spinner} from "../../Global/Spinner";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router";
import axiosServerInstance from "../../../config/api/axios";
import {finalizeVerifyEmail, login} from "../../../api";
import {notifyApiErrorMessage} from "../../../helpers/notifications/notifyApiErrorMessage";
import {notifySuccess} from "../../../helpers/notifications/notifySuccess";
import {notifyFailure} from "../../../helpers/notifications/notifyFailure";
import { useDispatch } from "react-redux";
import { verifyEmailStep2 } from "../../../store/actions/userActions";

const Wrapper = styled.div`
    width: 100%;
    margin: 3rem 2rem 2rem;
    
    
    @media(max-width:1100px){
        text-align: center;
    }
`;
export const VerifyEmailForm = () => {
    const location = useLocation()
    const [verToken, setVerToken] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        if (query.get("token")) {
            setVerToken(query.get("token"));
        } else {
            navigate('/', {
                replace: true
            })
        }
    }, []);
    useEffect(() => {
        const verifyToken =  () => {
            const requestData = {
                token: verToken
            }
            dispatch(verifyEmailStep2(requestData));
            navigate(`/`, {replace: true});
        }
        if (verToken) {
            verifyToken()
        }
    }, [verToken])


   


    return (
        <Wrapper>
            <Spinner size={2}/>
        </Wrapper>
    );
};
