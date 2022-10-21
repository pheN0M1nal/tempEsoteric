import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  .formfooter {
        align-items: center;
        flex-direction: column;
      
		
    }
`;

export const AuthButtonContainer = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
