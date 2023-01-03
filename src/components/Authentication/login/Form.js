import React, { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { Button } from "../../Global/Button"
import { SizedBox } from "../../Global/SizedBox"
import { AuthButtonContainer } from "../components/AuthButtonContainer"
import { FormComponent } from "../components/FormElement"
import { InputComponent } from "../components/InputELement"
import { ModalComponent } from "../../Global/Modal"
import ForgotPasswordContainer from "../forgot_password/Container"
import { Spinner } from "../../Global/Spinner"
import styled from "styled-components"
import { notifyFailure } from "../../../helpers/notifications/notifyFailure"
import { HandleOnChangeInput } from "../../../helpers/formInput/HandleOnChangeInput"
import { notifySuccess } from "../../../helpers/notifications/notifySuccess"
import { GlobalUserProfileContext } from "../../../App"
import { useDispatch } from "react-redux"
import { login, fetchUserProfile } from "../../../store/actions/userActions"
import { useSelector } from "react-redux"

const Wrapper = styled.div`
  input {
    @media (max-width: 1100px) {
      max-width: 100%;
      margin: 0.5rem auto;
    }
  }
`
export const LoginForm = ({ showRegister }) => {
  // initializing
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const userInfo = useSelector((state) => state.userLogin)
  const { loading, error } = userInfo
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false)
  const dispatch = useDispatch()

  //notifying if error
  error && notifyFailure(error)

  // validating feilds
  const validateFields = () => {
    let state = true
    const fields = ["username", "password"]
    for (let field of fields) {
      if (!data[field]) {
        notifyFailure(`${field} is required`)
        state = false
      }
    }
    return state
  }

  // login
  const handleUserLogin = async (e) => {
    e.preventDefault()
    if (!validateFields()) {
      return
    }
    let formData = new FormData()
    formData.append("login", data.username)
    formData.append("password", data.password)
    dispatch(fetchUserProfile())
  }

  // forget password
  const handleOnClickForgotPassword = () => {
    setForgotPasswordModal(true)
  }

  // sign up
  const handleOnClickSignUp = (e) => {
    e.preventDefault()
    showRegister()
  }
  return (
    <Wrapper>
      <FormComponent>
        <label htmlFor='username'>User Name</label>
        <InputComponent
          id='username'
          type='text'
          value={data.username}
          onChange={(e) => HandleOnChangeInput(e, "username", setData, data)}
        />
        <SizedBox height={1.5} />
        <label htmlFor='password'>Password</label>
        <InputComponent
          id='password'
          type='password'
          value={data.password}
          onChange={(e) => HandleOnChangeInput(e, "password", setData, data)}
        />
        <SizedBox height={1.5} />
        <AuthButtonContainer>
          {!loading ? (
            <div className='formfooter'>
              <Button
                textTransform={"uppercase"}
                fontSize={16}
                addEffect={true}
                maxWidth={200}
                paddingLeftRight={3}
                height={35}
                BgColor={"orange-color"}
                border={"border-color"}
                onClick={handleUserLogin}
              >
                LOGIN
              </Button>

              <SizedBox height={2} />
              <p>
                Don't have an account?
                <strong onClick={handleOnClickSignUp}>&nbsp; Sign up</strong>
              </p>
              <SizedBox height={1} />
              <p>
                Forgot Password?
                <strong onClick={handleOnClickForgotPassword}>
                  &nbsp; Click Here
                </strong>
              </p>
            </div>
          ) : (
            <Spinner size={1.5} />
          )}
          <ModalComponent
            modalLabel={"Edit SubUser"}
            isOpen={forgotPasswordModal}
            callbackCloseModal={() => {
              setForgotPasswordModal(false)
            }}
          >
            <ForgotPasswordContainer />
          </ModalComponent>
        </AuthButtonContainer>
      </FormComponent>
    </Wrapper>
  )
}
