import styled from "styled-components";
import { SizedBox } from "../Global/SizedBox";
import { useCallback, useEffect, useState } from "react";
import { FormComponent } from "../Authentication/components/FormElement";
import { InputComponent } from "../Authentication/components/InputELement";
import { Button } from "../Global/Button";
import { Spinner } from "../Global/Spinner";
import { HandleOnChangeInput } from "../../helpers/formInput/HandleOnChangeInput";
import { useDispatch, useSelector } from "react-redux";
import { notifyFailure } from "../../helpers/notifications/notifyFailure";
import { editProfile } from "../../store/actions/userActions";
import axiosInstance from "../../config/api/axois";
import { handleFileUploadSingle } from "../../helpers/fileManagement/handler";
import { ImagePickerComponent } from "../../helpers/fileManagement/ProfilePicturePickerComponent";
import { patch_profile } from "../../api/EndPoints";
const StyledComponent = styled.div`
    .profilePicturePickerWrapper > div {
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;

        .controlsWrapperImage {
            align-items: center;
        }
        .controlsWrapperImage .text {
            display: none;
        }
        .controlsWrapperImage button {
            background-color: #f3f3f2;
            color: black;
            font-size: 1rem;
            border-radius: 2.5rem;
        }
        .imageWrapper {
            width: 100%;
            max-width: 200px;
            height: 12rem;
            border-radius: 5%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
            }
        }
    }

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
export const EditProfile = () => {
    const [files, setFiles] = useState({});
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    // checking if user gets registered
    const userInfo = useSelector((state) => state.userProfile);
    const { profile, error, loading } = userInfo;

    // notifying if error from reducer state
    error && notifyFailure(error);
    useEffect(() => {
        setData(profile);
        const pictureData = {
            url_on_server: profile && profile?.picture?.file,
        };

        setFiles({
            ...files,
            picture: pictureData,
        });
    }, [profile?.picture?.file, setFiles, profile]);
    const uploadFile = useCallback(async () => {
        if (files?.picture) {
            const temp = {
                ...files?.picture,
                to_be_deleted_file_id: profile && profile?.picture?.id,
            };

            if (temp?.to_be_uploaded_buffer) {
                const uploadedFileData = await handleFileUploadSingle(temp && temp);
                let tempData = { ...data };
                tempData["picture"] = uploadedFileData?.id || profile?.picture?.id;
                setData(tempData);
            }
        }
    }, [files?.picture, setData, profile]);
    useEffect(() => {
        uploadFile();
    }, [uploadFile]);

    console.log("data before", data);
    // handling sign up button
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        console.log("data at submit click", data);
        const formData = new FormData();
        for (let field in data) {
            formData.append(field, data[field]);
        }
        formData.append("current_subscription_plan", null);

        axiosInstance()
            .patch(patch_profile(), formData)
            .then((res) => {
                console.log("upload picture res", res.data);
                let tempdata = { ...data };
                tempdata["picture"] = res.data.id;
                setData(tempdata);

                dispatch(editProfile(data));
            });
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
                <div className="profilePicturePickerWrapper">
                    <ImagePickerComponent
                        image={files?.picture?.url_on_server}
                        field_name={"picture"}
                        purpose={"Profile Picture"}
                        label={" Picture"}
                        setFiles={setFiles}
                    />
                    <SizedBox height={1} />
                </div>
                <div className="inputOuter">
                    <label>First Name</label>
                    <InputComponent
                        type="text"
                        height={2.5}
                        value={data?.first_name}
                        onChange={(e) => HandleOnChangeInput(e, "first_name", setData, data)}
                    />
                </div>
                <div className="inputOuter">
                    <label>Last Name</label>
                    <InputComponent
                        type="text"
                        height={2.5}
                        value={data?.last_name}
                        onChange={(e) => HandleOnChangeInput(e, "last_name", setData, data)}
                    />
                </div>
                <div className="inputOuter">
                    <label>Username</label>
                    <InputComponent
                        type="text"
                        height={2.5}
                        value={data?.username}
                        onChange={(e) => HandleOnChangeInput(e, "username", setData, data)}
                    />
                </div>

                <div className="inputOuter">
                    <label>Email</label>
                    <InputComponent
                        type="email"
                        height={2.5}
                        value={data?.email}
                        onChange={(e) => HandleOnChangeInput(e, "email", setData, data)}
                    />
                </div>
                <div className="inputOuter">
                    <label>Contact Number</label>
                    <InputComponent
                        type="tel"
                        height={2.5}
                        value={data?.contact_number}
                        onChange={(e) => HandleOnChangeInput(e, "contact_number", setData, data)}
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
                            onClick={handleUpdateProfile}
                        >
                            UPDATE
                        </Button>
                    )}
                </div>
            </FormComponent>
        </StyledComponent>
    );
};
