import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { HandleOnChangeInput } from "../../helpers/formInput/HandleOnChangeInput"
import { notifyFailure } from "../../helpers/notifications/notifyFailure"
import { resetPassword } from "../../store/actions/userActions"
import { FormComponent } from "../Authentication/components/FormElement"
import { InputComponent } from "../Authentication/components/InputELement"
import { Button } from "../Global/Button"
import { SizedBox } from "../Global/SizedBox"
import { Spinner } from "../Global/Spinner"

const StyledComponent = styled.div`
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

export const ChangePassword = () => {
  const [data, setData] = useState({
    old_password: "",
    new_password: "",
  })
  const dispatch = useDispatch()

  // checking if user gets registered
  const info = useSelector((state) => state.userResetPass)
  const { loading, success, error } = info

  // notifying if error from reducer state
  error && notifyFailure(error)

  // handling sign up button
  const handleResetPassword = async (e) => {
    e.preventDefault()
    console.log("data", data)
    const formData = new FormData()
    formData.append("old_password", data.password)
    formData.append("new_password", data.confirm_password)

    dispatch(resetPassword(formData))
  }

  const cleanState = () => {
    console.log("cleaning")
    let tempData = {}
    for (let field in data) {
      tempData[field] = ""
    }
    setData(tempData)
  }

  return (
    <StyledComponent>
      <FormComponent className='formFieldWrapper' autocomplete='off'>
        <h2>Change Password</h2>
        <SizedBox height={2} />
        <div className='inputOuter'>
          <label>Old Password</label>
          <InputComponent
            type='password'
            fontSize={0.7}
            value={data?.password}
            onChange={(e) => {
              HandleOnChangeInput(e, "password", setData, data)
            }}
          />
        </div>
        <div className='inputOuter'>
          <label>New Password</label>
          <InputComponent
            type='password'
            fontSize={0.7}
            value={data?.confirm_password}
            onChange={(e) => {
              HandleOnChangeInput(e, "confirm_password", setData, data)
            }}
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
              onClick={handleResetPassword}
            >
              Change Password
            </Button>
          )}
        </div>
      </FormComponent>
    </StyledComponent>
  )
}
