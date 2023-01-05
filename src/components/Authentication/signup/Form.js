import { Button } from "../../Global/Button";
import { SizedBox } from "../../Global/SizedBox";
import { AuthButtonContainer } from "../components/AuthButtonContainer";
import { InputComponent } from "../components/InputELement";
import { FormComponent } from "../components/FormElement";
import { useEffect, useState } from "react";
import { ImagePickerComponent } from "../../Global/ProfilePicturePickerComponent";
import { Spinner } from "../../Global/Spinner";
import { notifyFailure } from "../../../helpers/notifications/notifyFailure";
import { HandleOnChangeInput } from "../../../helpers/formInput/HandleOnChangeInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, register } from "../../../store/actions/userActions";

export const RegistrationForm = ({ showLogin }) => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        username: "",
        password: "",
        confirm_password: "",
    });
    const dispatch = useDispatch();

    // checking if user exist
    const userInfo = useSelector((state) => state.userProfile);
    const { loading, profile, error } = userInfo;

    // checking if user updated
    const userUpdate = useSelector((state) => state.userUpdateProfile);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate;

    // notifying if error from reducer state
    error && notifyFailure(error);

    const validateFields = () => {
        let state = true;
        let fields = [
            "first_name",
            "last_name",
            "email",
            "contact_number",
            "username",
            "password",
            "confirm_password",
        ];
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

    useEffect(() => {
        if (profilePicture) {
            console.log(profilePicture, "check profile picture");
            if (typeof profilePicture !== "string") {
                let tempdata = { ...data };
                tempdata["picture"] = profilePicture;
                setData(tempdata);
            }
        }
    }, [profilePicture]);
    // handling sign up button
    const handleUserSignup = async (e) => {
        e.preventDefault();
        console.log("data", data);
        if (!validateFields()) {
            return;
        }

        let formData = new FormData();
        for (let field in data) {
            formData?.append(field, data[field]);
        }

        dispatch(register(formData));
        dispatch(fetchUserProfile());
    };

    const handleOnClickLogin = () => {
        showLogin();
    };

    return (
        <FormComponent>
            <div className="inputOuter">
                <label htmlFor="fname">First Name</label>
                <InputComponent
                    id="fname"
                    type="text"
                    height={2.5}
                    value={data.first_name}
                    onChange={(e) => HandleOnChangeInput(e, "first_name", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <label htmlFor="lname">Last Name</label>
                <InputComponent
                    id="lname"
                    type="text"
                    height={2.5}
                    value={data.last_name}
                    onChange={(e) => HandleOnChangeInput(e, "last_name", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <label htmlFor="username">User Name</label>
                <InputComponent
                    id="username"
                    type="text"
                    height={2.5}
                    value={data.username}
                    onChange={(e) => HandleOnChangeInput(e, "username", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <label htmlFor="pass">Password</label>
                <InputComponent
                    id="pass"
                    type="password"
                    height={2.5}
                    value={data.password}
                    onChange={(e) => HandleOnChangeInput(e, "password", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <label htmlFor="Cpass">Confirm Password</label>
                <InputComponent
                    id="Cpass"
                    type="password"
                    height={2.5}
                    value={data.confirm_password}
                    onChange={(e) => HandleOnChangeInput(e, "confirm_password", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <label htmlFor="email">Email</label>
                <InputComponent
                    id="email"
                    type="email"
                    height={2.5}
                    value={data.email}
                    onChange={(e) => HandleOnChangeInput(e, "email", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <label htmlFor="number">Contact Number</label>
                <InputComponent
                    id="number"
                    type="text"
                    height={2.5}
                    value={data.contact_number}
                    onChange={(e) => HandleOnChangeInput(e, "contact_number", setData, data)}
                />
            </div>
            <div className="inputOuter">
                <div className="profilePicturePickerWrapper">
                    <ImagePickerComponent
                        image={profilePicture}
                        setImage={setProfilePicture}
                        btnText="Choose file"
                    />
                    <SizedBox height={3} />
                </div>
            </div>
            <AuthButtonContainer>
                {!loading ? (
                    <div className="formfooter">
                        <Button
                            textTransform={"uppercase"}
                            fontSize={16}
                            maxWidth={200}
                            border={"transparent"}
                            height={35}
                            onClick={handleUserSignup}
                        >
                            Sign Up
                        </Button>
                        <SizedBox height={2} />

                        <p>
                            Already have an account?
                            <strong onClick={handleOnClickLogin}>&nbsp; Login </strong>
                        </p>
                    </div>
                ) : (
                    <Spinner size={1.5} />
                )}
            </AuthButtonContainer>
        </FormComponent>
    );
};
