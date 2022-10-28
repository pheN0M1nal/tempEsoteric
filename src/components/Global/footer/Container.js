import { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import ChatBoxIcon from "../../../static/images/Auth/communication-chat-6013688-5272892.png";
// import { ChatBox } from "../../chatBody/ChatBox";
const StyledComponentsAdmin = styled.div`
    .footerWrapper {
        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        transition: ease-in-out 0.5s;

        .logout-button {
            margin-top: -2rem;
            margin-right: 2rem;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: var(--custom-txt-color);
            width: 4rem;
            height: 4rem;
            padding: 0.5rem;
            background-color: var(--custom-light-bg);
            border-radius: 2.4rem;
            transition: ease-in-out 0.5s;
            &:hover {
                transform: scale(1.2);
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

export const FooterContainer = () => {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    const showProfile = () => {
        setChatBoxOpen(true);
    };

    return (
        <StyledComponentsAdmin>
            {/* <div className="footerWrapper">
                {!chatBoxOpen ? (
                    <Link onClick={showProfile} className="logout-button logout1">
                        <img src={ChatBoxIcon} alt="userprofile" />
                    </Link>
                ) : (
                    <ChatBox  setChatBoxOpen={setChatBoxOpen}/>
                )}
            </div> */}
        </StyledComponentsAdmin>
    );
};
