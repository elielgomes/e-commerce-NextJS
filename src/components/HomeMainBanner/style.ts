import styled from "styled-components";

export const ContainerMainBanner = styled.div`
  height: 600px;
  background-image: url("/assets/banners/bg-banner-woman.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 425px) {
    & {
      background-position: 60%;
    }
  }
`;

export const ContainerInfoBanner = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 100px;
  div {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    h1 {
      font-size: 70px;
      font-weight: 300;
    }
    p {
      color: #1e1e1e97;
    }
    button {
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      color: #fff;
      background-color: #ff497c;
      padding: 15px;
      box-shadow: 1px 1px 8px #0000008b;
      transition: all var(--transitions);
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 425px) {
    & {
      padding: 0 30px;
      div {
        max-width: 300px;
        h1 {
          font-size: 50px;
        }
      }
    }
  }
`;
