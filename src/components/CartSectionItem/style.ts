import styled from 'styled-components'

export const ItemCartList = styled.tr`
  border-bottom: 1px solid #0000007f;

  &:last-child {
    border: none;
  }
`;

export const ItemButtonRemove = styled.td`
  button.remove-item {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: none;
    transition: all var(--transitions);

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
  }
`;

export const ItemProductImage = styled.td`
  width: 130px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const ItemProductName = styled.td`
  width: 200px;
`;

export const ItemProductPrice = styled.td`
  text-align: center;
`;

export const ItemProductQuantity = styled.td``;

export const ItemProductTotalPrice = styled.td`
  text-align: center;
`;

export const ContainerButtonsQuantityCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonDecrease = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid transparent;
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
export const ButtonIncrease = styled(ButtonDecrease)``;

export const CurrentQuantity = styled.span`
  width: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`;
