import styled from "styled-components";

export const ContainerRegisterSection = styled.div`
  display: flex;
  gap: 100px;

  @media (min-width: 2560px) {
    & {
      gap: 380px;
    }
  }
  @media (max-width: 768px) {
    & {
      display: initial;
      gap: 0;
    }
  }
`;

export const ContainerSideBanner = styled.div`
  background-image: url("/assets/bg-register-user.jpg");
  width: 690px;
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const ContainerRegisterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 40px;
`;
