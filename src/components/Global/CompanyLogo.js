import styled from "styled-components";

const Logo = styled.div`
  width: 15rem;
  @media (max-width: 920px) {
    width: 7rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CompanyLogo = ({ size }) => (
  <Logo size={size}>
    <img src="{logo}" alt="" />

  </Logo>
);
