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
  background-color: blue;

  img {
    width: 100%;
    transition: all 0.5s;
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
