import styled from "styled-components";

export const ModalCartItem = styled.li`
  border-bottom: 1px solid #f6f7fb;
  padding-bottom: 30px;
  margin-bottom: 30px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ContainerCartItem = styled.div`
  display: flex;
`;

export const ContainerImageCartItem = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin-right: 20px;

  img.image-item-cart-modal {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
  }

  @media (max-width: 320px) {
    & {
      width: 70px;
      height: 70px;
    }
  }
`;

export const ButtonRemoveItemCart = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
  transition: all var(--transitions);
  z-index: 10;
  position: absolute;
  top: -5px;
  left: -5px;

  svg {
    width: 50%;
    height: 50%;
    transition: all var(--transitions);
    color: #000;
  }

  &:hover {
    background-color: #3577f0;
    svg {
      color: #fff;
    }
  }
`;

export const ContainerItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const ContainerItemTitle = styled.div`
  h3 {
    font-size: 18px;
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  @media (max-width: 425px) {
    & {
      h3 {
        font-size: 16px;
        width: 150px;
      }
    }
  }

  @media (max-width: 375px) {
    & {
      h3 {
        font-size: 14px;
        width: 110px;
      }
    }
  }
  @media (max-width: 320px) {
    & {
      h3 {
        font-size: 12px;
        width: 100px;
      }
    }
  }
`;

export const ContainerItemPrice = styled.div`
  span {
    font-size: 20px;
  }
`;

export const ContainerItemQuantity = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonDecreaseQuantity = styled.button`
  border: none;
  height: 26px;
  width: 26px;
  line-height: 20px;
  color: #000;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  svg {
    padding: 2px 0 0;
  }
  &:hover {
    background-color: #3577f0;
    color: #fff;
  }
`;

export const ButtonIncreaseQuantity = styled(ButtonDecreaseQuantity)``;

export const CurrentValue = styled.span`
  width: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`;
