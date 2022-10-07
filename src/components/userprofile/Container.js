import styled from "styled-components";
import { MainWrapper } from "../Global/MainWrapper";
import { SizedBox } from "../Global/SizedBox";
import ProfileForm from "./component/ProfileForm";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1271px;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 10rem;
`;

export const UserProfileContainer = () => {
  return (
    <MainWrapper>
      <StyledContainer>
        <ProfileForm />
      </StyledContainer>
    </MainWrapper>
  );
};
