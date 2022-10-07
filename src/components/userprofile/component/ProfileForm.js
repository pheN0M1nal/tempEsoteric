import styled from "styled-components";
import { SizedBox } from "../../Global/SizedBox";
import { useEffect, useState } from "react";
import { FormComponent } from "../../Authentication/components/FormElement";
import { InputComponent } from "../../Authentication/components/InputELement";
import { ImagePickerComponent } from "../../Global/ProfilePicturePickerComponent";
import { Button } from "../../Global/Button";
import { Spinner } from "../../Global/Spinner";

const StyledComponent = styled.div`
  .profilePicturePickerWrapper > div {
    justify-content: space-around;
    gap: 0.5rem;
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
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      border: 1.5rem solid #fff;
      overflow: hidden;
    }
  }
  .wrapper {
    display: flex;
    gap: 1rem;
    @media (max-width: 920px) {
      flex-direction: column;
    }
  }
  .formRightBox {
    width: 100%;
    flex: auto;
    input {
      margin-bottom: 0px;
      max-width: 22rem;
    }
    .w-100,
    .w-48 {
      border-bottom: 1px solid var(--custom-border-color);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 0.7rem;
    }
    .inputOuter.textarea {
      border-bottom: none;
      @media (max-width: 920px) {
        width: 100%;
      }
    }
    input[type="color"] {
      opacity: 1;
      border: none;
      width: 2rem !important;
      height: 2rem !important;
    }
    label {
      color: var(--custom-txt-color);
    }
    .headingRight {
      font-size: 1.6rem;
      color: var(--custom-black);
      font-weight: 400;
    }
    .selectOuter {
      width: 100%;
    }
    select {
      width: 100%;
      border: none;
      background-color: #f3f3f2;
    }
  }
  .formLeftBox {
    background-color: #f3f3f2;
    border-radius: 5px;
    padding: 2rem;
    width: 40rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 920px) {
      width: 100%;
    }
    label {
      font-size: 1.2rem;
      color: var(--custom-black);
      text-align: left;
      margin-top: 1rem;
    }
    input {
      margin-bottom: 0px;
      max-width: 18rem;
      @media (max-width: 920px) {
        max-width: 100%;
      }
    }
  }

  .formfieldInner {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 5px;
    background-color: #f3f3f2;
    padding: 2rem;
    .inputOuter {
      width: 48%;
      gap: 1rem;
      @media (max-width: 920px) {
        width: 100%;
      }
    }
    .w-100 {
      width: 98%;
      input {
        max-width: 97%;
      }
      @media (max-width: 920px) {
        width: 100%;
        input {
          max-width: 100%;
        }
      }
    }
    .w-48 {
      width: 48%;
      input {
        max-width: 98%;
      }
      @media (max-width: 920px) {
        width: 100%;
        input {
          max-width: 100%;
        }
      }
    }
    .textarea {
      width: 100%;
    }
  }
  .actionButtonWrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
  }
`;
const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [data, setData] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");

  const handleSelectChange = (e) => {
    setSelectedClient(e.target.value);
  };
  const handleOnChangeInput = (e, field) => {
    let tempData = { ...data };
    tempData[field] = e.target.value;
    setData(tempData);
  };

  const handleOnClickProceed = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let field in data) {
      formData.append(field, data[field]);
    }
    proceedAddSubUser(formData);
  };

  const proceedAddSubUser = (data) => {
    console.log("add ", data);
  };

  const cleanState = () => {
    console.log("cleaning");
    setProfilePicture(null);
    let tempData = {};
    for (let field in data) {
      tempData[field] = "";
    }
    setData(tempData);
  };

  useEffect(() => {
    if (profilePicture) {
      if (typeof profilePicture != "string") {
        let tempData = { ...data };
        tempData["picture"] = profilePicture;
        setData(tempData);
      }
    }
  }, [profilePicture]);

  return (
    <StyledComponent>
      <FormComponent className="formFieldWrapper" autocomplete="off">
        <div className="wrapper">
          <div className="formLeftBox">
            <div className="profilePicturePickerWrapper">
              <ImagePickerComponent
                image={profilePicture}
                setImage={setProfilePicture}
                btnText="CHANGE LOGO"
              />
              <SizedBox height={3} />
            </div>
            <div className="inputOuter">
              <label>Update Name</label>
              <InputComponent
                placeholder={"Chloe Mike"}
                type="text"
                fontSize={0.7}
                value={data?.full_name}
                onChange={(e) => {
                  handleOnChangeInput(e, "full_name");
                }}
              />
            </div>
            <div className="inputOuter">
              <label>Update Password</label>
              <InputComponent
                placeholder={"Old password"}
                type="text"
                fontSize={0.7}
                value={data?.password}
                onChange={(e) => {
                  handleOnChangeInput(e, "password");
                }}
              />
              <InputComponent
                placeholder={"Confirm password"}
                type="text"
                fontSize={0.7}
                value={data?.confirm_password}
                onChange={(e) => {
                  handleOnChangeInput(e, "confirm_password");
                }}
              />
            </div>
          </div>

          <div className="formRightBox">
            <div className="formfieldInner">
              <h3 className="headingRight">SET UP</h3>
              <div className="inputOuter w-100">
                <label>Background color</label>
                <InputComponent
                  placeholder={""}
                  type="color"
                  fontSize={0.7}
                  value={data?.bgcolor}
                  onChange={(e) => {
                    handleOnChangeInput(e, "bgcolor");
                  }}
                />
              </div>
              <div className="inputOuter w-48">
                <div className="selectOuter">
                  <select
                    value={selectedClient}
                    onChange={(e) => handleSelectChange(e)}
                  >
                    <option value="">Font</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                  </select>
                </div>
              </div>
              <div className="inputOuter w-48">
                <label>Font color</label>
                <InputComponent
                  placeholder={"Lahore"}
                  type="color"
                  fontSize={0.7}
                  value={data?.city}
                  onChange={(e) => {
                    handleOnChangeInput(e, "city");
                  }}
                />
              </div>
              <div className="inputOuter w-48">
                <label>Button/Border color</label>
                <InputComponent
                  placeholder={"Nisar Khan"}
                  type="color"
                  fontSize={0.7}
                  value={data?.father_name}
                  onChange={(e) => {
                    handleOnChangeInput(e, "father_name");
                  }}
                />
              </div>
              <div className="inputOuter w-48">
                <label>Button font color</label>
                <InputComponent
                  placeholder={"+92 333 33 33 333"}
                  type="color"
                  fontSize={0.7}
                  value={data?.mobile_number}
                  onChange={(e) => {
                    handleOnChangeInput(e, "mobile_number");
                  }}
                />
              </div>
              <div className="inputOuter textarea w-100">
                <InputComponent
                  placeholder={"Website address..."}
                  type="text"
                  fontSize={0.7}
                  value={data?.website_address}
                  onChange={(e) => {
                    handleOnChangeInput(e, "website_address");
                  }}
                />
              </div>
              <div className="inputOuter textarea w-100">
                <InputComponent
                  placeholder={"Message or info here..."}
                  type="text"
                  fontSize={0.7}
                  value={data?.message}
                  onChange={(e) => {
                    handleOnChangeInput(e, "message");
                  }}
                />
              </div>
              <div className="inputOuter textarea w-100">
                <InputComponent
                  placeholder={"Final message..."}
                  type="text"
                  fontSize={0.7}
                  value={data?.final_message}
                  onChange={(e) => {
                    handleOnChangeInput(e, "final_message");
                  }}
                />
              </div>
            </div>

            <div className="actionButtonWrapper">
              {showSpinner ? (
                <Spinner size={1.5} />
              ) : (
                <Button
                  maxWidth={200}
                  height={54}
                  fontSize={16}
                  textTransform="uppercase"
                  paddingTopBottom={0.5}
                  paddingLeftRight={1.5}
                  onClick={handleOnClickProceed}
                >
                  UPDATE
                </Button>
              )}
            </div>
          </div>
        </div>
      </FormComponent>
    </StyledComponent>
  );
};
export default EditProfile;
