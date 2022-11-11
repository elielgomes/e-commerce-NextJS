import styled from "styled-components";

type TypeProps = {
  isOpen: boolean;
};

export const ModalBody = styled.div<TypeProps>`
  ${({ isOpen }) => (isOpen ? `width: 600px;` : `width: 0px;`)}

  height: 100vh;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  right: 0px;
  transition: var(--transitions);
`;

export const ModalContent = styled.div`
  height: 100%;
  width: 600px;
  padding: 40px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #adb5bd;
    border-radius: 20px;
    transition: var(--transitions);
  }
`;

export const ContainerModalButtonClose = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 2px solid #f6f7fb;
  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

export const ModalButtonClose = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  transition: all var(--transitions);

  svg {
    width: 50%;
    height: 50%;
    transition: all var(--transitions);
  }

  &:hover {
    background-color: #3577f0;
    svg {
      color: #fff;
    }
  }
`;

export const ModalCartList = styled.ul`
  padding: 30px 0;
  min-height: 60vh;
`;

export const ContainerFooterModalCart = styled.div`
  border-top: 2px solid #f6f7fb;
`;

export const ContainerSubtotalPriceCart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  span {
    font-size: 20px;
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

export const ContainerGroupButtonsModalCart = styled.div`
  padding: 15px 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  button {
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    transition: var(--transitions);
    color: #fff;
    font-size: 18px;

    &:hover {
      transform: scale(1.05);
    }

    &.view-cart {
      background-color: #3577f0;
    }
    &.checkout {
      background-color: #ff497c;
    }
  }
`;
