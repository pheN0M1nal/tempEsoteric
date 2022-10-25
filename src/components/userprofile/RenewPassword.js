import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HandleOnChangeInput } from "../../helpers/formInput/HandleOnChangeInput";
import { notifyFailure } from "../../helpers/notifications/notifyFailure";
import { register } from "../../store/actions/userActions";
import { FormComponent } from "../Authentication/components/FormElement";
import { InputComponent } from "../Authentication/components/InputELement";
import { Button } from "../Global/Button";
import { SizedBox } from "../Global/SizedBox";
import { Spinner } from "../Global/Spinner";

const StyledComponent = styled.div`
    form {
        margin-top: 0rem;

        .inputOuter {
            width: 100%;
            input {
                margin-bottom: 0.3rem;
            }
        }
        .actionButtonWrapper {
            display: flex;
            justify-content: flex-end;
            margin-top: 2rem;
        }
    }
`;

export const RenewPassword = () => {
    const [data, setData] = useState({
        password: "",
        confirm_password: "",
    });
    const dispatch = useDispatch();

    // checking if user gets registered
    const userInfo = useSelector((state) => state.userRegister);
    const { loading, error } = userInfo;

    // notifying if error from reducer state
    error && notifyFailure(error);

    // validating fields
    const validateFields = () => {
        let state = true;
        let fields = ["password", "confirm_password"];
        for (let field of fields) {
            if (!data[field]) {
                notifyFailure(`${field} is required`);
                state = false;
            }
        }
        if (data.password !== data.confirm_password) {
            notifyFailure(`Your passwords doesn't match`);
            state = false;
        }
        return state;
    };

    // handling sign up button
    const handleResetPassword = async (e) => {
        e.preventDefault();
        console.log("data", data);
        if (!validateFields()) {
            return;
        }
        let modData = { ...data };
        delete modData.confirm_password;
        // console.log(modData)
        dispatch(register(modData));
    };

    const cleanState = () => {
        console.log("cleaning");
        let tempData = {};
        for (let field in data) {
            tempData[field] = "";
        }
        setData(tempData);
    };

    return (
        <StyledComponent>
            <FormComponent className="formFieldWrapper" autocomplete="off">
            <h2>Reset Password</h2>
                <div className="inputOuter">
                    <label>New Password</label>
                    <InputComponent
                        type="password"
                        fontSize={0.7}
                        value={data?.password}
                        onChange={(e) => {
                            HandleOnChangeInput(e, "password", setData, data);
                        }}
                    />
                </div>
                <SizedBox height={2} />
                <div className="inputOuter">
                    <label>Confirm Password</label>
                    <InputComponent
                        type="password"
                        fontSize={0.7}
                        value={data?.confirm_password}
                        onChange={(e) => {
                            HandleOnChangeInput(e, "confirm_password", setData, data);
                        }}
                    />
                </div>
                <div className="actionButtonWrapper">
                    {loading ? (
                        <Spinner size={1.5} />
                    ) : (
                        <Button
                            textTransform={"uppercase"}
                            fontSize={16}
                            maxWidth={200}
                            border={"transparent"}
                            height={41}
                            onClick={handleResetPassword}
                        >
                            Reset Password
                        </Button>
                    )}
                </div>
            </FormComponent>
        </StyledComponent>
    );
};