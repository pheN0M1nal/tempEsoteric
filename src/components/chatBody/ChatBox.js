import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputComponent } from "../Authentication/components/InputELement";
import { CloseBtn } from "../Global/CloseBtn";
import emoji from "../../static/images/Auth/smiling-emoji-5756735-4826119.png";
import fileAttachment from "../../static/images/Auth/paper-clip-6572359-5430927.png";
import send from "../../static/images/Auth/paperplane-6684093-5523009.png";
import { FormComponent } from "../Authentication/components/FormElement";
import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { notifyFailure } from "../../helpers/notifications/notifyFailure";
import { HandleOnChangeInput } from "../../helpers/formInput/HandleOnChangeInput";

const AsideComponent = styled.aside`
    width: 100%;
    height: 400px;
    max-width: 300px;
    overflow: hidden;
    position: fixed;
    bottom: ${(props) => (!props.chatBoxOpen ? `20px` : `-450px`)};
    right: 10px;
    border-radius: 10px;
    /* border: 1px solid var(--custom-border-color); */
    transition: ease-in-out 1s;
    padding: 0.3rem;
    box-shadow: 0 0 15px -5px var(--custom-light-bg);
    background-color: var(--custom-light-bg);

    .chat_submit_box {
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid var(--custom-border-color);
        box-shadow: 0 0 15px -5px var(--custom-light-bg);
        position: absolute;
        bottom: 5px;
        form {
            display: flex;
            align-items: center;
            margin-top: 0;
            padding: 0 0.3rem;
            .extraIcons,
            .sendBtn {
                display: flex;
                gap: 0.3rem;
                a {
                    text-decoration: none;
                    width: 25px;
                    height: 25px;
                    transition: ease-in-out 0.4s;
                    &:hover {
                        transform: scale(1.15);
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                .emojiIcon {
                    &:hover {
                        transform: scale(1);
                    }
                }
            }
        }
    }
    .closeBtn {
        > div {
            top: 1%;
            right: 1%;
        }
    }
    .chat_box_wrapper {
        width: 100%;
        height: 80%;
        margin-top: 10px;
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            li {
                padding: 10px;
                background-color: var(--custom-white);
                max-width: 80%;
                margin-bottom: 1rem;
                p {
                    padding: 0;
                    margin: 0;
                }
            }
            .left_message {
                float: left;
                border-left: 4px solid var(--custom-orange-color);
            }
            .right_message {
                float: right;
                border-right: 4px solid var(--custom-orange-color);
            }
        }
    }
    aside.EmojiPickerReact.epr-main {
        height: 75% !important;
        width: 100% !important;
        bottom: 74%;
        overflow: auto;
        .epr-preview {
            display: none;
        }
    }
`;

export const ChatBox = ({ setChatBoxOpen, chatBoxOpen }) => {
    const [formData, setFormData] = useState({ chatContent: "" });
    const [chosenEmoji, setChosenEmoji] = useState([]);
    const [emojiClick, setEmojiClick] = useState(false);
    const closeModal = () => {
        setChatBoxOpen(false);
    };
    const cahtBodyData = [
        {
            isAdminResponse: true,
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
        },
        {
            isAdminResponse: false,
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
        },
        {
            isAdminResponse: true,
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
        },
        {
            isAdminResponse: true,
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
        },
        {
            isAdminResponse: false,
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
        },
    ];
    const handleChange = (e) => {
        setFormData(e.target.value);
    };
    const validateFields = () => {
        let state = true;
        const fields = ["chatContent"];
        for (let field of fields) {
            if (!formData[field]) {
                notifyFailure(`This Field is required`);
                state = false;
            }
        }

        return state;
    };

    // login
    const handleSubmit = (e) => {
        if (!validateFields()) {
            return;
        }
        setFormData("");
        // dispatch(login(data))
    };

    // useEffect(()=>{
    //   setFormData(...formData,chosenEmoji)
    // },[chosenEmoji])

    const onEmojiClick = (event, emojiObject) => {
        // console.log(event,"event")
        console.log(event.unified, "event unified");
        console.log(emojiObject, "emojiObject");
        setChosenEmoji([...chosenEmoji, emojiObject.pointerId]);
    };
    console.log(chosenEmoji, "chosenEmoji");
    console.log(formData, "formData");
    const emojiPicker = () => {
        setEmojiClick(!emojiClick);
    };
    const cleanState = () => {
        console.log("cleaning");
        // setProfilePicture(null);
        let tempData = {};
        for (let field in formData) {
            tempData[field] = "";
        }
        setFormData(tempData);
    };
    return (
        <>
            <AsideComponent chatBoxOpen={chatBoxOpen}>
                <div className="closeBtn">
                    <CloseBtn handleOnClickClose={closeModal} />
                </div>
                <div className="chat_box_wrapper ">
                    <ul className="chat_message">
                        {cahtBodyData.map((item, i) => (
                            <li
                                className={item.isAdminResponse ? "left_message" : "right_message"}
                                key={i}
                            >
                                <p>{item.detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {emojiClick && <Picker skinTonesDisabled={true} onEmojiClick={onEmojiClick} />}
                <div className="chat_submit_box">
                    <FormComponent>
                        <span className="extraIcons">
                            <Link href="#" onClick={emojiPicker} className="emojiIcon">
                                <img src={emoji} />
                            </Link>
                            <Link href="#">
                                <img src={fileAttachment} />
                            </Link>
                        </span>

                        <InputComponent
                            type="text"
                            value={formData?.chatContent}
                            onChange={(e) =>
                                HandleOnChangeInput(e, "chatContent", setFormData, formData)
                            }
                        />

                        <span className="sendBtn">
                            <Link href="#" onClick={(e) => handleSubmit(e)}>
                                <img src={send} />
                            </Link>
                        </span>
                    </FormComponent>
                </div>
            </AsideComponent>
        </>
    );
};
