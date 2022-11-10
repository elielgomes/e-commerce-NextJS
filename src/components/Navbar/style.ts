import styled from "styled-components";

type TypeProps = {
  isActive: boolean;
};

export const NavBody = styled.div<TypeProps>`
  width: 100vw;
  height: 60px;
  position: fixed;
  padding: 0 30px;
  z-index: 99;

  nav {
    margin: 0 auto;
    display: flex;
    height: 100%;
    gap: 30px;
    max-width: 1000px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(255, 255, 255, 0.17);
    transition: all 0.3s;

    ${({ isActive }) =>
      isActive
        ? `background-color:rgba(255, 255, 255, 0);`
        : `background-color: #fff;`};
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 40px;
  list-style: none;

  li {
    a {
      padding: 15px 10px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.2s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s;
      }

      &:hover::before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
`;

export const ContainerButtonsMenu = styled.div`
  ul {
    display: flex;
    gap: 30px;

    li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        position: relative;

        &::after {
          content: "";
          height: 30px;
          width: 30px;
          background-color: #ff497c;
          transform: scale(0);
          border-radius: 50%;
          position: absolute;
          z-index: -1;
          transition: 0.2s;
        }
        &:hover::after {
          transform: scale(1);
        }

        svg {
          width: 20px;
          height: 20px;
          position: absolute;
        }

        span#cart-count {
          text-align: center;
          background-color: #3577f0;
          border: 2px solid #fff;
          font-size: 12px;
          font-weight: 500;
          color: #fff;
          border-radius: 50%;
          height: 22px;
          width: 22px;
          line-height: 19px;
          position: absolute;
          top: -8px;
          right: -8px;
        }
      }
    }
  }
`;
