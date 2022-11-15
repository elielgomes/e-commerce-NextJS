import styled from "styled-components";

export const NavBody = styled.div<{ isActive: boolean }>`
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
    transition: all var(--transitions);

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
        -webkit-transition: all var(--transitions) ease-in-out;
        transition: all var(--transitions) ease-in-out;
      }

      &:hover::before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
`;

export const ContainerButtonsMenu = styled.div``;

export const ListButtonsMenu = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ButtonsMenuItems = styled.li`
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
    transition: var(--transitions);
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
`;
export const MyAccountItem = styled(ButtonsMenuItems)<{
  isDropDownActive: boolean;
}>`
  ${({ isDropDownActive }) =>
    isDropDownActive
      ? `background-color: #ff497c; border-radius: 100%;`
      : `background-color: none; border-radius: 100%;`};
`;

export const UserDropDown = styled.div<{ isDropDownActive: boolean }>`
  position: absolute;
  top: 100%;
  right: 0px;
  background: #fff;
  min-width: 250px;
  padding: 20px;
  border-radius: 4px;
  list-style: none;
  margin-top: 20px;

  ${({ isDropDownActive }) =>
    isDropDownActive
      ? ` opacity: 1; visibility: visible; z-index: 9; transform: translateY(0);`
      : `opacity: 0; visibility: hidden; z-index: -1; transform: translateY(30px);`};

  &:active {
    opacity: 1;
    visibility: visible;
    z-index: 9;
    transform: translateY(0);
  }

  a.dropdown-button-login {
    button {
      border: none;
      border-radius: 5px;
      width: 100%;
      background-color: #3577f0;
      height: 40px;
      font-size: 20px;
      color: #fff;
      transition: all var(--transitions);
      &:hover {
        transform: scale(1.05);
        filter: brightness(0.9);
      }
    }
  }

  p {
    padding-top: 5px;
    text-align: center;
    font-size: 11px;
    a{
      font-weight: bold;
      transition: all var(--transitions);
      padding: 5px;
      border-bottom: 1px solid #999fae;
      &:hover {
        color: #3577f0;
        border-bottom: 1px solid #3577f0;
      }
    }
  }
`;

export const DropDownList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
  li {
    padding: 10px 0;
    border-bottom: 1px solid #f6f7fb;
  }
  a {
    &:hover {
      color: #3577f0;
    }
  }
`;
