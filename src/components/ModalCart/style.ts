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
  transition: 0.3s;
`;

export const ModalContent = styled.div`
height: 600px;
width: 100%;
padding: 40px;
overflow: auto;
`

export const ContainerModalButtonClose = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 1px solid #1e1e1e59;
`;

export const ModalButtonClose = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  transition: all 0.3s;

  svg {
    width: 50%;
    height: 50%;
    transition: all 0.3s;
  }

  &:hover {
    background-color: #3577f0;
    svg {
      color: #fff;
    }
  }
`;
