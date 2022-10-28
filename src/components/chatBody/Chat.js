import react, { useEffect, useState } from "react";
import { Launcher } from "react-chat-window";
import { useSelector } from "react-redux";
import styled from "styled-components";
const AsideComponent = styled.aside`
    .sc-launcher {
        background-color: var(--custom-orange-color);
    }
    .sc-chat-window {
        width: 370px;
        height: calc(100% - 120px);
        max-height: 450px;
        position: fixed;
        right: 25px;
        bottom: 100px;
        box-sizing: border-box;
        box-shadow: 0px 7px 40px 2px rgb(148 149 150 / 30%);
        background: var(--custom-light-bg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s ease-in-out;
        border-radius: 10px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    ..sc-message-list {
        background: transparent;
    }
    .sc-header {
        min-height: 60px;
        padding: 5px 10px;
        background-color: var(--custom-orange-color);
        img {
            width: 40px;
            height: 40px;
            border-radius: 2.4rem;
            padding: 0;
        }
    }
    .sc-header--close-button {
        width: 30px;
        height: 30px;
        img {
            width: 100%;
            height: 100%;
            padding: 0;
        }
    }
    svg {
        height: 30px;
        width: 30px;
    }
    .sc-user-input--button {
        margin-left: 0.5rem;
    }
`;

const Chat = () => {
    const [messageList, setMessageList] = useState([]);

    const userProfile = useSelector((state) => state.userProfile);
    const { isFetchingProfile, profile } = userProfile;
    console.log(profile, "profile");
    let incomingData = messageList;
    useEffect(() => {
        setMessageList(incomingData);
    }, [incomingData]);
    const _onMessageWasSent = (message) => {
        console.log(message);
        setMessageList([...messageList, message]);
    };

    const onFilesSelected = (fileList) => {
        console.log(fileList);
        setMessageList([...messageList, fileList]);
    };

    return (
        <AsideComponent>
            <Launcher
                agentProfile={{
                    teamName: "",
                    imageUrl: profile?.logo,
                }}
                onMessageWasSent={_onMessageWasSent}
                messageList={messageList}
                onFilesSelected={onFilesSelected}
                showEmoji
            />
        </AsideComponent>
    );
};

export default Chat;
