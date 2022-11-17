import styled from "styled-components";

export const ContainerMap = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;

export const IFrameMap = styled.iframe`
  @media (max-width: 1240px) {
    & {
      width: 100%;
    }
  }
`;
