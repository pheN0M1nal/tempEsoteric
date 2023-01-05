import React, {useEffect, useState} from "react";
import {Spinner} from "../../Global/Spinner";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router";
import axiosServerInstance from "../../../config/api/axios";
import {finalizeVerifyEmail, login} from "../../../api";
import {notifyApiErrorMessage} from "../../../helpers/notifications/notifyApiErrorMessage";
import {notifySuccess} from "../../../helpers/notifications/notifySuccess";
import {notifyFailure} from "../../../helpers/notifications/notifyFailure";

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


    useEffect(() => {
        const verifyToken = async () => {
            const requestData = {
                token: verToken
            }
            await axiosServerInstance()
                .post(finalizeVerifyEmail(), requestData)
                .then((response) => {
                    notifySuccess('Email verification successful')
                })
                .catch((err) => {
                    notifyFailure('Email verification failed')
                    notifyApiErrorMessage(err)
                });
            navigate(`/`, {replace: true});
        }
        if (verToken) {
            verifyToken()
        }
    }, [verToken])


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


    return (
        <Wrapper>
            <Spinner size={2}/>
        </Wrapper>
    );
};
