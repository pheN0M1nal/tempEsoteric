import React from "react";
import CountdownTimer from "react-component-countdown-timer";
import styled from "styled-components";

const Wrapper = styled.div`
    .displayedTime{
        display: flex;
        justify-content: center;
        .countBox{
            display: flex;
            gap: 1rem;
            .countBoxItem{
                display: flex;
                flex-direction: column;
                gap: .4rem;
                .label{
                    font-size:1rem !important; 

                }
                .count{
                    /* border:1px solid #000; */
                    border-radius:4px;
                    font-size:1.6rem;
                    padding: 0.3rem;
                    background-color:var(--custom-orange-color) !important;
                    color:#fff !important;
                }
            }
            .split{
                font-size: 4rem;
                color:var(--custom-orange-color) !important;
                font-family: "poppins" !important ;
    -webkit-font-smoothing: antialiased;
            }
        }
    }
`;

export const TimerCounter = () => {
    return (
        <Wrapper>
            <CountdownTimer count={5432}  showTitle   />
        </Wrapper>
    );
};
