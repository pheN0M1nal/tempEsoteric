import { useRef, useState } from "react";
import { Button } from "../../Global/Button";
import { SizedBox } from "../../Global/SizedBox";
import { FormComponent } from "../components/FormElement";
import { InputComponent } from "../components/InputELement";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
export const ResetPasswordForm = () => {
    let { emailVerificationID } = useParams();
    console.log(emailVerificationID);
    // console.log(emailVerificationID);
    const passwordRefs = {
        password1: useRef(""),
        password2: useRef(""),
    };
    const navigate = useNavigate();
    console.log(passwordRefs.password1.current, passwordRefs.password2.current);
    const handleOnClickButton = (e) => {
        navigate(`/`, { replace: true });
        // if (e) {
        //   e.preventDefault();
        // }
        // if (
        //   passwordRefs.password1.current &&
        //   passwordRefs.password1.current === passwordRefs.password2.current
        // ) {
        //   fireSpinnerAlert("Resetting Password");
        //   axiosInstance()
        //     .put(`/user/profile/reset/password/`, {
        //       new_password: passwordRefs.password1.current,
        //       verification_id: emailVerificationID,
        //     })
        //     .then(async (response) => {
        //       await displayApiSuccessMessage(response.data);
        //     })
        //     .catch(async (err) => {
        //       const { isConfirmed } = await displayApiErrorMessage(err);
        //     });
        // } else {
        //   if (passwordRefs.password1.current) {
        //     displayApiErrorMessage(
        //       "The two password fields do not match each other",
        //     //   ERROR_MODE_CUSTOM
        //     );
        //   } else {
        //     displayApiErrorMessage(
        //       "The password field is required",
        //     //   ERROR_MODE_CUSTOM
        //     );
        //   }
        // }
    };

    return (
        <Wrapper>
            <FormComponent>
                <InputComponent
                    placeholder={"password"}
                    type="password"
                    onChange={(e) => (passwordRefs.password1.current = e.target.value)}
                    onKeyPress={(e) => {
                        if (e.charCode === 13) {
                            handleOnClickButton(e);
                        }
                    }}
                />
                <SizedBox height={1.0} />
                <InputComponent
                    placeholder={"Confirm Password"}
                    type="password"
                    onChange={(e) => (passwordRefs.password2.current = e.target.value)}
                    onKeyPress={(e) => {
                        if (e.charCode === 13) {
                            handleOnClickButton(e);
                        }
                    }}
                />
                <SizedBox height={1.5} />
                <Button
                    fontWeight={500}
                    fontSize={18}
                    maxWidth={200}
                    textTransform={"uppercase"}
                    borderRadius={1.5}
                    height={54}
                    paddingTopBottom={0.4}
                    onClick={handleOnClickButton}
                >
                    UPDATE
                </Button>
            </FormComponent>
        </Wrapper>
    );
};
