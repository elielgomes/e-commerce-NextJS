import styled from "styled-components";

type TypeProps = {
  backgroundCarousel: string;
};

export const ContainerCarousel = styled.div`
  margin-bottom: 130px;
  margin: 80px auto;
  max-width: 600px;
  overflow: hidden;
  height: 290px;

  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 200px;
    max-height: 100vh;
  }

  .carousel {
    width: 100%;
    height: 100%;
    overflow: visible;
    position: absolute;
    transform: translateZ(-288px);
    transform-style: preserve-3d;
  }
  .carousel__cell {
    position: absolute;
    width: 240px;
    left: 10px;
    height: 200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Scene = styled.div`
  width: 260px;
  height: 200px;
  perspective: 1000px;
  position: relative;
`;

export const Slide = styled.div<TypeProps>`
  background-image: url(${(props) => props.backgroundCarousel});
  background-size: cover;
  background-position: center center;
  &::after {
    position: absolute;
    width: 64%;
    height: 3%;
    left: 18%;
    border-radius: 50%;
    z-index: -1;
    bottom: 0%;
    content: "";
    box-shadow: 2px 50px 24px 10px rgba(0, 0, 0, 0.103);
  }
`;
