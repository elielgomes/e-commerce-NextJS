import styled from "styled-components";

export const ContainerSwiper = styled.div`
  margin: 100px 0;
  background-color: #f9f3f0;
`;

export const ContainerFeedback = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 50px;
  height: 50vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerCardFeedback = styled.div`
  .card {
    width: 300px;
    height: 250px;
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-top: 25px solid #fff;
      border-right: 50px solid rgba(0, 0, 0, 0);
      bottom: -25px;
      left: 100px;
      position: absolute;
    }
    p {
      color: #505050b3;
    }
  }

  .userInfos {
    padding-top: 40px;
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 60px;
    }
  }
`;
