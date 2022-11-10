import styled from "styled-components";

export const ContainerSectionPosters = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`;

export const SectionPosters = styled.section`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 500px;
  height: 198px;
  border-radius: 10px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    transition: all 0.5s;
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
`;
