import { forwardRef, useMemo, useState } from "react";
import styled from "styled-components";
import menuItems from "../../../DataList/menuItems";
import { useNavigate } from "react-router";
import imag2 from "../../../static/images/bg/bg2.png";
import call from "../../../static/images/Auth/call.png"
import location from "../../../static/images/Auth/location.png"
import email from "../../../static/images/Auth/email.png"
import { useDispatch, useSelector } from "react-redux";
import { notifyFailure } from "../../../helpers/notifications/notifyFailure";
import { useEffect } from "react";
import { register } from "../../../store/actions/userActions";
import { FormComponent } from "../../Authentication/components/FormElement";
import { InputComponent } from "../../Authentication/components/InputELement";
import { HandleOnChangeInput } from "../../../helpers/formInput/HandleOnChangeInput";
import { Button } from "../../Global/Button";
import { Spinner } from "../../Global/Spinner";
import { SizedBox } from "../../Global/SizedBox";
import { useRef } from "react";

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10% 15%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    top: auto;
    bottom: auto;
    margin: auto;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.imag});
    border: 5px solid var(--custom-orange-color);
    outline: var(--custom-orange-color);
    box-shadow: none;
    h3 {
        text-align: center;
        /* text-decoration: underline black double 2px; */
    }
    .pageContentOuter {
        text-align: center;
        padding: 0 .5rem;
        height: 100%;
        overflow: auto;

        form {
            max-width: 100%;
            width: 100%;
            gap: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .inputOuter {
                width: 100%;
                input {
                    border-bottom: 1px solid var(--custom-border-color);
                    margin-bottom: 0;
                }
                textarea {
                    width: 100%;
                    border: 0;
                    border-bottom: 1px solid var(--custom-border-color);
                }
                @media (max-width: 810px) {
                    width: 100%;
                    input {
                        max-width: 100%;
                    }
                }
            }
        }
        .socialIcons{
            text-align: left;
            ul{
                list-style: none;
                margin: 0;
                padding: 0;
                li{
                    display: flex;
                    img{
                        width:40px;
                        height: 40px;

                    }
                    a{
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        margin-left: 1rem;
                        color:var(--custom-orange-color);
                        &:hover{
                            color:var(--custom-black);

                        }
                    }
                }
            }
        }
    }
`;
export const ContactUs = forwardRef((props, ref) => {
    const [profilePicture, setProfilePicture] = useState(null);
    const refscrollto = useRef(null);


    const [data, setData] = useState({
        username: "",
        email: "",
        contact_number: "",
        message: "",
    });
    const navigate = useNavigate();
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };
    const goToPage = (pageNumber) => {
        props.book.current.pageFlip().flip(pageNumber + 2, "top");
        console.log(props.book.current.pageFlip().getPageCount());
    };
    const dispatch = useDispatch();

    // checking if user exist
    const userInfo = useSelector((state) => state.userProfile);
    const { loading, profile, error } = userInfo;

    // checking if user updated
    const userUpdate = useSelector((state) => state.userUpdateProfile);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate;

    // notifying if error from reducer state
    error && notifyFailure(error);

    useEffect(() => {
        if (profilePicture) {
            console.log(profilePicture);
            if (typeof profilePicture !== "string") {
                let tempdata = { ...data };
                tempdata["logo"] = profilePicture;
                setData(tempdata);
            }
        }
    }, [profilePicture]);

    const validateFields = () => {
        let state = true;
        let fields = ["username", "email", "contact_number", "message"];
        for (let field of fields) {
            if (!data[field]) {
                notifyFailure(`${field} is required`);
                state = false;
            }
        }

        return state;
    };

    // handling sign up button
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data", data);
        if (!validateFields()) {
            return;
        }

        dispatch(register(data));
    };

    return (
        <div className="page softPage" ref={ref} data-density={props.density | "soft"}>
            <PageWrapper imag={imag2}>
                <h3>Contact Us</h3>
                <div className="pageContentOuter">
                    <FormComponent>
                        <p>
                            Do you have any questions? Please do not hesitate to contact us
                            directly. Our team will come back to you within a matter of hours to
                            help you.
                        </p>
                        <div className="inputOuter">
                            <label htmlFor="username">User Name</label>
                            <InputComponent
                                id="username"
                                type="text"
                                height={1.5}
                                value={data?.username}
                                onChange={(e) => HandleOnChangeInput(e, "username", setData, data)}
                            />
                        </div>
                        <div className="inputOuter">
                            <label htmlFor="email">Email</label>
                            <InputComponent
                                id="email"
                                type="email"
                                height={1.5}
                                value={data?.email}
                                onChange={(e) => HandleOnChangeInput(e, "email", setData, data)}
                            />
                        </div>
                        <div className="inputOuter">
                            <label htmlFor="number">Contact Number</label>
                            <InputComponent
                                id="number"
                                type="tel"
                                height={1.5}
                                value={data?.contact_number}
                                onChange={(e) =>
                                    HandleOnChangeInput(e, "contact_number", setData, data)
                                }
                            />
                        </div>
                        <div className="inputOuter">
                            <label htmlFor="message">Message</label>
                            <InputComponent
                                id="message"
                                type="text"
                                height={1.5}
                                value={data?.message}
                                onChange={(e) => HandleOnChangeInput(e, "message", setData, data)}
                            />
                        </div>
                    </FormComponent>
                    <SizedBox height={2} />
                    {loading ? (
                        <Spinner size={2.0} />
                    ) : (
                        <Button
                            maxWidth={200}
                            height={54}
                            fontSize={16}
                            textTransform="uppercase"
                            paddingTopBottom={0.5}
                            paddingLeftRight={1.5}
                            onClick={(e) => handleSubmit(e)}
                        >
                            SUBMIT
                        </Button>
                    )}
                    <SizedBox height={2} />
                    <div className="socialIcons">
                        <ul>
                            <li>
                                <img src={call} />
                                <a href="tel:+01-234-567-89"> + 01 234 567 89</a>
                            </li>
                                <SizedBox height={2} />
                            <li>
                                <img src={email} />
                                <a href="mailto:contact@esoteric.com">contact@esoteric.com</a>
                            </li>
                                <SizedBox height={2} />
                            <li>
                                <img src={location} />
                                <a onClick={handleClick}>San Francisco, CA 94126, USA</a>
                            </li>
                                <SizedBox height={2} />
                                <div className="Map" ref={refscrollto}>
                                    <iframe
                                        width="100%"
                                        height="250"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=San+Francisco%2C+CA+94126%2C+USA&oq=San+Francisco%2C+CA+94126%2C+USA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    ></iframe>
                                </div>
                        </ul>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
});
