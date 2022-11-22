import styled from "styled-components";


export const BodyCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #777;
  padding: 20px 0px;
`;

export const ContainerImage = styled.div`
  img {
    width: 80px;
  }
`;

export const ContainerName = styled.div`
  max-width: 220px;
`;

export const ContainerId = styled(ContainerName)``;

export const ContainerPrice = styled(ContainerName)``;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;

  button,
  a {
    border: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all var(--transitions);

    svg {
      transition: all var(--transitions);
    }
  }

  button {
    &:hover {
      background-color: var(--primary-color);
      svg {
        color: #fff;
      }
    }
  }

  a {
    &:hover {
      background-color: var(--secondary-color);
      svg {
        color: #fff;
      }
    }
  }
`;