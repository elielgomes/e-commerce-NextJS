import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 50px;
`;
export const ListProducts = styled.ul`
  margin: auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  column-gap: 60px;
  row-gap: 100px;
  justify-content: center;
`;
