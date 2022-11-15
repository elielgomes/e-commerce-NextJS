import styled from "styled-components";

export const ContainerContactSection = styled.div`
  margin: 0 auto;
  padding: 100px 60px;
  max-width: 1500px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

export const ContainerAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

export const BodyAddress = styled.div`
  background-color: #fff;
  border-radius: 6px;
  height: auto;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1240px) {
    width: 750px;
    flex-direction: row;
    gap: 60px;
  }
`;

export const OurStore = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const OpeningHours = styled(OurStore)``;
