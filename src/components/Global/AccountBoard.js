import styled from "styled-components";
import { ProfilePictureBoard } from "./ProfilePictureBoard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./Button";
import logoutImg from "../../static/images/Auth/3599716@0.png";
import profileimg from "../../static/images/Auth/2384396@0.png";
import profilePicture from "../../static/images/Auth/communication-chat-6013688-5272892.png";
import plansimg from "../../static/images/Auth/4222015@1.png";
import down from "../../static/images/Auth/4980085@0.png";
import { useDispatch } from "react-redux";
import {
    showLoginModal,
    showProfileModal,
    showSubscriptionModal,
} from "../../store/actions/modalActions";

import { logout } from "../../store/actions/userActions";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    .profileTab {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        padding: 0.3rem 0 0.3rem 0.4rem;
        border: 1px solid #c0dfd9;
        border-radius: 2.4rem;
        background-color: var(--custom-light-bg);
        &:hover,
        &:active {
            box-shadow: var(--custom-shadow);
        }
        .img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .name {
            margin-left: 10px;
            font-size: 0.8rem;
            font-size: var(--font-14);
            color: var(--custom-txt-color);
            font-family: var(--font-1);
            .first {
                color: var(--custom-txt-color);
            }
            .last {
                color: var(--custom-txt-color);
            }
            .downChevron {
                width: 1rem;
                height: 1rem;
                margin-right: 0.5rem;
                margin-left: 0.5rem;
                transform: ${(props) => (props?.subNavToggle ? `rotate(180deg)` : `rotate(0deg)`)};
            }
        }

        .icon {
            color: var(--custom-orange);
            font-size: 1.3rem;
            margin-left: 1.5rem;
        }
    }
    #pop-nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0px;
        right: 0;
        top: 56px;
        z-index: 1;
        animation-duration: 500ms;
        animation-name: showPopNav;
        animation-timing-function: ease-in;

        @keyframes showPopNav {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        .logout-button {
            text-decoration: none;
            font-size: var(--font-14);
            font-family: var(--font-1);
            font-weight: 500;
            display: flex;
            align-items: center;
            padding: 0.3rem 0 0.3rem 0.4rem;
            border: 1px solid var(--custom-border-color);
            border-radius: 2.4rem;
            background-color: var(--custom-light-bg);
            color: var(--custom-txt-color);
            letter-spacing: 1px;
            margin: 0.2rem 0;
            img {
                width: 30px;
                height: 30px;
                object-fit: cover;
                padding: 0.3rem;
                border-radius: 50%;
            }
            :hover {
                box-shadow: var(--custom-shadow);
            }
        }
    }
    #pop-nav.active {
        display: initial;
    }
    .AuthBtn {
        display: flex;
        gap: 1rem;
    }
    .blog-btn {
        text-decoration: none;
        font-size: var(--font-14);
        font-family: var(--font-1);
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: 1rem;
        border: 1px solid var(--custom-border-color);
        border-radius: 0.4rem;
        background-color: var(--custom-light-bg);
        color: var(--custom-txt-color);
        letter-spacing: 1px;
        margin: 0.2rem 1.4rem 0.2rem 0;
        :hover {
            box-shadow: var(--custom-shadow);
        }
    }
`;

export const AccountBoard = ({ profile }) => {
    const dispatch = useDispatch();

    const [subNavToggle, setSubNavToggle] = useState(false);

    const handleOnClickProfileBoard = (e) => {
        e.preventDefault();
        setSubNavToggle(!subNavToggle);
        // setCurrentSubNavKey((prev) => (prev === "auth" ? null : "auth"));
    };
    const handleOnClickLogin = () => {
        dispatch(showLoginModal());
    };

    const showProfile = () => {
        dispatch(showProfileModal());
    };
    const showSubscription = () => {
        dispatch(showSubscriptionModal());
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Wrapper subNavToggle={subNavToggle}>
            {profile ? (
                <>
                    <div className="profileTab">
                        <ProfilePictureBoard size={2.5}>
                            <img
                                className="img"
                                src={profile?.logo ? profile?.logo : profilePicture}
                                alt=""
                                onClick={handleOnClickProfileBoard}
                            />
                        </ProfilePictureBoard>
                        <div className="name" onClick={handleOnClickProfileBoard}>
                            <span className="first">{profile?.username || "name"}</span>
                            <img className="downChevron" src={down} alt="down" />
                        </div>
                    </div>
                    {subNavToggle ? (
                        <div id="pop-nav">
                            <Link onClick={showProfile} className="logout-button logout1">
                                <img src={profileimg} alt="userprofile" />
                                &nbsp; Profile
                            </Link>
                            <Link onClick={showSubscription} className="logout-button logout1">
                                <img src={plansimg} alt="userprofile" />
                                &nbsp; Plans
                            </Link>
                            <Link onClick={logoutHandler} className="logout-button logout2">
                                <img src={logoutImg} alt="logout" />
                                &nbsp; Log Out
                            </Link>
                        </div>
                    ) : null}
                </>
            ) : (
                <div className="AuthBtn">
                    <Button
                        onClick={handleOnClickLogin}
                        textTransform={"uppercase"}
                        fontSize={16}
                        addEffect={true}
                        maxWidth={200}
                        paddingLeftRight={3}
                        height={41}
                        BgColor={"light-bg"}
                        border={"border-color"}
                    >
                        LOGIN
                    </Button>
                </div>
            )}
        </Wrapper>
    );
};
