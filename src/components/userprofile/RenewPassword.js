import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HandleOnChangeInput } from "../../helpers/formInput/HandleOnChangeInput";
import { notifyFailure } from "../../helpers/notifications/notifyFailure";
import { changePassword } from "../../store/actions/userActions";
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
                max-width: 100%;
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
        old_password: "",
        new_password: "",
    });
    const dispatch = useDispatch();

    // checking if user gets registered
    const info = useSelector((state) => state.userChangePass);
    const { loading, success, error } = info;

    // notifying if error from reducer state
    error && notifyFailure(error);

    // validating fields
    const validateFields = () => {
        let state = true;
        let fields = ["old_password", "new_password", "confirm_password"];
        for (let field of fields) {
            if (!data[field]) {
                notifyFailure(`${field} is required`);
                state = false;
            }
        }
        if (data.new_password !== data.confirm_password) {
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

        dispatch(changePassword(data));
    };
    useEffect(() => {
        if (success === true) {
            cleanState();
        }
    }, [success]);

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
                <SizedBox height={2} />
                <div className="inputOuter">
                    <label>Old Password</label>
                    <InputComponent
                        type="password"
                        fontSize={0.7}
                        value={data?.old_password}
                        onChange={(e) => {
                            HandleOnChangeInput(e, "old_password", setData, data);
                        }}
                    />
                </div>
                <div className="inputOuter">
                    <label>New Password</label>
                    <InputComponent
                        type="password"
                        fontSize={0.7}
                        value={data?.new_password}
                        onChange={(e) => {
                            HandleOnChangeInput(e, "new_password", setData, data);
                        }}
                    />
                </div>
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
