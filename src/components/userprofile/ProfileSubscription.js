import React, { useState } from "react";
import styled from "styled-components";
import { SizedBox } from "../Global/SizedBox";
import { TimerCounter } from "../Global/TimerCounter/TimerCounter";

const StyledComponent = styled.div`
    .heading {
        font-size: 1.4rem;
        text-transform: capitalize;
        font-weight: 700;
    }
    .Detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .membership_Title {
            font-size: 1.2rem;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .Activation {
            font-size: 1.2rem;
            text-transform: capitalize;
            letter-spacing: 1px;
            color: red;
            font-weight: 700;
        }
    }
   
`;

export const ProfileSubscription = () => {
    const [timer, setTimer] = useState(false);
    return (
        <StyledComponent>
            <h2 className="heading">Subscription Detail</h2>
            <SizedBox height={2} />
            <div className="Detail">
                <h4 className="membership_Title">MEMBERSHIP</h4>
                <h4 className="Activation">Active</h4>
            </div>
            <SizedBox height={2} />
            <p className="timerNotify">
                {timer ? (
                    <>
                        <h3>Time Left :</h3>
                        <TimerCounter />
                    </>
                ) : (
                    <>
                        <h3>Expire :</h3>

                        <TimerCounter />
                    </>
                )}
            </p>
        </StyledComponent>
    );
};
