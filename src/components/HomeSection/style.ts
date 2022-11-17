import styled from "styled-components";

export const ContainerSectionPosters = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`;

export const SectionPosters = styled.section`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  @media (max-width: 768px) {
    & {
      padding: 50px 20px;
    }
  }
`;

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 500px;
  height: 198px;
  border-radius: 6px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    transition: all 0.5s;
    border-radius: 6px;
  }

  div {
    position: absolute;
    z-index: 1;
    width: 200px;

    &.poster-1-title {
      margin-left: 80px;
    }

    &.poster-2-title {
      margin-right: 80px;
    }

    h3 {
      font-size: 30px;
      color: #fff;
    }

    p {
      color: #ffffff7f;
      transition: all 0.5s;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    p {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    & {
      width: 100%;
      height: calc(35vw);
    }
  }

  @media (max-width: 425px) {
    & {
      div {
        h3 {
          font-size: 20px;
        }
        p {
          font-size: 14px;
        }
        &.poster-1-title {
          margin-left: 100px;
        }
        &.poster-2-title {
          margin-right: 30px;
        }
      }
    }
  }
`;
