import styled from "styled-components"
import { SizedBox } from "../Global/SizedBox"
import { useEffect, useState } from "react"
import { FormComponent } from "../Authentication/components/FormElement"
import { InputComponent } from "../Authentication/components/InputELement"
import { ImagePickerComponent } from "../Global/ProfilePicturePickerComponent"
import { Button } from "../Global/Button"
import { Spinner } from "../Global/Spinner"
import { HandleOnChangeInput } from "../../helpers/formInput/HandleOnChangeInput"
import { useDispatch, useSelector } from "react-redux"
import { notifyFailure } from "../../helpers/notifications/notifyFailure"
import { editProfile } from "../../store/actions/userActions"
import axiosInstance from "../../config/api/axois"

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
      height: 12rem;
      border-radius: 5%;
      overflow: hidden;
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
`
export const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact_number: "",
    username: "",
  })
  const dispatch = useDispatch()

  // checking if user gets registered
  const userInfo = useSelector((state) => state.userProfile)
  const { profile, error, loading } = userInfo

  useEffect(() => {
    setData({
      firstname: profile.first_name,
      lastname: profile.last_name,
      email: profile.email,
      contact_number: profile.contact_number,
      username: profile.username,
    })
    setProfilePicture(profile.picture.file)
  }, [])

  // notifying if error from reducer state
  error && notifyFailure(error)

  useEffect(() => {
    if (profilePicture) {
      if (typeof profilePicture !== "string") {
        let tempdata = { ...data }
        tempdata["picture"] = profilePicture
        setData(tempdata)
      }
    }
  }, [profilePicture])

  // handling sign up button
  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    console.log("data", data)

    if (data["picture"]) {
      const formData = new FormData()
      formData.append("file", profilePicture)
      formData.append("purpose", "profile update")

      axiosInstance()
        .post("/upload", formData)
        .then((res) => {
          console.log("upload picture res", res.data)
          let tempdata = { ...data }
          tempdata["picture"] = res.data.id
          setData(tempdata)

          dispatch(editProfile(data))
        })
    }
  }

  const cleanState = () => {
    console.log("cleaning")
    setProfilePicture(null)
    let tempData = {}
    for (let field in data) {
      tempData[field] = ""
    }
    setData(tempData)
  }
  return (
    <StyledComponent>
      <FormComponent className='formFieldWrapper' autocomplete='off'>
        <div className='profilePicturePickerWrapper'>
          <ImagePickerComponent
            image={profilePicture}
            setImage={setProfilePicture}
            btnText='CHANGE LOGO'
          />
          <SizedBox height={1} />
        </div>
        <div className='inputOuter'>
          <label>First Name</label>
          <InputComponent
            type='text'
            height={2.5}
            value={data?.firstname}
            onChange={(e) => HandleOnChangeInput(e, "firstname", setData, data)}
          />
        </div>
        <div className='inputOuter'>
          <label>Last Name</label>
          <InputComponent
            type='text'
            height={2.5}
            value={data?.lastname}
            onChange={(e) => HandleOnChangeInput(e, "lastname", setData, data)}
          />
        </div>
        <div className='inputOuter'>
          <label>Username</label>
          <InputComponent
            type='text'
            height={2.5}
            value={data?.username}
            onChange={(e) => HandleOnChangeInput(e, "username", setData, data)}
          />
        </div>

        <div className='inputOuter'>
          <label>Email</label>
          <InputComponent
            type='email'
            height={2.5}
            value={data?.email}
            onChange={(e) => HandleOnChangeInput(e, "email", setData, data)}
          />
        </div>
        <div className='inputOuter'>
          <label>Contact Number</label>
          <InputComponent
            type='tel'
            height={2.5}
            value={data?.contact_number}
            onChange={(e) =>
              HandleOnChangeInput(e, "contact_number", setData, data)
            }
          />
        </div>

        <div className='actionButtonWrapper'>
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
  )
}
