import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { notifyFailure } from "../../../helpers/notifications/notifyFailure";
import { Button } from "../../Global/Button";
import { SizedBox } from "../../Global/SizedBox";
import { AuthButtonContainer } from "../components/AuthButtonContainer";
import { FormComponent } from "../components/FormElement";
import { InputComponent } from "../components/InputELement";
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
export const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [showButton, setShowButton] = useState(true);
    const navigate = useNavigate();

    const handleOnClickButton = (e) => {
        if (e) {
            e.preventDefault();
            if (!email) {
                notifyFailure(`email is required`);
            }
            let emailVerificationID = 3;
            navigate(`/reset_password:${emailVerificationID}`, { replace: true });
        }
        // if (email) {
        //   setShowButton(false);
        //   fireSpinnerAlert("Getting Email Verification Link");
        //   axiosInstance()
        //     .post(`/user/profile/get_verification_link/`, { email })
        //     .then(async (response) => {
        //       await displayApiSuccessMessage(response.data);
        //       setShowButton(true);
        //     })
        //     .catch(async (err) => {
        //       const { isConfirmed } = await displayApiErrorMessage(err);
        //       setShowButton(true);
        //     });
        // }
    };

    return (
        <Wrapper>
            <FormComponent>
                <h2>Enter YOUR EMAIL ADDRESS</h2>

                <InputComponent
                    placeholder={"Email"}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.charCode === 13) {
                            handleOnClickButton(e);
                        }
                    }}
                />
                <SizedBox height={1.5} />
                <AuthButtonContainer>
                    {showButton ? (
                        <>
                            <Button
                                textTransform={"uppercase"}
                                height={54}
                                fontSize={16}
                                maxWidth={250}
                                onClick={handleOnClickButton}
                            >
                                SEND VERFICATION LINK
                            </Button>
                            <SizedBox height={1.0} />
                        </>
                    ) : null}
                </AuthButtonContainer>
            </FormComponent>
        </Wrapper>
    );
};
