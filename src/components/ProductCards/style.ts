import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const CardBody = styled.div`
  background-color: #fff;
  width: 255px;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const ContainerImageCard = styled.div`
  height: 255px;
  width: 255px;
  overflow: hidden;
  background-color: #fff;
  position: relative;

  img {
    width: 100%;
    transition: all 0.5s;
  }

  div.drop-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: -60px;
    opacity: 0;
    visibility: hidden;
    transition: 1s;
    z-index: 2;

    button.add-cart {
      border: none;
      color: #fff;
      font-size: 16px;
      border-radius: 10px;
      background-color: var(--primary-color);
      width: 90px;
      height: 40px;
      transition: all var(--transitions) ease-out;
    }
  }

  &:hover {
    div.drop-infos {
      bottom: 0px;
      opacity: 1;
      visibility: initial;

      button:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const ContainerCardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  width: 255px;

  p.product-name {
    font-size: 20px;
    color: #1e1e1eb3;
    text-align: center;
  }

  div.price-variant {
    padding: 10px;
    span {
      margin: 0 10px;
    }

    span.previous-price {
      text-decoration: line-through;
      font-size: 15px;
      color: #adadad;
    }
    span.current-price {
      font-size: 20px;
      color: #1e1e1eb3;
    }
  }
`;
